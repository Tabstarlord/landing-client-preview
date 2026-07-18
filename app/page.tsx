import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosBar from "@/components/LogosBar";
import FeaturesSection from "@/components/FeaturesSection";
import WhyWeBuiltSection from "@/components/WhyWeBuiltSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MobileAppSection from "@/components/MobileAppSection";
import BookMeetingSection from "@/components/BookMeetingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flyrinzo | Canadian AI Marketing Platform for Small Business Growth",
  description:
    "Flyrinzo is an all-in-one Canadian AI marketing platform that combines social media scheduling, AI content creation, ready-to-use templates, analytics, and a business community to help small businesses grow.",
  keywords: [
    "Canadian AI marketing platform",
    "small business growth",
    "social media management",
    "AI social media tools",
    "AI content creation",
    "ready-to-use templates",
    "business community",
    "small business marketing",
    "Instagram scheduler",
    "Facebook automation",
    "social media analytics",
    "content planning",
    "business growth tools"
  ],
  openGraph: {
    title: "Flyrinzo | Canadian AI Marketing Platform for Small Business Growth",
    description:
      "Flyrinzo is an all-in-one Canadian AI marketing platform that combines social media scheduling, AI content creation, ready-to-use templates, analytics, and a business community to help small businesses grow.",
    url: "https://www.flyrinzo.com",
    type: "website"
  }
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <LogosBar />
        <FeaturesSection />
        <WhyWeBuiltSection />
        <HowItWorksSection />
        <MobileAppSection />
        <BookMeetingSection />
      </main>
      <Footer />
    </>
  );
}
