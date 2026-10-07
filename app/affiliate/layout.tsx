import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become an Affiliate",
  description:
    "Join the Flyrinzo Growth Partner Program. Introduce small businesses to Flyrinzo and unlock up to $10,000 in milestone rewards.",
  openGraph: {
    title: "Become an Affiliate | Flyrinzo",
    description:
      "Help small businesses grow and get rewarded with up to $10,000 in milestone rewards.",
    url: "https://www.flyrinzo.com/affiliate",
    type: "website"
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/affiliate" }
};

export default function AffiliateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
