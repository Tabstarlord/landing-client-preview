"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type FeatureSlide = {
  src: string;
  alt: string;
};

const AUTOPLAY_INTERVAL_MS = 5000;

export default function FeatureCarousel({
  slides,
  aspectRatio,
  sizes,
  autoPlay = true,
  className = "",
}: {
  slides: FeatureSlide[];
  aspectRatio: string;
  sizes: string;
  autoPlay?: boolean;
  className?: string;
}) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length);
  };
  const goNext = () => goTo(active + 1);
  const goPrev = () => goTo(active - 1);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);
    return () => clearInterval(id);
  }, [autoPlay, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const SWIPE_THRESHOLD = 40;
    if (deltaX > SWIPE_THRESHOLD) goPrev();
    else if (deltaX < -SWIPE_THRESHOLD) goNext();
    touchStartX.current = null;
  };

  return (
    <div className={className}>
      <div
        className="relative w-full group"
        style={{ aspectRatio }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-roledescription="carousel"
        aria-label="Product features"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === active ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes={sizes}
              className="object-contain"
              priority={i === 0}
            />
          </div>
        ))}

        {/* Prev/Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous slide"
          className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next slide"
          className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 shadow-md flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Slide dots */}
      <div className="flex justify-center gap-1.5 mt-6">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1}: ${slide.alt}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${
              i === active ? "bg-amber-400 w-6" : "bg-gray-300 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
