import type { Metadata } from "next";

const PAGE_URL = "https://www.flyrinzo.com/pricing/";
const TITLE = "Pricing | Flyrinzo - Simple pricing to every stage of growth.";
const DESCRIPTION =
  "Start Free and upgrade only when you see value . No long term contracts . Cancel anytime";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: { type: "website", siteName: "Flyrinzo", locale: "en_CA", title: TITLE, description: DESCRIPTION, url: PAGE_URL },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
