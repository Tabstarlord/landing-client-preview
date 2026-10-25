"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const solutionSlides = [
  { src: "/Solution-One.webp", alt: "AI-powered captions" },
  { src: "/Solution-Two.webp", alt: "Creative assets and templates" },
  { src: "/Solution-Three.webp", alt: "AI insights and recommendations" },
  { src: "/Solution-Four.webp", alt: "Smart scheduling" },
  { src: "/Solution-Five.webp", alt: "AI matchmaking" },
  { src: "/Solution-Six.webp", alt: "Entrepreneur community" },
  { src: "/Solution-Seven.webp", alt: "Global business opportunities" },
];

const solutionRailColors = [
  "border-amber-400 shadow-[0_0_18px_rgba(251,191,36,0.55)]",
  "border-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.5)]",
  "border-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.5)]",
  "border-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.5)]",
  "border-orange-400 shadow-[0_0_18px_rgba(251,146,60,0.5)]",
  "border-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.5)]",
  "border-indigo-400 shadow-[0_0_18px_rgba(129,140,248,0.5)]",
];

export default function FeaturesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateScrollState = () => {
      const cards = carousel.querySelectorAll<HTMLElement>("[data-solution-card]");
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];
      const carouselBounds = carousel.getBoundingClientRect();
      const firstCardBounds = firstCard?.getBoundingClientRect();
      const lastCardBounds = lastCard?.getBoundingClientRect();

      setCanScroll({
        left: Boolean(firstCardBounds && firstCardBounds.left < carouselBounds.left - 2),
        right: Boolean(lastCardBounds && lastCardBounds.right > carouselBounds.right + 2),
      });
    };

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    const resizeObserver = new ResizeObserver(updateScrollState);
    resizeObserver.observe(carousel);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollCards = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const card = carousel.querySelector<HTMLElement>("[data-solution-card]");
    const gap = Number.parseFloat(getComputedStyle(carousel).gap) || 0;
    const distance = (card?.offsetWidth ?? carousel.clientWidth) + gap;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    const nextScroll = Math.min(
      Math.max(carousel.scrollLeft + (direction === "right" ? distance : -distance), 0),
      maxScroll,
    );

    carousel.scrollTo({ left: nextScroll, behavior: "smooth" });
  };

  return (
    <section id="solutions" className="overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-8 lg:px-8">
        <div className="mb-6 flex justify-center sm:mb-8">
          <span className="flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-1.5 text-xs font-medium text-gray-500">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            Solutions
          </span>
        </div>

        <div
          className="mb-8 grid grid-cols-[16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px] items-center px-1 sm:mb-10"
          aria-hidden="true"
        >
          {solutionRailColors.map((color, index) => (
            <div key={color} className="contents">
              <span
                style={{ gridColumn: index * 2 + 1 }}
                className={`relative z-10 h-4 w-4 justify-self-center rotate-45 border-2 bg-transparent ${color}`}
              />
              {index < solutionRailColors.length - 1 && (
                <div
                  style={{ gridColumn: index * 2 + 2 }}
                  className="mx-[3px] border-t-[3px] border-dashed border-amber-300/70"
                />
              )}
            </div>
          ))}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scrollCards("left")}
            disabled={!canScroll.left}
            aria-label="Show previous solutions"
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl text-gray-700 shadow-[0_4px_14px_rgba(17,24,39,0.14)] transition hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 disabled:hover:bg-white sm:h-10 sm:w-10"
          >
            <ChevronLeft aria-hidden="true" size={22} strokeWidth={2.25} />
          </button>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6"
            aria-label="Flyrinzo solutions"
          >
            {solutionSlides.map((slide) => (
              <div
                key={slide.src}
                data-solution-card
                className="group relative min-w-0 shrink-0 snap-start basis-[calc(100%-2.5rem)] bg-cyan-300/80 p-[2px] shadow-[0_0_18px_rgba(34,211,238,0.24)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-amber-300 hover:shadow-[0_0_26px_rgba(251,191,36,0.38)] motion-reduce:transition-none sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))",
                }}
              >
                <div
                  className="relative overflow-hidden bg-[#0b1424]"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    width={1080}
                    height={1920}
                    className="block h-auto w-full transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-110 motion-reduce:transition-none"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                  />
                  <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[calc(100%-22px)] bg-gradient-to-r from-amber-300 via-cyan-300 to-cyan-200 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[calc(100%-22px)] w-[2px] bg-gradient-to-b from-cyan-200 via-cyan-300 to-amber-300 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute right-0 top-[22px] h-[calc(100%-22px)] w-[2px] bg-gradient-to-b from-cyan-200 via-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute bottom-0 right-[22px] h-[2px] w-[calc(100%-22px)] bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.9)]" />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollCards("right")}
            disabled={!canScroll.right}
            aria-label="Show next solutions"
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-2xl text-gray-700 shadow-[0_4px_14px_rgba(17,24,39,0.14)] transition hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 disabled:hover:bg-white sm:h-10 sm:w-10"
          >
            <ChevronRight aria-hidden="true" size={22} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
