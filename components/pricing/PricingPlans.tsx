"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialBadge } from "./Icons";
import { CalendarDays, ChartNoAxesColumnIncreasing, Check, Gift, Palette, UsersRound, WandSparkles } from "lucide-react";
import {
  PRICING_PLAN_ART,
  PRICING_PLAN_CTA_LABELS,
  PRICING_PLAN_DESCRIPTIONS,
  PRICING_PLAN_DETAILS,
  PRICING_PLAN_NAMES,
  PRICING_PLAN_TAGLINES,
} from "./pricing-data";
import { usePricing } from "./usePricing";

type Billing = "monthly" | "yearly";

export default function PricingPlans() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const { pricing } = usePricing();

  return (
    <>
    <section id="pricing-plans" className="bg-white pb-10 pt-14 text-slate-900">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <header className="mb-5 text-center">

          <span className="inline-flex items-center gap-3 rounded-full border border-yellow-400 px-4 py-1.5 text-xs text-gray-500 shadow-sm">
            <Gift className="h-3.5 w-3.5 fill-yellow-500 stroke-black" strokeWidth={2} />
            Start Free. Upgrade Only When You See Value.
          </span>

          <h1 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">Simple Pricing for <span className="text-amber-400">Every Stage of Growth</span></h1>

          <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed">Create, plan, publish and grow your business with Flyrinzo.<br />Start free and experience the power of AI marketing tools. Upgrade only when you see value.</p>

          <div 
          role="tablist" 
          aria-label="Billing period" 
          className="mt-8 inline-flex rounded-full border border-gray-200 bg-white p-1"
          >
            {(["monthly", "yearly"] as const).map((option) => 
              <button 
              key={option} 
              role="tab" 
              aria-selected={billing === option} 
              onClick={() => setBilling(option)} 
              className={`rounded-full px-7 py-1.5 text-sm font-semibold capitalize ${billing === option ? "bg-yellow-400 text-white" : "text-slate-800 hover:text-gray-950 cursor-pointer"}`}
              >
                {option}
              </button>
            )}
          </div>
        </header>
        
        <div className="grid items-stretch gap-4 xl:grid-cols-4">
          {PRICING_PLAN_NAMES.map((name, index) => {
            const plan = index === 0 ? null : ["starter", "growth", "scale"][index - 1];
            const popular = index === 2;
            return (
              <article 
              key={name} 
              className={`relative flex min-w-0 flex-col rounded-[22px] bg-white p-5 shadow-[0_5px_22px_rgba(15,23,42,0.09)] ${popular ? "z-10 border-2 border-yellow-400 bg-amber-50/40" : "border border-slate-100"}`}
              >
                {popular && 
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-[11px] uppercase font-semibold text-white">
                    Most Popular
                  </span>
                }

                <div className="flex min-h-15 items-center gap-3">
                  <Image
                    src={`/pricing-icons/${["free", "starter", "growth", "scale"][index]}.svg`}
                    alt=""
                    aria-hidden="true"
                    width={73}
                    height={71}
                    className="h-12 w-12 shrink-0 object-contain"
                  />

                  <div>
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">{name}</h2>
                    <p className="mt-1 text-xs text-gray-500 leading-5">{PRICING_PLAN_TAGLINES[index]}</p>
                  </div>
                </div>

                <div className="relative mt-3 flex min-h-[120px] items-center">
                  <div className="relative z-10 min-w-0 pr-20">
                    <p className="whitespace-nowrap text-3xl font-bold leading-none tracking-tight">
                      {!plan ? `${pricing?.currencySymbol ?? ""}0` : !pricing ? "…" : billing === "monthly" ? pricing[plan.id]?.monthlyFormatted ?? "…" : pricing[plan.id]?.yearlyFormatted ?? "…"}
                      <span className="ml-2 text-sm font-normal tracking-normal text-gray-500">
                        {plan ? (billing === "monthly" ? "/month" : "/year") : "/forever"}
                      </span>
                    </p>
                    <p className="mt-3 max-w-[15rem] text-sm leading-5 text-slate-700">
                      {PRICING_PLAN_DESCRIPTIONS[index]}
                    </p>
                  </div>
                  <Image
                    src={PRICING_PLAN_ART[index]}
                    alt=""
                    aria-hidden="true"
                    width={120}
                    height={125}
                    className={`absolute bottom-0 right-0 z-0 object-contain ${index === 0 ? "h-23.5 w-21" : index === 1 ? "h-22 w-18" : index === 2 ? "h-21.5 w-20.5" : "h-20 w-21"}`}
                  />
                </div>
                <div className="mt-3 flex-1 border-t border-slate-100">
                  {PRICING_PLAN_DETAILS[index].groups.map((group) => 
                    <div 
                    key={group[0]} 
                    className="border-b border-slate-100 py-2.5 last:border-0"
                    >
                      <div className="flex items-center gap-3">
                        {group[0] === "CREATE" ? <WandSparkles className="h-7 w-7 shrink-0 text-violet-600" aria-hidden="true" /> :
                        group[0] === "CREATIVE STUDIO" ? <Palette className="h-7 w-7 shrink-0 text-pink-500" aria-hidden="true" /> :
                        group[0] === "PLAN & PUBLISH" ? <CalendarDays className="h-7 w-7 shrink-0 text-blue-500" aria-hidden="true" /> :
                        group[0] === "ANALYZE & GROW" ? <ChartNoAxesColumnIncreasing className="h-7 w-7 shrink-0 text-green-600" aria-hidden="true" /> :
                        <UsersRound className="h-7 w-7 shrink-0 text-amber-500" aria-hidden="true" />
                        }
                        <strong className="text-sm font-bold">{group[0]}</strong>
                      </div>
                    {group.slice(1).map((text) => 
                      <p key={text} className="ml-10 flex items-start gap-2 text-xs leading-[1.45] text-gray-600">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" aria-hidden="true" />
                        {text}
                      </p>
                    )}
                    </div>
                  )}
                </div>
                {index === 0 && 
                <p className="mt-1 text-center text-xs text-slate-600">No credit card required.</p>}
                <Link 
                href="/contact-us" 
                className={`mt-2 block rounded-xl px-4 py-3 text-center font-semibold ${index === 0 ? "bg-slate-100 text-slate-900" : index === 1 ? "bg-purple-100 text-slate-900" : popular ? "bg-yellow-400 text-slate-950" : "bg-blue-500 text-white"}`}
                >
                  {PRICING_PLAN_CTA_LABELS[index]}
                </Link>
              </article>
            );
          })}
        </div>
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
