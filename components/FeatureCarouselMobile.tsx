"use client";

import Image from "next/image";
import { useState } from "react";

const SLIDE_COUNT = 8;
const slides = Array.from({ length: SLIDE_COUNT }, () => ({
  src: "/features-ai-generation.png",
  alt: "AI Generation — create captions & flyers instantly",
}));

export default function FeatureCarouselMobile() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  return (
    <div>
      <div className="relative w-full" style={{ aspectRatio: "352 / 520" }}>
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(min-width: 640px) 400px, 100vw"
          className="object-contain"
          priority={active === 0}
        />
      </div>

      {/* Slide dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === active ? "bg-amber-400" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <button
        type="button"
        className="w-full mt-8 h-14 rounded-2xl text-white font-bold text-base transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: "#FBBF24", boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)" }}
      >
        Get Free Insights
      </button>
    </div>
  );
}
