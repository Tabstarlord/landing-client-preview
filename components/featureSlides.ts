export const FEATURES = [
  {
    title: "AI Generation",
    alt: "AI Generation — create captions and flyers instantly",
  },
  {
    title: "Creative Assets",
    alt: "Creative Assets — ready-made, branded templates",
  },
  {
    title: "AI Insights & Recommendations",
    alt: "Flyrinzo AI Insights & Recommendations — know what to post and when",
  },
  {
    title: "Smart Scheduler",
    alt: "Smart Scheduler — plan and schedule posts in advance",
  },
  {
    title: "AI Matchmaking",
    alt: "AI Matchmaking — connect with the right partners",
  },
  {
    title: "Entrepreneur Community",
    alt: "Entrepreneur Community — learn, share, and grow with fellow creators",
  },
  {
    title: "Global Opportunities",
    alt: "Global Opportunities — expand your business safely and confidently",
  },
  {
    title: "Notifications",
    alt: "Notifications — never miss updates, reminders, and AI alerts",
  },
] as const;

export const mobileFeatureSlides = FEATURES.map((feature, i) => ({
  src: `/features/feature-${i + 1}-mobile.webp`,
  alt: feature.alt,
}));

export const webFeatureSlides = FEATURES.map((feature, i) => ({
  src: `/features/feature-${i + 1}-web.webp`,
  alt: feature.alt,
}));
