import Image from "next/image";

const angularButtonStyle = {
  "--angular-border": "#FACC15",
  "--angular-fill": "#FFFFFF",
  "--angular-hover-fill": "#FEFCE8",
  clipPath:
    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
} as const;

const angularCtaStyle = {
  "--angular-border": "#EAB308",
  "--angular-fill": "#FACC15",
  "--angular-hover-fill": "#EAB308",
  clipPath: angularButtonStyle.clipPath,
} as const;

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="overflow-hidden pb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 38%, #FFFBEB 60%, #FEF3C7 78%, #FDE68A 100%)",
      }}
    >
      <div className="relative mx-auto grid min-h-[720px] max-w-7xl lg:min-h-0 lg:grid-cols-2 lg:items-center">
        {/* Add the video element inside this container when the video is ready. */}
        <div
          aria-label="Hero video placeholder"
          data-hero-video
          className="absolute inset-0 min-h-[720px] overflow-hidden bg-slate-950 lg:relative lg:inset-auto lg:col-start-2 lg:mr-8 lg:min-h-[560px] lg:rounded-[2rem]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.14),transparent_32%),linear-gradient(135deg,#111827,#020617)]" />
          <Image
            src="/Hero-Image.webp"
            alt="Flyrinzo AI assistant robot"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 z-[1] bg-slate-950/30 lg:hidden" />
        </div>

        {/* Existing hero copy, left-aligned on desktop and layered over the video on mobile. */}
        <div className="relative z-10 flex flex-col items-start px-6 pb-12 pt-[300px] text-left sm:px-10 sm:pb-14 sm:pt-[340px] lg:col-start-1 lg:row-start-1 lg:px-12 lg:py-24">
          <div className="mb-2 flex justify-start">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-amber-400">
              <path d="M11 2v6M4 8l3.5 1.2M18.5 5.2L15 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>

          <h1 className="mb-4 text-[30px] font-bold leading-[1.15] text-white sm:hidden">
            Flyrinzo AI For
            <br />
            Small <span className="text-amber-400">Business</span> Growth
          </h1>

          <h1 className="hidden px-2 font-bold text-white sm:block sm:text-[40px] sm:leading-[1.1] lg:text-[56px] lg:text-[#000000]">
            Flyrinzo AI
            <br />
            For Small <span className="text-amber-400">Business</span> Growth
          </h1>

          <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-white/90 sm:mb-10 sm:text-[18px] lg:mb-12 lg:text-[20px] lg:text-[#6F6C90]">
            Canada&apos;s all-in-one AI marketing platform for small business growth.
            <br />
            Connect. Post. Grow.
          </p>

          <div className="mt-4 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            <a
              href="https://app.flyrinzo.com/login"
              style={angularButtonStyle}
              className="navbar-angular-button flex h-13 w-full items-center justify-center px-10 text-base font-semibold text-yellow-500 transition-colors sm:w-auto lg:px-12"
            >
              <span>Login</span>
            </a>
            <a
              href="/contact-us"
              style={angularCtaStyle}
              className="navbar-angular-button flex h-13 w-full items-center justify-center px-10 text-base font-semibold text-white transition-colors sm:w-auto lg:px-12"
            >
              <span>Get Started</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
