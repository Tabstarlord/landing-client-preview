import type { Metadata } from "next";

const PAGE_URL = "https://www.flyrinzo.com/pricing/";
const TITLE = "Pricing | Flyrinzo - Start Free, Upgrade When Ready";
const DESCRIPTION =
  "Simple pricing for every stage of growth. Start free with no credit card, then choose Starter, Growth or Scale as your business grows. Localized pricing, no long-term contracts, cancel anytime.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", siteName: "Flyrinzo", locale: "en_CA", title: TITLE, description: DESCRIPTION, url: PAGE_URL },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
