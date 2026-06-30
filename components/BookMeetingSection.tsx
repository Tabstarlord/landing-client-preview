import Image from "next/image";

export default function BookMeetingSection() {
  return (
    <section className="p-4 sm:p-6 lg:p-[30px_40px] overflow-hidden bg-gray-300">
      <div className="px-4 sm:px-6 lg:pl-10 rounded-xl mx-auto bg-[#374151]">
        <div className="grid lg:grid-cols-2 gap-0 lg:gap-20 items-center">

          {/* Left: Text */}
          <div className="py-8 sm:py-10 lg:py-12.5">
            <h2 className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold leading-tight mb-4" style={{ color: "#FFFFFF" }}>
              Book a Meeting to
              <br />
              <span style={{ color: "#FBBF24" }}>Get Free Insights</span>
            </h2>
            <p className="text-[16px] w-full lg:w-125 lg:text-[18px] leading-relaxed mb-6 sm:mb-8 lg:mb-10" style={{ color: "#E2E8F0" }}>
              Get a personalized breakdown of what's working, what's not, and how AI can unlock smarter growth for your brand.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center font-bold text-sm sm:text-base px-8 sm:px-12 py-3 sm:py-4 rounded-2xl transition-all hover:scale-105 w-full sm:w-auto"
              style={{
                backgroundColor: "#FBBF24",
                color: "#FFFFFF",
                boxShadow: "0 10px 25px -5px rgba(251, 191, 36, 0.3)"
              }}
            >
              Get started
            </a>
          </div>

          {/* Right: Dashboard illustration */}
          <div className="relative pb-0 lg:pt-12.5 -mx-4 sm:mx-0">
            <Image
              src="/book.png"
              alt="Flyrinzo Analytics Dashboard"
              width={900}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
