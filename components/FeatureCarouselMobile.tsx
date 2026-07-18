"use client";

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

      <button
        type="button"
        className="w-full mt-8 h-14 rounded-2xl text-white font-bold text-base transition-transform hover:scale-[1.02]"
        style={{ backgroundColor: "#FBBF24", boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.4)" }}
      >
        Get Free Insights
      </button>
    </div>
  );
}
