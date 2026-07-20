"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "/analytics.png",
    alt: "Flyrinzo analytics dashboard",
    heading: "Deep",
    highlight: "Analytics",
    description:
      "Track performance, uncover AI-powered insights, and know exactly what to post next.",
  },
  {
    src: "/posts.png",
    alt: "Flyrinzo scheduled posts",
    heading: "Smart",
    highlight: "Scheduler",
    description:
      "Create, optimize, and schedule your content in seconds — powered by AI, built for consistency.",
  },
  {
    src: "/community.png",
    alt: "Flyrinzo community feed",
    heading: "Global",
    highlight: "Community",
    description:
      "Connect, learn, and grow alongside fellow entrepreneurs from around the world.",
  },
];

const INTERVAL_MS = 5000;

export default function HeroShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const slide = slides[active];

  return (
    <div className="grid lg:grid-cols-[3fr_7fr] rounded-t-[2rem] sm:rounded-t-[2.5rem] border-2 border-amber-400 border-b-0 overflow-hidden bg-white">
      {/* Left: text panel */}
      <div className="flex flex-col justify-center px-8 py-10 lg:px-10 lg:py-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {slide.heading} <span className="text-amber-400">{slide.highlight}</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
          {slide.description}
        </p>
        <Link
          href="/contact-us"
          className="self-start border-2 border-amber-400 text-amber-500 font-semibold text-sm rounded-xl px-6 py-3 mb-8 hover:bg-amber-50 transition-colors"
        >
          Get Free Insights
        </Link>

        {/* Slide indicators */}
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show ${s.highlight} screenshot`}
              aria-current={i === active}
              className={`h-1.5 w-8 rounded-full transition-colors ${
                i === active ? "bg-amber-400" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right: dashboard image carousel */}
      <div
        className="relative bg-gray-100 overflow-hidden"
        style={{ aspectRatio: "2908 / 1668" }}
      >
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              i === active
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 -translate-x-10 z-0"
            }`}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
