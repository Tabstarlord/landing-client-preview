"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Create Your Free Account",
    intro: "Start Free in Minutes",
    body: "Create your account and set up your business profile in less than a minute. No credit card required. No commitment. Just instant access to smarter marketing tools built for small businesses.",
    bullets: [] as string[],
    outro: "",
    screenshot: { src: "/Sign up.webp", width: 3152, height: 2228 },
    icon: (
      <Image src="/account.svg" alt="" width={30} height={30} className="w-5 h-5 object-contain" />
    ),
  },
  {
    title: "Connect Your Social Channels",
    intro: "Select the platforms you want to manage all from one place. Once connected, Flyrinzo automatically:",
    body: "",
    bullets: ["Syncs profile data", "Detects brand visuals", "Prepares content formats per platform"],
    outro: "No switching apps. No multiple logins every day.",
    screenshot: { src: "/Sign up (1).webp", width: 3152, height: 2228 },
    icon: (
      <Image src="/connect.svg" alt="" width={27} height={19} className="w-5 h-auto object-contain" />
    ),
  },
  {
    title: "Create & Schedule Smarter",
    intro: "Track performance from your dashboard and get:",
    body: "",
    bullets: ["AI optimization tips", "Smart notifications", "Access to the Flyrinzo community"],
    outro: "You don't just post. You improve. You adapt. You grow.",
    screenshot: { src: "/Sign up (3).webp", width: 3152, height: 2352 },
    icon: (
      <Image src="/schedule.svg" alt="" width={23} height={23} className="w-5 h-5 object-contain" />
    ),
  },
  {
    title: "Get AI-Powered Ideas",
    intro: "Flyrinzo's AI analyzes your business and generates:",
    body: "",
    bullets: ["Content recommendations", "Caption ideas", "Visual suggestions", "Ready-to-use templates"],
    outro: "",
    screenshot: { src: "/Sign up (2).webp", width: 3152, height: 2352 },
    icon: (
      <Image src="/ai.svg" alt="" width={32} height={32} className="w-5 h-5 object-contain" />
    ),
  },
  {
    title: "Grow Faster with a Global Community",
    intro: "Never Build Alone Again",
    body: "Connect with entrepreneurs worldwide. Learn from real success stories, avoid costly mistakes, and build partnerships that help your business grow beyond your local market.",
    bullets: [] as string[],
    outro: "",
    screenshot: { src: "/Sign up (4).webp", width: 3484, height: 2228 },
    icon: (
      <Image src="/rgow.svg" alt="" width={24} height={26} className="w-5 h-auto object-contain" />
    ),
  },
];

function StepBody({ step, textClass }: { step: (typeof steps)[number]; textClass: string }) {
  return (
    <>
      {step.intro && <p className={`${textClass} mb-2`}>{step.intro}</p>}
      {step.bullets.length > 0 && (
        <ul className="list-disc list-inside space-y-1 mb-2">
          {step.bullets.map((b) => (
            <li key={b} className={textClass}>{b}</li>
          ))}
        </ul>
      )}
      {step.body && <p className={textClass}>{step.body}</p>}
      {step.outro && <p className={`${textClass} mt-2`}>{step.outro}</p>}
    </>
  );
}

export default function HowItWorksSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="how" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex justify-center mb-10 md:mb-16">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
            How Flyrinzo works
          </span>
        </div>

        {/* Mobile: collapsible steps, each with its own screenshot */}
        <div className="sm:hidden flex flex-col gap-4">
          {steps.map((step, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={step.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full bg-amber-50 px-5 py-5 flex items-center gap-4 text-left"
                >
                  <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <h3 className="flex-1 font-bold text-gray-900 text-base leading-snug">{step.title}</h3>
                  <span className="text-gray-400 text-xl leading-none flex-shrink-0">{isOpen ? "—" : "+"}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out bg-amber-50 ${
                    isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-6">
                    <StepBody step={step} textClass="text-gray-500 text-[15px] leading-relaxed" />
                  </div>
                  <Image
                    src={step.screenshot.src}
                    alt={step.title}
                    width={step.screenshot.width}
                    height={step.screenshot.height}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* sm+: accordion + shared signup.svg */}
        <div className="hidden sm:grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-12 items-start">

          {/* Accordion steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={step.title} className="flex gap-5">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <button
                      onClick={() => setOpenIndex(i)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors text-white ${
                        isOpen
                          ? "bg-amber-400"
                          : "bg-amber-100 hover:bg-amber-200"
                      }`}
                      aria-expanded={isOpen}
                    >
                      {step.icon}
                    </button>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 min-h-4 bg-gray-200 my-2" />
                    )}
                  </div>

                  <div className={i < steps.length - 1 ? "pb-6 flex-1" : "flex-1"}>
                    <button
                      onClick={() => setOpenIndex(i)}
                      className="w-full text-left mt-2"
                    >
                      <h3 className={`font-semibold text-sm leading-snug transition-colors ${
                        isOpen ? "text-gray-900" : "text-gray-400 hover:text-gray-700"
                      }`}>
                        {step.title}
                      </h3>
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                    }`}>
                      <StepBody step={step} textClass="text-sm text-gray-500 leading-relaxed" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Step screenshot — crossfades with the selected step */}
          <div className="relative w-full aspect-[3152/2352]">
            {steps.map((step, i) => (
              <Image
                key={step.title}
                src={step.screenshot.src}
                alt={step.title}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className={`object-contain transition-opacity duration-300 ease-in-out ${
                  openIndex === i ? "opacity-100" : "opacity-0"
                }`}
                priority={i === 0}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
