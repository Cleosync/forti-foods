"use client";

import React from "react";
import Button from "./ui/button";

function FortiContact() {
  const handleContactClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfs1pHecWmLyeb9Tp0rPA2ebxityBrjVsLwzKY8ELPeUZSyDg/viewform?usp=publish-editor",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="w-full font-sans overflow-hidden">
      <div className="relative py-6 lg:px-6 px-4 ">
        {/* Decorative background accents */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          {/* Large faint circles top-right */}
          <div className="absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full border border-gray-200 opacity-60" />
          <div className="absolute -top-12 -right-12 w-[320px] h-[320px] rounded-full border border-gray-200 opacity-40" />
          {/* Dot grid bottom-left */}
          <div className="absolute bottom-10 left-10 grid grid-cols-4 gap-2.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-gray-300 opacity-60"
              />
            ))}
          </div>
        </div>

        <div className="relative ">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-px bg-gray-300" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">
              Partner With Us
            </span>
            <span className="w-8 h-px bg-gray-300" />
          </div>

          {/* Card */}
          <div className="bg-accent  border-gray-200 rounded-3xl  px-8 py-6 sm:px-16 flex flex-col items-center text-center gap-6">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary leading-[1.1] max-w-xl">
              Every great meal starts with a conversation.
            </h2>

            {/* Subtext */}
            <p className="text-base text-gray-500 leading-relaxed max-w-lg">
              Whether you're an NGO, a government body, a humanitarian
              organisation, or simply believe in nourishing communities with
              dignity — we'd love to hear from you.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 w-full max-w-xs">
              <div className="flex-1 h-px bg-gray-100" />
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs text-gray-400">
              {[
                "NGOs & Aid Organisations",
                "Government & Military",
                "Schools & Communities",
              ].map((label) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-2 pt-2">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2"
              >
                <Button>
                  Contact Us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </Button>
              </button>
            </div>
          </div>

          {/* Email fallback */}
          <p className="mt-3 text-center text-xs text-gray-400 leading-relaxed">
            Prefer email? Reach us at{" "}
            <a
              href="mailto:info@forti-foods.com"
              className="text-gray-600 underline underline-offset-2 hover:text-gray-900 transition-colors"
            >
              info@forti-foods.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default FortiContact;
