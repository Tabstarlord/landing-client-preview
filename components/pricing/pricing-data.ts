export type PlanId = "free" | "starter" | "growth" | "scale";

export interface PlanSection {
  title: string;
  features: string[];
}

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  description: string;
  note?: string;
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  sections: PlanSection[];
}

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Fly Free",
    tagline: "Best for trying Flyrinzo",
    description: "Try Flyrinzo and start marketing smarter.",
    note: "No credit card required.",
    ctaLabel: "Start Free",
    ctaHref: "/signup",
    sections: [
      {
        title: "Create",
        features: ["10 AI-Powered Captions / month", "3 AI Marketing Visuals / month"],
      },
      {
        title: "Plan & Publish",
        features: ["10 Scheduled Posts / month", "Instagram, Facebook & TikTok"],
      },
      {
        title: "Analyze & Grow",
        features: ["Basic Performance Analytics"],
      },
      {
        title: "Connect & Store",
        features: ["Flyrinzo Business Community", "500 MB Media Storage"],
      },
    ],
  },
  {
    id: "starter",
    name: "Fly Starter",
    tagline: "Best for getting started",
    description: "Simple tools to help you stay active online.",
    ctaLabel: "Choose Starter",
    ctaHref: "/contact-us",
    sections: [
      {
        title: "Create",
        features: ["20 AI-Powered Captions / month", "10 AI Marketing Visuals / month"],
      },
      {
        title: "Plan & Publish",
        features: ["20 Scheduled Posts / month", "Instagram, Facebook & TikTok"],
      },
      {
        title: "Analyze & Grow",
        features: ["Basic Performance Analytics"],
      },
      {
        title: "Connect & Store",
        features: ["Flyrinzo Business Community", "1 GB Media Storage"],
      },
    ],
  },
  {
    id: "growth",
    name: "Fly Growth",
    tagline: "Stay consistent. Grow smarter.",
    description: "Your everyday AI marketing toolkit for real growth.",
    ctaLabel: "Get Growth",
    ctaHref: "/contact-us",
    popular: true,
    sections: [
      {
        title: "Create",
        features: ["Unlimited AI-Powered Captions", "30 AI Marketing Visuals / month"],
      },
      {
        title: "Creative Studio",
        features: ["Full Access to Creative Studio", "1000+ Templates"],
      },
      {
        title: "Plan & Publish",
        features: ["Unlimited Scheduled Posts", "Instagram, Facebook & TikTok"],
      },
      {
        title: "Analyze & Grow",
        features: [
          "Performance Analytics",
          "Smart Marketing Recommendations",
          "Monthly & Yearly PDF Reports",
          "Peer Benchmarking",
        ],
      },
      {
        title: "Connect & Store",
        features: ["Flyrinzo Business Community", "5 GB Media Storage"],
      },
    ],
  },
  {
    id: "scale",
    name: "Fly Scale",
    tagline: "More content. More visibility. More support.",
    description: "Maximum capacity for businesses ready to scale.",
    ctaLabel: "Choose Scale",
    ctaHref: "/contact-us",
    sections: [
      {
        title: "Create",
        features: ["Unlimited AI-Powered Captions", "100 AI Marketing Visuals / month"],
      },
      {
        title: "Creative Studio",
        features: ["Full Access to Creative Studio", "1000+ Templates"],
      },
      {
        title: "Plan & Publish",
        features: ["Unlimited Scheduled Posts", "Instagram, Facebook & TikTok"],
      },
      {
        title: "Analyze & Grow",
        features: [
          "Advanced Performance Analytics",
          "Smart Marketing Recommendations",
          "Monthly & Yearly PDF Reports",
          "Peer Benchmarking",
        ],
      },
      {
        title: "Connect & Store",
        features: ["Flyrinzo Business Community", "20 GB Media Storage", "Priority Support"],
      },
    ],
  },
];

/** A cell is text, or true/false for a tick/cross, or "platforms" for the social icons. */
export type Cell = string | boolean | "platforms";

/** Columns: Free, Starter, Growth, Scale. */
export const COMPARISON_ROWS: Array<{ label: string; values: Cell[] }> = [
  { label: "Available Social Platforms", values: ["platforms", "platforms", "platforms", "platforms"] },
  { label: "Scheduled Posts", values: ["10 / month", "20 / month", "Unlimited", "Unlimited"] },
  { label: "AI-Powered Captions", values: ["10 / month", "20 / month", "Unlimited", "Unlimited"] },
  { label: "AI Marketing Visuals", values: ["3 / month", "10 / month", "30 / month", "100 / month"] },
  { label: "Creative Studio", values: [false, false, "Full", "Full"] },
  { label: "Performance Analytics", values: ["Basic", "Basic", "Standard", "Advanced"] },
  { label: "Smart Marketing Recommendations", values: [false, false, true, true] },
  { label: "Monthly & Yearly PDF Reports", values: [false, false, true, true] },
  { label: "Flyrinzo Business Community", values: [true, true, true, true] },
  { label: "Peer Benchmarking", values: [false, false, true, true] },
  { label: "Priority Support", values: [false, false, false, true] },
  { label: "Asset Storage", values: ["500 MB", "1 GB", "5 GB", "20 GB"] },
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
