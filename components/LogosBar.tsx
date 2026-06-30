"use client";

import Image from "next/image";

const logos = [
  { name: "Air", src: "/air.png", width: 100, height: 40 },
  { name: "Chamber", src: "/chamber.png", width: 120, height: 40 },
  { name: "Fly", src: "/fly.png", width: 100, height: 40 },
  { name: "Layer", src: "/layer.png", width: 100, height: 40 },
  { name: "Loveville", src: "/Loveville.png", width: 120, height: 40 },
  { name: "Vile", src: "/vile.png", width: 80, height: 40 },
  { name: "Washington", src: "/washington.png", width: 140, height: 40 },
];

export default function LogosBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">
          Over 10,000 users have published more than 10,000 posts with Flyrinzo
        </p>

        {/* Marquee Container */}
        <div className="relative">
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
