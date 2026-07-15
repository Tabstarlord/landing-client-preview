"use client";

import { useState } from "react";

const tabs = [
  {
    label: "Our Mission",
    body: "To give entrepreneurs the tools, insights, and global community they need to make confident decisions and thrive in today's competitive market.",
  },
  {
    label: "Our Vision",
    body: "Empower every entrepreneur with AI-driven insights, actionable recommendations, and a global network so every effort turns into real, measurable growth.",
  },
];

const TORN_EDGE_CLIP =
  "polygon(0% 6%, 4% 0%, 8% 5%, 12% 1%, 16% 6%, 20% 0%, 24% 5%, 28% 1%, 32% 6%, 36% 0%, 40% 5%, 44% 1%, 48% 6%, 52% 0%, 56% 5%, 60% 1%, 64% 6%, 68% 0%, 72% 5%, 76% 1%, 80% 6%, 84% 0%, 88% 5%, 92% 1%, 96% 6%, 100% 0%, 100% 100%, 0% 100%)";

export default function MissionVisionToggle() {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex bg-amber-50 border border-amber-400 rounded-full p-1 max-w-sm mx-auto">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            onClick={() => setActive(i)}
            aria-current={i === active}
            className={`flex-1 text-center text-sm font-semibold py-2.5 rounded-full transition-colors ${
              i === active ? "bg-amber-400 text-white" : "text-amber-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="relative bg-white mt-6 pt-10 pb-10 px-6 text-center"
        style={{ clipPath: TORN_EDGE_CLIP }}
      >
        <p className="text-amber-400 text-2xl font-bold mb-6">{tabs[active].label}</p>
        <p className="text-gray-500 text-base leading-relaxed">{tabs[active].body}</p>
      </div>
    </div>
  );
}
