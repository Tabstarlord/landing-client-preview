import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogosBar from "@/components/LogosBar";
import FeaturesSection from "@/components/FeaturesSection";
import WhyWeBuiltSection from "@/components/WhyWeBuiltSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import MobileAppSection from "@/components/MobileAppSection";
import BookMeetingSection from "@/components/BookMeetingSection";
import Footer from "@/components/Footer";

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
