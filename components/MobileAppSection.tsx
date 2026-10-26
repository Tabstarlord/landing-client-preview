import Image from "next/image";

const steps = [
  { number: "01", title: "CREATE", body: "Turn your ideas into professional content with AI.", color: "#f7b500" },
  { number: "02", title: "SCHEDULE", body: "Plan and publish across 3 major social media platforms.", color: "#e6a700" },
  { number: "03", title: "GROW", body: "Track performance and make smarter decisions in one powerful dashboard.", color: "#d99b00" },
];

function GooglePlayBadge() {
  return (
    <button disabled className="flex h-[52px] w-full min-[425px]:w-[144px] sm:w-[152px] shrink-0 items-center gap-2 rounded-[8px] bg-[#171a22] px-2.5 text-left text-white shadow-sm opacity-95">
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden="true">
        <path fill="#00d7ff" d="M2.2 1.6c-.4.4-.6 1-.6 1.8v17.2c0 .8.2 1.4.6 1.8L13.9 12 2.2 1.6Z" />
        <path fill="#00f076" d="m15.2 13.3-3.1-2.8L2.2 1.6c.4-.4 1-.5 1.7-.1l14 7.9-2.7 3.9Z" />
        <path fill="#ff3b30" d="m15.2 10.7 2.7 3.9-14 7.9c-.7.4-1.3.3-1.7-.1l9.9-8.9 3.1-2.8Z" />
        <path fill="#ffd400" d="m21.4 10.8-3.5-2-2.7 3.2 2.7 3.2 3.5-2c1-.6 1-1.8 0-2.4Z" />
      </svg>
      <span className="leading-none"><span className="block text-[8px] text-white/75">GET IT ON</span><span className="mt-1 block text-[15px] font-semibold tracking-tight">Google Play</span></span>
    </button>
  );
}

function AppStoreBadge() {
  return (
    <button disabled className="flex h-[52px] w-full min-[425px]:w-[144px] sm:w-[152px] shrink-0 items-center gap-2 rounded-[8px] bg-[#171a22] px-2.5 text-left text-white shadow-sm opacity-95">
      <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.55M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
      <span className="leading-none"><span className="block text-[8px] text-white/75">Download on the</span><span className="mt-1 block text-[15px] font-semibold tracking-tight">App Store</span></span>
    </button>
  );
}

function FeatureIcon({ type }: { type: "analytics" | "ai" | "gallery" | "calendar" }) {
  const paths = {
    analytics: <><path d="M4 19V9m5 10V5m5 14v-7m5 7V3" /><path d="M2 19h20" /></>,
    ai: <><path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" /><path d="m19 14 .7 2.3L22 17l-2.3.7L19 20l-.7-2.3L16 17l2.3-.7L19 14Z" /></>,
    gallery: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="9" r="1.5" /><path d="m4 17 5-5 3 3 2-2 6 5" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M7 3v4M17 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" /></>,
  };

  return <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" aria-hidden="true">{paths[type]}</svg>;
}

function IconCard({ type, className }: { type: "analytics" | "ai" | "gallery" | "calendar"; className: string }) {
  return <div className={`absolute hidden h-[64px] w-[64px] items-center justify-center rounded-xl border border-[#f2c82c]/40 bg-white/75 text-[#efb500] shadow-[0_4px_20px_rgba(228,176,0,.12)] sm:flex ${className}`}><FeatureIcon type={type} /></div>;
}

