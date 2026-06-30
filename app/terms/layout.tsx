import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read our Terms of Use to learn more about your rights and responsibilities as a Flyrinzo user. Effective January 19, 2026.",
  keywords: [
    "terms of use",
    "terms and conditions",
    "user agreement",
    "service terms",
    "Flyrinzo terms",
    "legal agreement"
  ],
  openGraph: {
    title: "Terms of Use | Flyrinzo AI",
    description: "Your rights and responsibilities as a Flyrinzo user",
    url: "https://www.flyrinzo.com/terms",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/terms"
  }
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
