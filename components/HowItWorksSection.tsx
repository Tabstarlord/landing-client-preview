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
    screenshot: { src: "/howitworks-1.png", width: 384, height: 253 },
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Connect Your Social Channels",
    intro: "Select the platforms you want to manage all from one place. Once connected, Flyrinzo automatically:",
    body: "",
    bullets: ["Syncs profile data", "Detects brand visuals", "Prepares content formats per platform"],
    outro: "No switching apps. No multiple logins every day.",
    screenshot: { src: "/howitworks-2.png", width: 389, height: 250 },
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M9 2a1 1 0 011 1v3h2V3a1 1 0 112 0v3h.5A1.5 1.5 0 0116 7.5V9a5 5 0 01-4 4.9V16a1 1 0 11-2 0v-2.1A5 5 0 016 9V7.5A1.5 1.5 0 017.5 6H8V3a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    title: "Create & Schedule Smarter",
    intro: "Track performance from your dashboard and get:",
    body: "",
    bullets: ["AI optimization tips", "Smart notifications", "Access to the Flyrinzo community"],
    outro: "You don't just post. You improve. You adapt. You grow.",
    screenshot: { src: "/howitworks-3.png", width: 384, height: 276 },
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Get AI-Powered Ideas",
    intro: "Flyrinzo's AI analyzes your business and generates:",
    body: "",
    bullets: ["Content recommendations", "Caption ideas", "Visual suggestions", "Ready-to-use templates"],
    outro: "",
    screenshot: { src: "/howitworks-4.png", width: 389, height: 250 },
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Grow Faster with a Global Community",
    intro: "Never Build Alone Again",
    body: "Connect with entrepreneurs worldwide. Learn from real success stories, avoid costly mistakes, and build partnerships that help your business grow beyond your local market.",
    bullets: [] as string[],
    outro: "",
    screenshot: { src: "/howitworks-5.png", width: 389, height: 264 },
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
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
                  <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-gray-900 flex-shrink-0">
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
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-amber-400 text-gray-900"
                          : "bg-amber-100 text-amber-500 hover:bg-amber-200"
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

          {/* signup.svg — shared illustration */}
          <div className="flex justify-center">
            <Image
              src="/signup.svg"
              alt="Flyrinzo sign up screen"
              width={813}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
