"use client";

import { useSyncExternalStore } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://flyrinzo-api-server-1.onrender.com/api";

export interface RegionalTier {
  monthlyFormatted: string;
  yearlyFormatted: string;
  yearlySavingsPercentage: number;
}

/** GET /subscriptions/pricing, localised to the visitor's country by the API. */
export interface RegionalPricing {
  currency: string;
  currencySymbol: string;
  regionName: string;
  intro: { formatted: string };
  starter: RegionalTier;
  growth: RegionalTier;
  scale: RegionalTier;
  detectedCountry?: string | null;
}

export const CURRENCY_OPTIONS = ["USD", "CAD", "GBP", "EUR", "NGN", "ZAR"] as const;

const tier = (monthly: number, yearly: number): RegionalTier => ({
  monthlyFormatted: `US$${monthly}`,
  yearlyFormatted: `US$${yearly}`,
  yearlySavingsPercentage: 17,
});

/** Shown if the API can't be reached: USD, matching what the API gives anyone it can't place. */
export const FALLBACK_PRICING: RegionalPricing = {
  currency: "USD",
  currencySymbol: "US$",
  regionName: "USA (USD)",
  intro: { formatted: "US$0.99" },
  starter: tier(9, 90),
  growth: tier(24, 240),
  scale: tier(49, 490),
};

interface State {
  pricing: RegionalPricing | null;
  /** A currency the visitor picked, overriding detection. */
  override: string | null;
}

let state: State = { pricing: null, override: null };
let started = false;
const listeners = new Set<() => void>();

function set(next: Partial<State>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

async function load(override: string | null) {
  try {
    const url = `${API_BASE_URL}/subscriptions/pricing${override ? `?currency=${override}` : ""}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const body = (await res.json()) as { data?: RegionalPricing };
    if (!body.data?.starter) throw new Error("unexpected response");
    // Ignore a slow answer for a currency the visitor has since moved off.
    if (state.override === override) set({ pricing: body.data });
  } catch {
    if (state.override === override && !state.pricing) set({ pricing: FALLBACK_PRICING });
  }
}

/** Picks a currency by hand; null goes back to detection. */
export function selectCurrency(currency: string | null) {
  set({ override: currency, pricing: null });
  void load(currency);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!started) {
    started = true;
    void load(null);
  }
  return () => listeners.delete(listener);
}

/** The visitor's regional pricing, or null until it loads. */
export function usePricing(): State {
  return useSyncExternalStore(subscribe, () => state, () => state);
}
