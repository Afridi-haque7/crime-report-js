"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto px-6 text-white w-screen">
          <div className="flex h-16 items-center gap-5 lg:gap-10 justify-between">
            {/* logo and brand */}
            <div className="flex items-center space-x-3">
              <Link href={"/"} className="flex items-center space-x-3">
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <span className="text-lg font-semibold text-wrap">
                  SafeReport
                </span>
              </Link>
            </div>

            {/* main navigation */}
            <div className="hidden lg:flex items-center justify-center space-x-6">
              <Link
                href={"/submit-report"}
                className="text-sm text-zinc-400 hover:text-white transition-all duration-200"
              >
                Submit Report
              </Link>
              <Link
                href={"/track-report"}
                className="text-sm text-zinc-400 hover:text-white transition-all duration-2"
              >
                Track Report
              </Link>
              <Link
                href={"/how-it-works"}
                className="text-sm text-zinc-400 hover:text-white transition-all duration-2"
              >
                How It Works
              </Link>
              <Link
                href={"/resources"}
                className="text-sm text-zinc-400 hover:text-white transition-all duration-200"
              >
                Resources
              </Link>
              <Link
                href={"/contact"}
                className="text-sm text-zinc-400 hover:text-white transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* emergency button */}

            <div className="flex items-center space-x-4 justify-around">
              <button className="group flex text-xs md:text-md items-center px-2 py-1 gap-1 rounded-full bg-red-500/10 font-medium text-red-500 ring-1 ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                Emergency: 100
              </button>

              {/* mobile menu button */}
              <button
                className="lg:hidden p-2 text-zinc-400 hover:text-white"
                onClick={() => {
                  setIsMobileMenuOpen(true);
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}
