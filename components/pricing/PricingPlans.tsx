"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, SocialBadge } from "./Icons";
import { PLANS } from "./pricing-data";
import { usePricing } from "./usePricing";

type Billing = "monthly" | "yearly";

export default function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { pricing } = usePricing();

  return (
    <>
      <section className="pt-14 pb-10 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-1.5 text-xs text-gray-500">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <rect x="2" y="6" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M2 9h12M8 6v8M8 6c-1.5 0-3-.7-3-2s2-1.5 3 2zM8 6c1.5 0 3-.7 3-2s-2-1.5-3 2z" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            Start free — no credit card required
          </span>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Simple Pricing for Every
            <br />
            Stage of Growth
          </h1>
          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">
            Start free, then upgrade when you&apos;re ready. No long-term contracts.
            <br className="hidden sm:block" /> Cancel anytime.
          </p>

          <div
            role="tablist"
            aria-label="Billing period"
            className="mt-8 inline-flex rounded-full border border-gray-200 bg-white p-1"
          >
            {(["monthly", "yearly"] as const).map((option) => (
              <button
                key={option}
                role="tab"
                aria-selected={billing === option}
                onClick={() => setBilling(option)}
                className={`rounded-full px-7 py-1.5 text-sm font-semibold capitalize transition-colors ${
                  billing === option ? "bg-yellow-400 text-white" : "text-gray-800 hover:text-gray-950"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4 items-stretch">
          {PLANS.map((plan) => {
            const price = pricing?.[plan.id];
            const showYearly = billing === "yearly" && plan.id !== "free";
            const amount = showYearly ? price?.yearlyFormatted : price?.monthlyFormatted;
            const period = plan.id === "free" ? "forever" : showYearly ? "year" : "month";

            return (
              <article
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(17,24,39,0.08)] ring-1 ${
                  plan.popular ? "ring-2 ring-yellow-400" : "ring-gray-100"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-0 top-0 rounded-bl-lg rounded-tr-2xl bg-yellow-400 px-3 py-1 text-[11px] font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-500">
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                      <path d="M10 2l6 3.5v7L10 16l-6-3.5v-7L10 2zM4 5.5L10 9l6-3.5M10 9v7" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
                    <p className="mt-1 text-xs text-gray-500 leading-snug">{plan.tagline}</p>
                  </div>
                </div>

                <div className="mt-5 min-h-[72px]">
                  {!pricing ? (
                    <div className="h-14 w-36 animate-pulse rounded bg-gray-100" aria-label="Loading prices" />
                  ) : (
                    <>
                      <p className="text-3xl font-bold text-gray-900">
                        {amount}<span className="text-sm font-normal text-gray-500">/{period}</span>
                      </p>
                      <p className="mt-2 text-xs text-gray-500 leading-snug">{plan.description}</p>
                    </>
                  )}
                </div>

                <ul className="mt-4 flex-1 space-y-4">
                  {plan.sections.map((section) => (
                    <li key={section.title}>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-400">
                        {section.title}
                      </p>
                      <ul className="mt-2 space-y-2">
                        {section.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-600">
                            <CheckCircle className="mt-px h-4 w-4 shrink-0 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                {plan.note && <p className="mt-4 text-xs text-gray-500">{plan.note}</p>}

                <Link
                  href={plan.ctaHref}
                  className={`mt-6 block rounded-md px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    plan.popular
                      ? "bg-yellow-400 text-white hover:bg-yellow-500"
                      : "border border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50"
                  }`}
                >
                  {plan.ctaLabel}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="rounded-xl bg-yellow-50 px-6 py-5 text-center">
            <p className="text-sm font-semibold text-gray-900">Available Social Platform</p>
            <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><SocialBadge name="instagram" size={26} /> Instagram</li>
              <li className="flex items-center gap-2"><SocialBadge name="facebook" size={26} /> Facebook</li>
              <li className="flex items-center gap-2"><SocialBadge name="tiktok" size={26} /> Tiktok</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
