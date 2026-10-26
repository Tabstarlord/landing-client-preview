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
      const bounds = carousel.getBoundingClientRect();
      const firstBounds = firstCard?.getBoundingClientRect();
      const lastBounds = lastCard?.getBoundingClientRect();

      setCanScroll({
        left: Boolean(firstBounds && firstBounds.left < bounds.left - 2),
        right: Boolean(lastBounds && lastBounds.right > bounds.right + 2),
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
    <section id="solutions" className="relative overflow-hidden bg-white py-9 sm:py-11 lg:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_28%,rgba(255,226,123,0.28),transparent_34%),radial-gradient(ellipse_at_72%_46%,rgba(255,239,181,0.4),transparent_46%),radial-gradient(ellipse_at_88%_58%,rgba(255,225,123,0.22),transparent_35%),linear-gradient(180deg,#ffffff_0%,#fffefc_52%,#fffdf7_100%)]" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 980" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id="solutions-ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff9dc" stopOpacity="0" />
            <stop offset="0.28" stopColor="#fff2a8" stopOpacity="0.58" />
            <stop offset="0.52" stopColor="#facc15" stopOpacity="0.94" />
            <stop offset="0.76" stopColor="#ffe16b" stopOpacity="0.72" />
            <stop offset="1" stopColor="#fff7d0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="solutions-halo" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#fff7cf" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fbbf24" stopOpacity="0.38" />
            <stop offset="1" stopColor="#fff7cf" stopOpacity="0" />
          </linearGradient>
          <filter id="solutions-soft-glow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
          <filter id="solutions-line-glow" x="-20%" y="-100%" width="140%" height="300%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>
        {/* Soft golden atmosphere behind the metrics panel */}
        <path d="M625 410 C715 310 820 270 950 280 C1110 295 1285 265 1445 155" fill="none" stroke="url(#solutions-halo)" strokeWidth="100" filter="url(#solutions-soft-glow)" />
        <path d="M650 470 C780 570 915 590 1050 540 C1190 488 1305 535 1450 470" fill="none" stroke="url(#solutions-halo)" strokeWidth="112" filter="url(#solutions-soft-glow)" />
        {/* Layered, fine light trails recreate the flowing gold ribbons in the reference */}
        <path d="M680 360 C790 245 900 235 1030 255 C1170 278 1310 230 1450 125" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="18" opacity="0.42" filter="url(#solutions-line-glow)" />
        <path d="M680 360 C790 245 900 235 1030 255 C1170 278 1310 230 1450 125" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="2.3" opacity="0.8" />
        <path d="M640 415 C760 315 875 300 1010 322 C1175 350 1300 305 1450 220" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="14" opacity="0.34" filter="url(#solutions-line-glow)" />
        <path d="M640 415 C760 315 875 300 1010 322 C1175 350 1300 305 1450 220" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="1.8" opacity="0.72" />
        <path d="M645 450 C700 535 820 575 960 560 C1100 545 1225 482 1360 505 C1395 511 1424 525 1450 540" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="20" opacity="0.36" filter="url(#solutions-line-glow)" />
        <path d="M645 450 C700 535 820 575 960 560 C1100 545 1225 482 1360 505 C1395 511 1424 525 1450 540" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="2" opacity="0.76" />
        <path d="M720 585 C850 650 1000 610 1115 565 C1245 515 1340 548 1450 610" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="14" opacity="0.3" filter="url(#solutions-line-glow)" />
        <path d="M720 585 C850 650 1000 610 1115 565 C1245 515 1340 548 1450 610" fill="none" stroke="url(#solutions-ribbon)" strokeWidth="1.7" opacity="0.65" />
      </svg>
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-10">
        <div className="mb-6 flex justify-center md:mb-8">
          <span className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm text-gray-500 shadow-sm">
            <svg className="h-3 w-3" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            Solutions
          </span>
        </div>
        <div className="grid items-center gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-[640px] text-[26px] font-black uppercase leading-[1.2] tracking-[-0.045em] text-[#050505] sm:text-[40px] lg:mx-0 lg:text-[45px]">
              Everything you need to<br />
              <span className="text-[#f5a900]">manage right</span> in your<br />
              pocket.
            </h2>
            <p className="mx-auto mt-6 max-w-[590px] text-base leading-relaxed text-gray-500 sm:text-lg lg:mx-0">
              Schedule posts, create stunning visuals, get AI-powered content suggestions, analyze performance, and grow your audience across all major social media platforms — all from one powerful dashboard.
            </p>
          </div>

          <div className="relative flex min-h-[190px] items-center justify-center px-2 py-7 sm:px-5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(253,224,71,0.34),rgba(255,251,235,0.12)_52%,transparent_72%)]" />
            <div className="relative grid w-full max-w-[720px] grid-cols-3 px-4 py-7 shadow-[0_0_22px_rgba(251,191,36,0.18)] sm:px-8 sm:py-9">
              <div className="absolute inset-0 z-0 bg-white/90 [clip-path:polygon(3.6%_0.9%,96.4%_0.9%,99.7%_11.8%,99.7%_88.2%,96.4%_99.1%,3.6%_99.1%,0.3%_88.2%,0.3%_11.8%)]" />
              <svg className="pointer-events-none absolute inset-0 z-0 h-full w-full" viewBox="0 0 720 220" preserveAspectRatio="none" fill="none" aria-hidden="true">
                <path d="M26 2H694L718 26V194L694 218H26L2 194V26L26 2Z" stroke="#FACC15" strokeWidth="2.5" />
                <path d="M36 10H684L710 36V184L684 210H36L10 184V36L36 10Z" stroke="#FDE047" strokeWidth="1.5" />
                <path d="M17 38L37 18H61M683 18H695L713 38M17 182L37 202H61M683 202H695L713 182" stroke="#FACC15" strokeWidth="1.5" />
              </svg>
              {[["7", "Core marketing tools"], ["1,000+", "Templates"], ["1", "Powerful dashboard"]].map(([value, label], index) => (
                <div key={label} className={`relative z-10 flex flex-col items-center justify-center text-center ${index > 0 ? "border-l border-[#f3c229]/60" : ""}`}>
                  <strong className="text-4xl font-black tracking-[-0.06em] text-[#e99b00] sm:text-5xl lg:max-[1270px]:text-3xl">{value}</strong>
                  <span className="mt-2 max-w-[130px] text-[10px] font-bold uppercase leading-4 tracking-[0.1em] text-[#3f4058] sm:text-xs lg:max-[1270px]:max-w-[110px] lg:max-[1270px]:text-[10px] lg:max-[1270px]:leading-3">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-5 mt-6 grid grid-cols-[16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px_minmax(0,1fr)_16px] items-center px-1 sm:mb-6 sm:mt-7" aria-hidden="true">
          {solutionRailColors.map((color, index) => (
            <div key={color} className="contents">
              <span style={{ gridColumn: index * 2 + 1 }} className={`relative z-10 h-4 w-4 justify-self-center rotate-45 border-2 bg-transparent ${color}`} />
              {index < solutionRailColors.length - 1 && (
                <div style={{ gridColumn: index * 2 + 2 }} className="mx-[3px] border-t-[3px] border-dashed border-amber-300/70" />
              )}
            </div>
          ))}
        </div>

        <div className="relative">
          <button type="button" onClick={() => scrollCards("left")} disabled={!canScroll.left} aria-label="Show previous solutions" className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-[0_4px_14px_rgba(17,24,39,0.14)] transition hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 disabled:hover:bg-white sm:h-10 sm:w-10">
            <ChevronLeft aria-hidden="true" size={22} strokeWidth={2.25} />
          </button>

          <div ref={carouselRef} className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-6" aria-label="Flyrinzo solutions">
            {solutionSlides.map((slide) => (
              <div key={slide.src} data-solution-card className="group relative min-w-0 shrink-0 snap-start basis-[calc(100%-2.5rem)] bg-cyan-300/80 p-[2px] shadow-[0_0_18px_rgba(34,211,238,0.24)] transition duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-amber-300 hover:shadow-[0_0_26px_rgba(251,191,36,0.38)] motion-reduce:transition-none sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]" style={{ clipPath: "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 22px 100%, 0 calc(100% - 22px))" }}>
                <div className="relative overflow-hidden bg-[#0b1424]" style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
                  <Image src={slide.src} alt={slide.alt} width={1080} height={1920} className="block h-auto w-full transition duration-500 ease-out group-hover:scale-[1.02] group-hover:brightness-110 motion-reduce:transition-none" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw" />
                  <span className="pointer-events-none absolute left-0 top-0 h-[2px] w-[calc(100%-22px)] bg-gradient-to-r from-amber-300 via-cyan-300 to-cyan-200 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute bottom-0 left-0 h-[calc(100%-22px)] w-[2px] bg-gradient-to-b from-cyan-200 via-cyan-300 to-amber-300 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute right-0 top-[22px] h-[calc(100%-22px)] w-[2px] bg-gradient-to-b from-cyan-200 via-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(103,232,249,0.95)]" />
                  <span className="pointer-events-none absolute bottom-0 right-[22px] h-[2px] w-[calc(100%-22px)] bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_8px_rgba(217,70,239,0.9)]" />
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => scrollCards("right")} disabled={!canScroll.right} aria-label="Show next solutions" className="absolute right-0 top-1/2 z-10 flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-[0_4px_14px_rgba(17,24,39,0.14)] transition hover:scale-110 hover:border-amber-300 hover:bg-amber-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 disabled:hover:bg-white sm:h-10 sm:w-10">
            <ChevronRight aria-hidden="true" size={22} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    </section>
  );
}
