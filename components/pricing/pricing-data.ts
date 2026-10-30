export const PRICING_PLAN_DETAILS = [
  {
    icon: "✦", groups: [
      ["CREATE", "10 AI-Powered Captions / month", "3 AI Marketing Visuals / month"],
      ["PLAN & PUBLISH", "10 Scheduled Posts / month", "Instagram, Facebook & TikTok"],
      ["ANALYZE & GROW", "Basic Performance Analytics"],
      ["CONNECT & STORE", "Flyrinzo Business Community", "500 MB Media Storage"],
    ],
  },
  {
    icon: "✦", groups: [
      ["CREATE", "20 AI-Powered Captions / month", "10 AI Marketing Visuals / month"],
      ["PLAN & PUBLISH", "20 Scheduled Posts / month", "Instagram, Facebook & TikTok"],
      ["ANALYZE & GROW", "Basic Performance Analytics"],
      ["CONNECT & STORE", "Flyrinzo Business Community", "1 GB Media Storage"],
    ],
  },
  {
    icon: "◮", groups: [
      ["CREATE", "Unlimited AI-Powered Captions", "30 AI Marketing Visuals / month"],
      ["CREATIVE STUDIO", "Full Access to Creative Studio", "1000+ Templates"],
      ["PLAN & PUBLISH", "Unlimited Scheduled Posts", "Instagram, Facebook & TikTok"],
      ["ANALYZE & GROW", "Performance Analytics", "Smart Marketing Recommendations", "Monthly & Yearly PDF Reports"],
      ["CONNECT & STORE", "Flyrinzo Business Community", "5 GB Media Storage"],
    ],
  },
  {
    icon: "♛", groups: [
      ["CREATE", "Unlimited AI-Powered Captions", "100 AI Marketing Visuals / month"],
      ["CREATIVE STUDIO", "Full Access to Creative Studio", "1000+ Templates"],
      ["PLAN & PUBLISH", "Unlimited Scheduled Posts", "Instagram, Facebook & TikTok"],
      ["ANALYZE & GROW", "Advanced Performance Analytics", "Smart Marketing Recommendations", "Monthly & Yearly PDF Reports", "Peer Benchmarking"],
      ["CONNECT & STORE", "Flyrinzo Business Community", "20 GB Media Storage", "Priority Support"],
    ],
  },
];

export const PRICING_PLAN_ART = ["/pricing-robot.png", "/pricing-icons/rocket-art.png", "/pricing-icons/growth-art.png", "/pricing-icons/crown-art.png"];
export const PRICING_PLAN_NAMES = ["Fly Free", "Fly Starter", "Fly Growth", "Fly Scale"];
export const PRICING_PLAN_TAGLINES = ["Best for trying Flyrinzo", "Best for getting started", "Stay consistent. Grow smarter.", "More content. More visibility. More support."];
export const PRICING_PLAN_DESCRIPTIONS = [
  "Try Flyrinzo and start marketing smarter.",
  "Simple tools to help you stay active online.",
  "Your everyday AI marketing toolkit for real growth.",
  "Maximum capacity for businesses ready to scale.",
];
export const PRICING_PLAN_CTA_LABELS = ["Start Free", "Choose Starter", "Get Growth", "Choose Scale"];

/** A cell is text, or true/false for a tick/cross, or "platforms" for the social icons. */
export type Cell = string | boolean | "platforms";

export const COMPARISON_ROWS: Array<{ label: string; values: [Cell, Cell, Cell, Cell] }> = [
  { label: "Available Social Platforms", values: ["platforms", "platforms", "platforms", "Custom"] },
  { label: "Scheduled Post", values: ["30 / month", "100 / month", "300 / month", "Custom"] },
  { label: "AI Caption and text generation", values: ["30 / month", "100 / month", "300 / month", "Custom"] },
  { label: "AI Image Generation", values: ["5 / month", "30 / month", "100 / month", "Custom"] },
  { label: "Creative Studio (Template)", values: ["Basic", "Unlimited", "Unlimited", "Custom"] },
  { label: "Performance Analytics", values: ["Basic Analytics", "Advanced Analytics", "Advanced Analytics", "Custom"] },
  { label: "AI Marketing coach & Intelligence", values: [true, true, true, "Custom"] },
  { label: "Growth Report (Monthly & Yearly)", values: [true, true, true, "Custom"] },
  { label: "Flyrinzo SMB Community", values: [true, true, true, true] },
  { label: "Peer Benchmarking", values: [false, true, true, "Custom"] },
  { label: "Priority Publisher Queue", values: [false, false, true, "Custom"] },
  { label: "Priority Support", values: [false, false, true, "Custom"] },
  { label: "Asset Storage", values: ["500 MB", "5 GB", "20 GB", "Custom"] },
];

export const WITHOUT_FLYRINZO = [
  "Pay for multiple tools (Scheduling, Design, Analytics)",
  "Spend hours creating and posting content",
  "Higher monthly cost (agency or freelancers)",
  "Inconsistent posting and missed opportunities",
  "No clear insight on what works",
  "Harder to grow and stay visible",
];

export const WITH_FLYRINZO = [
  "Save money with one affordable platform",
  "Create and schedule in minutes",
  "Stay consistent and visible",
  "Get clear insights on what work",
  "Access powerful AI tools and ready templates",
  "Focus on your business while flyrinzo handles your marketing",
];
