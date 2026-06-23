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
      <div className="max-w-2xl mx-auto px-6 text-center pt-12 sm:pt-16 pb-16 sm:pb-20">
        {/* Sparkle / cursor icon */}
        <div className="flex justify-center mb-4">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M11 1L12.5 8.5H20L13.75 12.75L16.25 20L11 15.75L5.75 20L8.25 12.75L2 8.5H9.5L11 1Z"
              fill="#111827"
            />
          </svg>
        </div>

        {/* Headline */}
        <h1
          className="font-bold text-gray-900 leading-tight mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)", lineHeight: 1.1 }}
        >
          Flyrinzo AI
          <br />
          For Small{" "}
          <span style={{ color: "#F59E0B" }}>Business</span>{" "}
          Growth
        </h1>

        {/* Tagline */}
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          Turn insights into action.
          <br />
          Connect. Post. Grow.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 text-sm font-medium bg-white hover:bg-gray-50 transition-colors"
          >
            Login
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full text-gray-900 text-sm font-semibold bg-amber-400 hover:bg-amber-500 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Dashboard image */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="rounded-t-2xl overflow-hidden shadow-2xl">
          <Image
            src="/hero.svg"
            alt="Flyrinzo dashboard"
            width={1000}
            height={432}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
