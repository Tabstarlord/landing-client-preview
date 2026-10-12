import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingPlans from "@/components/pricing/PricingPlans";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import WhyChoose from "@/components/pricing/WhyChoose";
import PricingCta from "@/components/pricing/PricingCta";

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingPlans />
        <FeatureComparison />
        <WhyChoose />
        <PricingCta />
      </main>
      <Footer />
    </>
  );
}
