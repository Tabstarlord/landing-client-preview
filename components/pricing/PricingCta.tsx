"use client";

import Image from "next/image";
import Link from "next/link";
import { usePricing } from "./usePricing";

function IconCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute hidden items-center justify-center rounded-[12%] bg-white md:flex ${className}`}
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
          <div className="relative rounded-2xl bg-[#FFC107] px-6 py-8 md:flex md:min-h-[11.8cqw] md:flex-col md:justify-center md:px-[2.4cqw] md:py-0">
            <h2 className="text-xl font-bold tracking-tight text-[#0F1A14] md:text-[2.4cqw] md:leading-tight">
              Start your first month for just {intro}
            </h2>
            <p className="mt-1 max-w-xl text-sm text-[#0F1A14]/50 md:max-w-[60cqw] md:text-[1.25cqw]">
              Choose any plan. After 1 month, continue at the regular rate only if you see value. Cancel anytime.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-[0.6cqw] md:gap-[1.5cqw]">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F5B800] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-colors hover:bg-[#EBAE00] md:gap-[0.8cqw] md:px-[1.5cqw] md:py-[0.9cqw] md:text-[1.3cqw]"
              >
                Get Started
                <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 md:h-[1.2cqw] md:w-[1.2cqw]" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <span className="text-sm text-[#0F1A14]/50 md:text-[1.25cqw]">No long-term contracts.</span>
            </div>

            <IconCard className="left-[68.45%] top-[15.7%] aspect-square w-[4.8cqw]">
              <svg viewBox="0 0 24 24" fill="none" className="h-[40%] w-[40%] text-[#F5B800]" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
                <rect x="3" y="14" width="4" height="6" rx="1" />
                <rect x="10" y="9" width="4" height="11" rx="1" />
                <rect x="17" y="3" width="4" height="17" rx="1" />
              </svg>
            </IconCard>
            <IconCard className="left-[90.75%] top-[27.5%] aspect-square w-[5.1cqw]">
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
              className="pointer-events-none absolute bottom-0 left-[74.04%] hidden w-[17.5cqw] select-none md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
