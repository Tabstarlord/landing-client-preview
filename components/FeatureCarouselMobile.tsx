"use client";

import Link from "next/link";
import FeatureCarousel from "./FeatureCarousel";
import { mobileFeatureSlides } from "./featureSlides";

export default function FeatureCarouselMobile() {
  return (
    <div>
      <FeatureCarousel
        slides={mobileFeatureSlides}
        aspectRatio="1405 / 2210"
        sizes="(min-width: 640px) 400px, 100vw"
      />

      {/* <Link
        href="/contact-us"
        className="w-full mt-8 h-14 rounded-2xl text-white font-bold text-base transition-transform hover:scale-[1.02] flex items-center justify-center"
        style={{ backgroundColor: "#FBBF24", boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)" }}
      >
        Get Free Insights
      </Link> */}
    </div>
  );
}
