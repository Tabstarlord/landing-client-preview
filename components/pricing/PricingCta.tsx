"use client";

import Link from "next/link";
import { usePricing } from "./usePricing";

export default function PricingCta() {
  const { pricing } = usePricing();
  const intro = pricing?.intro.formatted ?? "…";
  return (
    <section className="pb-20">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="rounded-2xl bg-gradient-to-r from-yellow-200 to-yellow-100 px-6 py-8 md:px-8">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">
            Start your first month for just {intro}
          </h2>
          <p className="mt-1 max-w-xl text-xs text-gray-600">
            Choose any plan. After 1 month, continue at the regular rate only if you see value. Cancel anytime.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-yellow-500"
            >
              Get Started
              <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <span className="text-xs text-gray-600">No long-term contracts.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
