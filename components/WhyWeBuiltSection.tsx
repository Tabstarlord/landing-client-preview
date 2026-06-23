import Image from "next/image";

export default function WhyWeBuiltSection() {
  return (
    <section id="why" className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex justify-center mb-12 md:mb-16">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
            Why We Built Flyrinzo
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: why.svg */}
          <div className="flex justify-center">
            <Image
              src="/why.svg"
              alt="Why we built Flyrinzo"
              width={649}
              height={688}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />
          </div>

          {/* Right: text content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We Built Flyrinzo for{" "}
              <span className="text-amber-400">Entrepreneurs</span>{" "}
              Who Refuse to Guess
            </h2>

            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Every small business starts with a dream: to grow, connect, and make an
              impact. But too often, entrepreneurs struggle: scattered marketing tools,
              confusing analytics, and no real global support.{" "}
              <strong className="text-gray-900 font-semibold">
                Effort alone doesn&apos;t always lead to results.
              </strong>
            </p>

            {/* Mission + Vision cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-medium text-gray-400 mb-3 flex items-center gap-1.5">
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                  </svg>
                  Our Mission
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  To give entrepreneurs the tools, insights, and global community they
                  need to make confident decisions and thrive in today&apos;s competitive
                  market.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <p className="text-xs font-medium text-gray-400 mb-3 flex items-center gap-1.5">
                  <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
                    <circle cx="6" cy="6" r="1.5" fill="currentColor" />
                  </svg>
                  Our Vision
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Empower every entrepreneur with AI-driven insights, actionable
                  recommendations, and a global network so every effort turns into real,
                  measurable growth.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
