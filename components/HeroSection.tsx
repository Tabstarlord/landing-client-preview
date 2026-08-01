"use client";

import HeroShowcase from "./HeroShowcase";
import PhoneFrame from "./PhoneFrame";
import ImagePlaceholder from "./ImagePlaceholder";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="overflow-hidden pb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 38%, #FFFBEB 60%, #FEF3C7 78%, #FDE68A 100%)",
      }}
    >
      {/* Text block */}
      <div className="max-w-5xl mx-auto flex flex-col items-center px-6 text-center pt-12 sm:pt-20 lg:pt-24 pb-10 sm:pb-16 lg:pb-20">
        {/* Sparkle icon */}
        <div className="flex justify-center mb-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-amber-400">
            <path d="M11 2v6M4 8l3.5 1.2M18.5 5.2L15 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Headline — mobile break: "Flyrinzo AI For" / "Small Business Growth" */}
        <h1
          className="sm:hidden font-bold text-[30px] leading-[1.15] mb-4"
          style={{ color: "#000000" }}
        >
          Flyrinzo AI For
          <br />
          Small <span style={{ color: "#FBBF24" }}>Business</span> Growth
        </h1>

        {/* Headline — sm+ break: "Flyrinzo AI" / "For Small Business Growth" */}
        <h1
          className="hidden sm:block font-bold text-[40px] lg:text-[56px] leading-[1.1] mb-5 lg:mb-6 px-2"
          style={{ color: "#000000" }}
        >
          Flyrinzo AI
          <br />
          For Small{" "}
          <span style={{ color: "#FBBF24" }}>Business</span>{" "}
          Growth
        </h1>

        {/* Tagline */}
        <p className="text-[17px] sm:text-[18px] lg:text-[20px] leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto" style={{ color: "#6F6C90" }}>
          Canada&apos;s all-in-one AI marketing platform for small business growth.
          <br />
          Connect. Post. Grow.
        </p>

        {/* Login / Get Started buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mt-4">
          <a
            href="https://app.flyrinzo.com"
            className="w-full sm:w-auto px-10 lg:px-12 h-13 lg:h-14 rounded-lg border-2 text-base font-semibold transition-all hover:scale-105 hover:shadow-lg flex items-center justify-center"
            style={{
              borderColor: "#FBBF24",
              color: "#FBBF24",
              backgroundColor: "white"
            }}
          >
            Login
          </a>
          <a
            href="https://app.flyrinzo.com"
            className="w-full sm:w-auto px-10 lg:px-12 h-13 lg:h-14 rounded-lg text-base font-semibold transition-all hover:scale-105 flex items-center justify-center"
            style={{
              backgroundColor: "#FBBF24",
              color: "#FFFFFF",
              boxShadow: "0 4px 14px 0 rgba(251, 191, 36, 0.4)"
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Mobile: phone-mockup screenshot (pending asset) */}
      <div className="lg:hidden relative w-full  flex flex-col px-6">
        <div className="relative   flex items-center justify-center">
          <Image src={"/home.svg"} width={350} height={720} alt=""/>
          
        </div>
        <div className="absolute bottom-0  left-1/2 -translate-x-1/2 min-w-full w-full bg-white/95 backdrop-blur px-4 py-6 text-center">
            <p className="text-xs text-gray-600 leading-snug">
              One platform. Smarter marketing. Better Results.
            </p>
          </div>
      </div>

      {/* Desktop: dashboard showcase carousel */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <HeroShowcase />
      </div>
    </section>
  );
}
