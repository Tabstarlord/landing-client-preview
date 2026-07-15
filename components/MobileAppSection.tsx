import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden relative">
      {/* Wave decoration — hidden on mobile to avoid overflow issues */}
      <div
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 148,
          height: 1440,
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "left center",
        }}
      >
        <Image
          src="/wave.svg"
          alt=""
          width={1440}
          height={148}
          className="w-full h-full"
          aria-hidden="true"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Mobile layout: heading/paragraph → phones → badges, all centered */}
        <div className="lg:hidden text-center">
          <h2 className="text-[26px] font-bold text-gray-900 leading-tight mb-6">
            Grow Your{" "}<span className="text-amber-400">Brand.</span>
            <br />
            Connect with{" "}<span className="text-amber-400">Innovators.</span>
            <br />
            Unlock New{" "}<span className="text-amber-400">Opportunities.</span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Flyrinzo is more than a marketing tool, it&apos;s a growing community for
            forward-thinking entrepreneurs who want to automate their marketing,
            expand their reach, and learn from other business owners while growing
            together.
          </p>

          <div className="relative flex justify-center mb-10">
            <div className="absolute inset-0 m-auto w-72 h-72 bg-amber-300/30 rounded-full blur-3xl" />
            <Image
              src="/phones.svg"
              alt="Flyrinzo mobile app screens"
              width={656}
              height={544}
              className="relative w-full max-w-xs h-auto"
              priority
            />
          </div>

          <p className="text-xs text-gray-500 font-medium mb-4">Coming soon to:</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-2.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                <path d="M3.18 23.76c.37.2.8.23 1.2.07l12.54-7.18-2.68-2.68-11.06 9.79zm14.54-8.35L5.17 8.89 3.18.24C2.78.08 2.35.11 1.98.31L14.04 12l3.68 3.41zM21.3 10.51l-2.82-1.62-3.17 2.87 3.17 2.87 2.84-1.64c.81-.47.81-1.62-.02-2.08zM3.18.24L14.04 12 5.17 15.11 3.18.24z" />
              </svg>
              <div className="leading-none text-left">
                <div className="text-[10px] text-gray-400 mb-0.5">GET IT ON</div>
                <div className="text-sm font-semibold">Google Play</div>
              </div>
            </a>
            <a
              href="#"
              className="flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-2.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.55M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="leading-none text-left">
                <div className="text-[10px] text-gray-400 mb-0.5">Download on the</div>
                <div className="text-sm font-semibold">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Desktop layout: text + badges left, phones right */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Left column ── */}
          <div className="relative">

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Grow Your{" "}<span className="text-amber-400">Brand.</span>
              <br />
              <span className="whitespace-nowrap">Connect with{" "}<span className="text-amber-400">Innovators.</span></span>
              <br />
              Unlock New{" "}<span className="text-amber-400">Opportunities.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-lg">
              Flyrinzo is more than a marketing tool, it&apos;s a growing community
              for forward-thinking entrepreneurs who want to automate their
              marketing, expand their reach, and learn from other business owners
              while growing together.
            </p>

            {/* Store badges */}
            <p className="text-xs text-gray-500 font-medium mb-4">Coming soon to:</p>
            <div className="flex items-center gap-3 flex-wrap">
              {/* Google Play */}
              <a
                href="#"
                className="flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-2.5 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                  <path d="M3.18 23.76c.37.2.8.23 1.2.07l12.54-7.18-2.68-2.68-11.06 9.79zm14.54-8.35L5.17 8.89 3.18.24C2.78.08 2.35.11 1.98.31L14.04 12l3.68 3.41zM21.3 10.51l-2.82-1.62-3.17 2.87 3.17 2.87 2.84-1.64c.81-.47.81-1.62-.02-2.08zM3.18.24L14.04 12 5.17 15.11 3.18.24z" />
                </svg>
                <div className="leading-none">
                  <div className="text-[10px] text-gray-400 mb-0.5">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl px-4 py-2.5 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.55M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="leading-none">
                  <div className="text-[10px] text-gray-400 mb-0.5">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* ── Right column: phones ── */}
          <div className="relative flex justify-center">
            {/* Amber glow behind phones */}
            <div className="absolute inset-0 m-auto w-72 h-72 bg-amber-300/30 rounded-full blur-3xl" />
            <Image
              src="/phones.svg"
              alt="Flyrinzo mobile app screens"
              width={656}
              height={544}
              className="relative w-full max-w-lg h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
