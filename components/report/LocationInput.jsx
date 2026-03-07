"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Script from "next/script";

/**
 * LocationInput
 * - Google Places Autocomplete text input
 * - Detect my location button (HTML Geolocation + reverse geocode)
 *
 * Props
 * - id: string (for input id/label association)
 * - value: string (address text)
 * - onChange: (value: string) => void
 * - onCoordinateChange: (lat: number|null, lng: number|null) => void
 */
export function LocationInput({ id, value, onChange, onCoordinateChange }) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);

  const [isMapsReady, setIsMapsReady] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const initAutocomplete = useCallback(() => {
    if (!window.google || !window.google.maps || !inputRef.current) return;
    // Avoid re-initialization
    if (autocompleteRef.current) return;

    const options = {
      fields: ["formatted_address", "geometry", "name", "address_components"],
      types: ["geocode"],
    };

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      const address = place?.formatted_address || place?.name || "";
      const location = place?.geometry?.location;
      if (address) onChange?.(address);
      if (location) {
        const lat =
          typeof location.lat === "function" ? location.lat() : location.lat;
        const lng =
          typeof location.lng === "function" ? location.lng() : location.lng;
        onCoordinateChange?.(lat, lng);
      }
    });

    autocompleteRef.current = autocomplete;
  }, [onChange, onCoordinateChange]);

  useEffect(() => {
    // Initialize when the Google script is available
    if (typeof window !== "undefined" && window.google && window.google.maps) {
      setIsMapsReady(true);
    }
  }, []);

  useEffect(() => {
    if (isMapsReady) initAutocomplete();
  }, [isMapsReady, initAutocomplete]);

  const handleDetectLocation = async () => {
    setErrorMessage("");
    if (!("geolocation" in navigator)) {
      setErrorMessage("Geolocation is not supported by your browser.");
      return;
    }

    setIsDetecting(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        // Update coordinates immediately
        onCoordinateChange?.(lat, lng);

        // Reverse geocode if Maps JS API is available
        try {
          if (window.google?.maps?.Geocoder) {
            const geocoder = new window.google.maps.Geocoder();
            const { results } = await geocoder.geocode({
              location: { lat, lng },
            });
            const formatted = results?.[0]?.formatted_address || "";
            if (formatted) onChange?.(formatted);
          } else {
            // Fallback to plain coordinates text
            onChange?.(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
          }
        } catch (err) {
          onChange?.(`${lat.toFixed(6)}, ${lng.toFixed(6)}`);
        } finally {
          setIsDetecting(false);
        }
      },
      (error) => {
        setIsDetecting(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setErrorMessage("Location permission denied.");
            break;
          case error.POSITION_UNAVAILABLE:
            setErrorMessage("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            setErrorMessage("Location request timed out.");
            break;
          default:
            setErrorMessage("Failed to detect location.");
        }
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div>
      {/* Load Google Maps JS API once on the page */}
      {apiKey ? (
        <Script
          src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&v=weekly`}
          strategy="afterInteractive"
          onLoad={() => setIsMapsReady(true)}
        />
      ) : null}

      <label
        htmlFor={id}
        className="block text-sm font-medium text-zinc-400 mb-2"
      >
        Location
      </label>
      <div className="flex gap-2">
        <input
          id={id}
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder="Search for a place or address"
          className="w-full rounded-xl bg-zinc-900/50 border border-zinc-800 px-4 py-3.5 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          required
        />
        <button
          type="button"
          onClick={handleDetectLocation}
          className="shrink-0 inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 px-3.5 py-3.5 text-zinc-200 hover:border-sky-500/40 hover:bg-sky-500/10 transition-colors duration-200"
          aria-label="Detect my location"
        >
          {isDetecting ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
              />
            </svg>
          )}
        </button>
      </div>
      {errorMessage ? (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      ) : null}
      {!apiKey ? (
        <p className="mt-2 text-sm text-amber-500">
          Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to enable autocomplete.
        </p>
      ) : null}
    </div>
  );
}

export default LocationInput;
