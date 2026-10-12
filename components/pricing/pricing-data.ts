export type PlanId = "starter" | "growth" | "scale";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  popular?: boolean;
  features: string[];
}

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "For businesses getting started online",
    features: [
      "Instagram, Facebook & TikTok",
      "30 scheduled post per month",
      "AI Caption (texts)",
      "5 AI Images per month",
      "Creative Studio (Templates) - Basic",
      "Performance Analytics - Basic",
      "AI Marketing Intelligence",
      "Growth Report (Monthly & Yearly)",
      "Flyrinzo SMB Community",
      "500 MB Storage",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "For growing business that wants consistency",
    popular: true,
    features: [
      "Instagram, Facebook & Tiktok",
      "100 scheduled post per month",
      "AI Caption (texts)",
      "30 AI Images per month",
      "Creative Studio (Templates) - Unlimited",
      "Performance Analytics - Advanced",
      "AI Marketing Intelligence",
      "Growth Report (Monthly & Yearly)",
      "Peer Benchmarking",
      "Flyrinzo SMB Community",
      "5 GB Storage",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "For business scaling content and visibility",
    features: [
      "Instagram, facebook & Tiktok",
      "300 scheduled post per month",
      "AI Caption (texts)",
      "100 AI Images per month",
      "Creative Studio (Templates) - Unlimited",
      "Performance Analytics - Advanced",
      "AI Marketing Intelligence",
      "Growth Report (Monthly & Yearly)",
      "Peer Benchmarking",
      "Priority Publisher Queue",
      "Priority Support",
      "Flyrinzo SMB Community",
      "20 GB Storage",
    ],
  },
];

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
