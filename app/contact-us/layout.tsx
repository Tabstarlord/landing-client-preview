import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get free AI-powered insights from Flyrinzo. Tell us about your business and get a personalized walkthrough of our AI-driven social media platform.",
  keywords: [
    "contact Flyrinzo",
    "free AI insights",
    "social media consultation",
    "Flyrinzo demo",
    "get started with Flyrinzo"
  ],
  openGraph: {
    title: "Contact Us | Flyrinzo AI",
    description: "Get free AI-powered insights and a personalized walkthrough of Flyrinzo.",
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
