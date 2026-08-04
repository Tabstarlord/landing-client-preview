import FeatureCarousel from "./FeatureCarousel";
import FeatureCarouselMobile from "./FeatureCarouselMobile";
import { webFeatureSlides } from "./featureSlides";

const features = [
  "AI Content Suggestions",
  "Multi-Platform Scheduling",
  "Analytics Dashboard",
  "Team Collaboration",
];

export default function FeaturesSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-10 md:mb-16">
          <span className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            Solutions
          </span>
        </div>

        {/* Mobile: heading + slide carousel */}
        <div className="lg:hidden">
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight mb-10 text-center">
            Everything you need to{" "}
            <span className="text-amber-400">grow your business</span> right in your pocket.
          </h2>
          <FeatureCarouselMobile />
        </div>

        {/* Desktop: image + text + checklist */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: feature carousel */}
          <div className="flex justify-center">
            <FeatureCarousel
              slides={webFeatureSlides}
              aspectRatio="2876 / 2368"
              sizes="(min-width: 1024px) 600px, 100vw"
              className="w-full max-w-[600px]"
            />
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Everything you need to{" "}
              <span className="italic text-yellow-500">manage</span> right in your pocket.
            </h2>
            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              Schedule posts, analyze performance, and grow your audience across all major social media
              platforms — all from one powerful dashboard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-600" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
