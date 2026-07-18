import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get free AI-powered insights from Flyrinzo, the Canadian AI marketing platform for small business growth. Tell us about your business and get a personalized walkthrough.",
  keywords: [
    "contact Flyrinzo",
    "free AI insights",
    "Canadian AI marketing platform",
    "social media consultation",
    "Flyrinzo demo",
    "get started with Flyrinzo"
  ],
  openGraph: {
    title: "Contact Us | Flyrinzo",
    description:
      "Get free AI-powered insights from Flyrinzo, the Canadian AI marketing platform for small business growth.",
    url: "https://www.flyrinzo.com/contact-us",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/contact-us"
  }
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
