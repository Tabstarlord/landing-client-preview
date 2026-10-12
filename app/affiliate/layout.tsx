import type { Metadata } from "next";

const PAGE_URL = "https://www.flyrinzo.com/affiliate/";
const TITLE = "Earn With Flyrinzo | Affiliate & Ambassador Program";
// TODO: replace with the approved 1200x630 branded artwork (public/affiliate-og.png) before launch.
const SHARE_IMAGE = "/affiliate-og.png";
const SHARE_IMAGE_ALT = "Earn With Flyrinzo - Affiliate and Ambassador Program";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description:
    "Join the Flyrinzo Affiliate & Ambassador Program. Refer small businesses to AI marketing tools, earn commissions and rewards, and grow as a Flyrinzo partner.",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    siteName: "Flyrinzo",
    locale: "en_CA",
    title: TITLE,
    description:
      "Help small businesses grow with AI-powered marketing. Join Flyrinzo as an affiliate or ambassador and earn rewards for qualified referrals.",
    url: PAGE_URL,
    images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: SHARE_IMAGE_ALT }]
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Refer small businesses, earn rewards and grow with the Flyrinzo Affiliate and Ambassador Program.",
    images: [SHARE_IMAGE]
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  url: PAGE_URL,
  description: "Earn referral rewards by introducing small businesses to Flyrinzo AI marketing tools.",
  inLanguage: "en-CA",
  isPartOf: { "@type": "WebSite", name: "Flyrinzo", url: "https://www.flyrinzo.com/" },
  publisher: { "@type": "Organization", name: "Flyrinzo", url: "https://www.flyrinzo.com/" }
};

export default function AffiliateLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
