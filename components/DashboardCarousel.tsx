"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/analytics.png", alt: "Flyrinzo analytics dashboard", label: "Analytics" },
  { src: "/posts.png", alt: "Flyrinzo scheduled posts", label: "Posts" },
  { src: "/community.png", alt: "Flyrinzo community feed", label: "Community" },
];

const INTERVAL_MS = 4000;

export default function DashboardCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-md lg:max-w-lg">
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "2908 / 1668" }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-all duration-700 ease-out ${
              i === active
                ? "opacity-100 translate-x-0 z-10"
                : "opacity-0 -translate-x-10 z-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Slide indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => setActive(i)}
            className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
              i === active
                ? "bg-amber-400 border-amber-400 text-gray-900"
                : "border-gray-200 text-gray-500 hover:border-gray-300"
            }`}
            aria-label={`Show ${slide.label} screenshot`}
            aria-current={i === active}
          >
            {slide.label}
          </button>
        ))}
      </div>
    </div>
  );
}
