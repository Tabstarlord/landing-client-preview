"use client";

import Image from "next/image";
import { useState } from "react";

const steps = [
  {
    title: "Start Free in Minutes",
    desc: "Create your account and set up your business profile in less than a minute. No credit card required. No commitment. Just instant access to smarter marketing tools built for small businesses.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
      </svg>
    ),
  },
  {
    title: "Connect Your Social Channels",
    desc: "Link Instagram, Twitter, Facebook, LinkedIn and more in a few clicks. Manage all your platforms from one place.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    title: "Get AI-Powered Ideas",
    desc: "Our AI analyzes your niche and audience to suggest content ideas that resonate and drive real engagement.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Create & Schedule Smarter",
    desc: "Write, design, and schedule weeks of content in one streamlined workflow. Let automation handle the rest.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Grow Faster with a Global Community",
    desc: "Connect with other entrepreneurs, share insights, and grow your businesses together.",
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="how" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section label */}
        <div className="flex justify-center mb-12 md:mb-16">
          <span className="flex items-center gap-2 text-sm text-gray-500">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
            How Flyrinzo works
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-12 items-start">

          {/* Accordion steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="flex gap-5">
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
                      isOpen ? "max-h-40 opacity-100 mt-1.5" : "max-h-0 opacity-0"
                    }`}>
                      <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* signup.svg — hidden on small screens */}
          <div className="hidden sm:flex justify-center">
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
