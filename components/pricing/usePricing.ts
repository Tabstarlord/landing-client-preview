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

const EURO_COUNTRIES = new Set([
  "AT", "BE", "CY", "DE", "EE", "ES", "FI", "FR", "GR", "HR", "IE", "IT",
  "LT", "LU", "LV", "MT", "NL", "PT", "SI", "SK",
]);

/** Currencies the API prices in; any other country falls back to USD. */
function currencyForCountry(country: string): string {
  if (country === "CA") return "CAD";
  if (country === "GB") return "GBP";
  if (country === "NG") return "NGN";
  if (country === "ZA") return "ZAR";
  return EURO_COUNTRIES.has(country) ? "EUR" : "USD";
}

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
}

let state: State = { pricing: null };
let started = false;
const listeners = new Set<() => void>();

function set(next: Partial<State>) {
  state = { ...state, ...next };
  listeners.forEach((listener) => listener());
}

async function load(currency: string | null): Promise<RegionalPricing | null> {
  try {
    const url = `${API_BASE_URL}/subscriptions/pricing${currency ? `?currency=${currency}` : ""}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const body = (await res.json()) as { data?: RegionalPricing };
    if (!body.data?.starter) throw new Error("unexpected response");
    set({ pricing: body.data });
    return body.data;
  } catch {
    if (!state.pricing) set({ pricing: FALLBACK_PRICING });
    return null;
  }
}

/** Asks the browser for its location and returns the country code, or null if declined or unavailable. */
function countryFromBrowser(): Promise<string | null> {
  if (typeof navigator === "undefined" || !navigator.geolocation) return Promise.resolve(null);
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords.latitude}&longitude=${coords.longitude}&localityLanguage=en`,
          );
          const body = (await res.json()) as { countryCode?: string };
          resolve(body.countryCode ?? null);
        } catch {
          resolve(null);
        }
      },
      () => resolve(null),
      { timeout: 8000, maximumAge: 24 * 60 * 60 * 1000 },
    );
  });
}

async function init() {
  const detected = await load(null);
  // The API placed the visitor by IP; nothing more to do.
  if (detected?.detectedCountry) return;
  // Otherwise USD is showing; try the browser's location to localise it.
  const country = await countryFromBrowser();
  if (!country) return;
  const currency = currencyForCountry(country);
  if (currency !== (state.pricing?.currency ?? "USD")) void load(currency);
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!started) {
    started = true;
    void init();
  }
  return () => listeners.delete(listener);
}

/** The visitor's regional pricing, or null until it loads. */
export function usePricing(): State {
  return useSyncExternalStore(subscribe, () => state, () => state);
}
