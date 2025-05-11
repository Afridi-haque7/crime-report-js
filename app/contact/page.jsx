"use client";

import ContactForm from "@/components/contact/ContactForm";
import EmergencyList from "@/components/contact/Emergency";
import FAQ from "@/components/contact/FAQ";

export default function Resources() {
  return (
    <div className="relative min-h-screen bg-black selection:bg-sky-500/20 overflow-hidden">
      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03),transparent_50%)]" />
        <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.04),transparent_70%)]" />
      </div>

      <main className="relative px-4 md:px-12 pt-20 pb-20">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex h-9 items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 text-sm text-sky-400">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.00024000000000000003"
              transform="rotate(-45)"
              className="w-5 h-5"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="#CCCCCC"
                strokeWidth="0.048"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14 10C14 9.44771 13.5523 9 13 9H12.5C9.46243 9 7 11.4624 7 14.5C7 17.5376 9.46243 20 12.5 20H17.5C20.5376 20 23 17.5376 23 14.5C23 12.0091 21.3441 9.90488 19.073 9.22823C18.5098 9.06042 18 9.52887 18 10.1166V10.1683C18 10.6659 18.3745 11.0735 18.8345 11.2634C20.1055 11.788 21 13.0395 21 14.5C21 16.433 19.433 18 17.5 18H12.5C10.567 18 9 16.433 9 14.5C9 12.567 10.567 11 12.5 11H13C13.5523 11 14 10.5523 14 10Z"
                  fill="#00bfff"
                ></path>{" "}
                <path
                  d="M11.5 4C14.5376 4 17 6.46243 17 9.5C17 12.5376 14.5376 15 11.5 15H11C10.4477 15 10 14.5523 10 14C10 13.4477 10.4477 13 11 13H11.5C13.433 13 15 11.433 15 9.5C15 7.567 13.433 6 11.5 6H6.5C4.567 6 3 7.567 3 9.5C3 10.9605 3.89451 12.212 5.16553 12.7366C5.62548 12.9264 6 13.3341 6 13.8317V13.8834C6 14.4711 5.49024 14.9396 4.92699 14.7718C2.65592 14.0951 1 11.9909 1 9.5C1 6.46243 3.46243 4 6.5 4H11.5Z"
                  fill="#00bfff"
                ></path>{" "}
              </g>
            </svg>
            Connect with Us
          </div>

          <h1 className="mt-8 bg-gradient-to-b from-white to-white/80 bg-clip-text text-5xl font-bold tracking-tight text-transparent">
            Have Questions? We&apos;re Here to Help
            <span className="block text-3xl mt-4 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Let&apos;s Resolve Your Queries
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Learn how we use technology to protect your identity while ensuring
            your report reaches the right authorities.
          </p>
        </div>
        {/* Emergency dials */}
        <div className="flex flex-col gap-4 lg:flex-row ">
          <EmergencyList />
          {/* FAQs */}
          <FAQ />
        </div>
        {/* Contact Form */}
        <ContactForm />
      </main>
    </div>
  );
}