export default function MobileAppSection() {
  return (
    <section id="mobile-app" className="relative overflow-hidden bg-[#fffdf8] px-2 py-3 sm:px-6 sm:py-4 xl:px-8 xl:py-3">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(135deg,transparent_0%,transparent_47%,rgba(245,190,40,.07)_47.2%,transparent_47.5%),linear-gradient(45deg,transparent_0%,transparent_68%,rgba(245,190,40,.06)_68.2%,transparent_68.5%)]" />
      <div className="relative mx-auto max-w-[1800px] overflow-hidden bg-[radial-gradient(circle_at_82%_45%,rgba(255,224,87,.18),transparent_28%),linear-gradient(110deg,#fffefb,#fffdf5)] px-5 py-5 shadow-[0_10px_40px_rgba(245,184,20,.08)] sm:px-10 sm:py-6 md:px-12 md:py-6 xl:h-[460px] xl:px-12 xl:py-7">
        <div className="pointer-events-none absolute left-[22px] right-[22px] top-0 h-[2px] bg-[#f6cc51] sm:left-[38px] sm:right-[38px]" />
        <div className="pointer-events-none absolute bottom-0 left-[22px] right-[22px] h-[2px] bg-[#f6cc51] sm:left-[38px] sm:right-[38px]" />
        <div className="pointer-events-none absolute bottom-[22px] left-0 top-[22px] w-[2px] bg-[#f6cc51] sm:bottom-[38px] sm:top-[38px]" />
        <div className="pointer-events-none absolute bottom-[22px] right-0 top-[22px] w-[2px] bg-[#f6cc51] sm:bottom-[38px] sm:top-[38px]" />
        <div className="pointer-events-none absolute left-0 top-[22px] h-[2px] w-[31px] origin-left -rotate-45 bg-[#f6cc51] sm:top-[38px] sm:w-[54px]" />
        <div className="pointer-events-none absolute right-0 top-[22px] h-[2px] w-[31px] origin-right rotate-45 bg-[#f6cc51] sm:top-[38px] sm:w-[54px]" />
        <div className="pointer-events-none absolute bottom-[22px] left-0 h-[2px] w-[31px] origin-left rotate-45 bg-[#f6cc51] sm:bottom-[38px] sm:w-[54px]" />
        <div className="pointer-events-none absolute bottom-[22px] right-0 h-[2px] w-[31px] origin-right -rotate-45 bg-[#f6cc51] sm:bottom-[38px] sm:w-[54px]" />
        <div className="pointer-events-none absolute left-[16px] right-[16px] top-[18px] h-px bg-[#f8dd89] sm:left-[25px] sm:right-[25px] sm:top-[26px]" />
        <div className="pointer-events-none absolute bottom-[18px] left-[16px] right-[16px] h-px bg-[#f8dd89] sm:bottom-[26px] sm:left-[25px] sm:right-[25px]" />
        <div className="pointer-events-none absolute bottom-[16px] left-[18px] top-[16px] w-px bg-[#f8dd89] sm:bottom-[25px] sm:left-[26px] sm:top-[25px]" />
        <div className="pointer-events-none absolute bottom-[16px] right-[18px] top-[16px] w-px bg-[#f8dd89] sm:bottom-[25px] sm:right-[26px] sm:top-[25px]" />
        <div className="relative z-10 grid items-center gap-5 xl:h-full xl:grid-cols-[minmax(0,1.12fr)_minmax(320px,.88fr)] xl:gap-2">
          <div className="mx-auto w-full max-w-[700px] text-center xl:mx-0 xl:text-left">
            <p className="mb-3 mt-1 flex items-center justify-center gap-2.5 text-xs font-medium uppercase tracking-[.08em] text-[#65666d] sm:text-sm xl:justify-start">
              <span className="h-2.5 w-2.5 rounded-full animate-pulse bg-[#f5b800] shadow-[0_0_0_4px_rgba(245,184,0,.12)]" />
              Your business growth journey starts here
            </p>
            <h2 className="mx-auto max-w-[700px] text-center text-[clamp(1.9rem,3.5vw,3.4rem)] font-extrabold leading-[.99] tracking-[-.055em] text-[#080b13] xl:mx-0 xl:text-left">You&apos;re Ready<br className="hidden xl:block" /> <span className="bg-gradient-to-r from-[#f2a900] to-[#f5c91f] bg-clip-text text-transparent">to Grow.</span>
            </h2>

            {/* For Mobile Only */}
            <div className="mt-10 sm:hidden">
              {steps.map((step) =>
              <div key={step.number} className="space-y-2">
                <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full border-[3px] border-[#f7c400] bg-white shadow-[0_0_0_5px_rgba(255,214,41,.18)]" />
                  <div className="h-0.5 w-full bg-[#efc72c]" />
                </div>
                <div className="flex items-center gap-2 pl-4">
                    <p className="text-xl font-semibold" style={{ color: step.color }}>{step.number}</p>
                    <h3 className="mt-1 text-lg font-bold text-[#11131a]">{step.title}</h3>
                </div>
                  <p className="text-[#65666d] px-3 text-sm">{step.body}</p>
              </div>
              )}
            </div>

            <div className="relative mt-5 hidden border-t border-[#efc72c] pt-3.5 text-center sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 xl:mt-5 xl:gap-3 xl:text-left">
              {steps.map((step) => 
                <div key={step.number} className="relative min-w-0">
                  <span className="absolute -top-[24px] left-1/2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-[#f7c400] bg-white shadow-[0_0_0_3px_rgba(255,214,41,.18)] xl:left-0 xl:translate-x-0" />
                  <p className="mx-auto w-5 text-center text-[17px] font-semibold xl:mx-0" style={{ color: step.color }}>{step.number}</p>
                  <h3 className="mt-1 text-[17px] font-bold text-[#11131a]">{step.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[200px] text-sm leading-[1.4] text-[#65666d] xl:mx-0">{step.body}</p>
                </div>
              )}
            </div>

            <div className="mt-5 flex w-full flex-wrap items-center justify-center gap-3 px-3 sm:mt-5 xl:gap-2 xl:flex-nowrap xl:justify-start">
              <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:flex-nowrap">
                <GooglePlayBadge />
                <AppStoreBadge />
              </div>
              <span className="basis-full text-center -rotate-6 whitespace-nowrap font-[cursive] text-[20px] text-[#171a22] xl:flex xl:basis-auto xl:justify-start">Coming Soon!</span>
            </div>
          </div>

          <div className="relative flex min-h-[200px] items-end justify-center overflow-hidden sm:min-h-[250px] xl:h-full xl:w-[95%] xl:justify-self-end xl:w-full xl:min-h-0">
            <div className="absolute bottom-[4%] left-1/2 h-[220px] w-[220px] -translate-x-1/2 rounded-full bg-[#ffe16a]/35 blur-3xl sm:h-[300px] sm:w-[300px]" />
            <div className="pointer-events-none absolute bottom-[2%] left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full border border-[#f3c934]/25 sm:h-[350px] sm:w-[350px]" />
            <div className="pointer-events-none absolute bottom-[8%] left-1/2 h-[210px] w-[340px] -translate-x-1/2 rounded-[50%] border border-[#f3c934]/25 sm:h-[280px] sm:w-[440px]" />
            <div className="pointer-events-none absolute bottom-[11%] left-1/2 h-[140px] w-[400px] -translate-x-1/2 rotate-[25deg] rounded-[50%] border border-[#f3c934]/15" />
            <div className="pointer-events-none absolute left-[16%] top-[18%] h-px w-[70%] rotate-[25deg] bg-gradient-to-r from-transparent via-[#f1c638]/25 to-transparent" />
            <div className="pointer-events-none absolute bottom-[22%] left-[3%] h-px w-[94%] -rotate-[12deg] bg-gradient-to-r from-transparent via-[#f1c638]/20 to-transparent" />
            <span className="pointer-events-none absolute right-[17%] top-[18%] h-2 w-2 rounded-full bg-[#f2c329]/45" />
            <span className="pointer-events-none absolute bottom-[28%] left-[13%] h-2 w-2 rounded-full bg-[#e46ad5]/40" />
            <span className="pointer-events-none absolute right-[5%] bottom-[20%] text-2xl text-[#f3cf4b]/50">&#10022;</span>
            <IconCard type="ai" className="right-[12%] top-[8%] rotate-6" />
            <IconCard type="gallery" className="left-[2%] top-[35%] -rotate-6" />
            <IconCard type="analytics" className="right-[0%] top-[48%] rotate-6" />
            <IconCard type="calendar" className="left-[12%] bottom-[19%] -rotate-6" />
            <Image src="/Robot.png" alt="Flyrinzo robot assistant" width={1024} height={1536} priority className="relative z-10 h-auto w-[min(92%,230px)] object-contain drop-shadow-[0_12px_14px_rgba(199,142,0,.22)] sm:w-[min(88%,260px)] xl:w-[min(96%,280px)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
