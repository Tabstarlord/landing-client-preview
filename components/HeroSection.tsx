import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="overflow-hidden pb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 38%, #FFFBEB 60%, #FEF3C7 78%, #FDE68A 100%)",
      }}
    >
      {/* Text block */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
        {/* Sparkle icon */}

        {/* Headline */}
        <h1
          className="font-bold text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.1] mb-4 sm:mb-5 lg:mb-6 px-2"
          style={{
            color: "#000000"
          }}
        >
          Flyrinzo AI
          <br />
          For Small{" "}
          <span style={{ color: "#FBBF24" }}>Business</span>{" "}
          Growth
        </h1>

        {/* Tagline */}
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" style={{ color: "#6F6C90" }}>
          Turn insights into action.
          <br />
          Connect. Post. Grow.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto px-4">
          <button
            className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 h-12 sm:h-13 lg:h-14 rounded-lg border-2 text-sm sm:text-base font-semibold transition-all hover:scale-105 hover:shadow-lg"
            style={{
              borderColor: "#FBBF24",
              color: "#FBBF24",
              backgroundColor: "white"
            }}
          >
            Login
          </button>
          <button
            className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 h-12 sm:h-13 lg:h-14 rounded-lg text-sm sm:text-base font-semibold transition-all hover:scale-105"
            style={{
              backgroundColor: "#FBBF24",
              color: "#000000",
              boxShadow: "0 4px 14px 0 rgba(251, 191, 36, 0.4)"
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Dashboard image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="rounded-t-2xl lg:rounded-t-3xl overflow-hidden shadow-2xl border border-gray-200" style={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}>
          <Image
            src="/hero.svg"
            alt="Flyrinzo dashboard"
            width={1400}
            height={700}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
