"use client";

import Image from "next/image";
import Link from "next/link";
import { usePricing } from "./usePricing";

function IconCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute flex items-center justify-center rounded-[12%] bg-white ${className}`}
    >
      {children}
    </div>
  );
}

export default function PricingCta() {
  const { pricing } = usePricing();
  const intro = pricing?.intro.formatted ?? "…";
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="md:pt-[4.75cqw] [container-type:inline-size]">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#FFCF4A] to-[#FFE08C] px-5 pb-[210px] pt-6 md:overflow-visible md:bg-none md:bg-[#FFC107] md:pb-0 md:pt-0 md:flex md:min-h-[11.8cqw] md:flex-col md:justify-center md:px-[2.4cqw] md:py-0">
            <h2 className="text-[22px] font-bold leading-[1.3] tracking-tight text-[#0F1A14] md:text-[2.4cqw] md:leading-tight">
              Start your first month for just {intro}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#0F1A14]/50 md:max-w-[60cqw] md:text-[1.25cqw]">
              Choose any plan. After 1 month, continue at the regular rate only if you see value. Cancel anytime.
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 md:flex-row md:flex-wrap md:items-center md:mt-[0.6cqw] md:gap-[1.5cqw]">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FFC107] px-8 py-3 text-base md:bg-[#F5B800] font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#EBAE00] md:gap-[0.8cqw] md:px-[1.5cqw] md:py-[0.9cqw] md:text-[1.3cqw]"
              >
                Get Started
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 md:h-[1.2cqw] md:w-[1.2cqw]" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="text-base text-[#0F1A14]/50 md:text-[1.25cqw]">No long-term contracts.</span>
            </div>

            <IconCard className="bottom-3 left-4 h-[62px] w-[62px] md:bottom-auto md:left-[68.45%] md:top-[15.7%] md:h-auto md:w-[4.8cqw] md:aspect-square">
              <svg viewBox="0 0 24 24" fill="none" className="h-[40%] w-[40%] text-[#F5B800]" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <rect x="3" y="14" width="4" height="6" rx="1" />
                <rect x="10" y="9" width="4" height="11" rx="1" />
                <rect x="17" y="3" width="4" height="17" rx="1" />
              </svg>
            </IconCard>
            <IconCard className="bottom-[85px] right-5 h-[64px] w-[64px] md:bottom-auto md:left-[90.75%] md:right-auto md:top-[27.5%] md:h-auto md:w-[5.1cqw] md:aspect-square">
              <svg viewBox="0 0 24 24" fill="none" className="h-[40%] w-[40%] text-[#F5B800]" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M7 15l4-4 3 3 5-6" />
              </svg>
            </IconCard>

            <Image
              src="/pricing-robot.png"
              alt=""
              width={700}
              height={697}
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 w-[190px] -translate-x-1/2 select-none md:left-[74.04%] md:w-[17.5cqw] md:translate-x-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
