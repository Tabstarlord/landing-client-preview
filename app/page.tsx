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
  title: "Flyrinzo AI — Social Media Growth for Small Business",
  description:
    "Turn insights into action. AI-powered social media management platform for small businesses. Schedule posts, analyze performance, and grow your audience with Flyrinzo AI.",
  keywords: [
    "social media management",
    "AI social media tools",
    "small business marketing",
    "Instagram scheduler",
    "Facebook automation",
    "social media analytics",
    "content planning",
    "business growth tools"
  ],
  openGraph: {
    title: "Flyrinzo AI — Social Media Growth for Small Business",
    description: "Turn insights into action. Connect. Post. Grow.",
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
