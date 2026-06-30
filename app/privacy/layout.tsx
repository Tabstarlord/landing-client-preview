import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Flyrinzo collects, uses, and protects your personal data. Our commitment to protecting your privacy and your rights as a Flyrinzo user.",
  keywords: [
    "privacy policy",
    "data protection",
    "user privacy",
    "GDPR compliance",
    "data security",
    "Flyrinzo privacy"
  ],
  openGraph: {
    title: "Privacy Policy | Flyrinzo AI",
    description: "Our commitment to protecting your privacy",
    url: "https://www.flyrinzo.com/privacy",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/privacy"
  }
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
