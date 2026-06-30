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
      <div className="max-w-4xl mx-auto px-6 text-center pt-20 sm:pt-24 pb-16 sm:pb-20">
        {/* Sparkle icon */}
 

        {/* Headline */}
        <h1
          className="font-bold text-[25px] lg:text-[48px] leading-tight mb-3"
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
        <p className="text-[20px] sm:text-[15px] mb-8 text-center" style={{ color: "#6F6C90" }}>
          Turn insights into action.
          <br className="hidden lg:block" />
          Connect. Post. Grow.
        </p>

        {/* CTA buttons */}
        <div className=" flex flex-col lg:flex-row w-full lg:w-fit items-center justify-center gap-4 flex-wrap">
          <button
            // href="#"
            className="px-10 h-12.5 rounded-lg border-2 w-[70%] lg:w-fit text-base items-center justify-center flex font-semibold transition-colors"
            style={{
              borderColor: "#FBBF24",
              color: "#FBBF24",
              backgroundColor: "white"
            }}
          >
            Login
          </button>
          <button
            // href="#"
            className="px-10 h-12.5 rounded-lg w-[70%] lg:w-fit text-base font-semibold flex justify-center items-center transition-colors"
            style={{
              backgroundColor: "#FBBF24",
              color: "#000000"
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Dashboard image */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="rounded-t-3xl overflow-hidden shadow-2xl border border-gray-200" style={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        }}>
          <Image
            src="/hero.svg"
            alt="Flyrinzo dashboard"
            width={1200}
            height={650}
            className="w-full h-auto block"
            priority
          />
        </div>
      </div>
    </section>
  );
}
