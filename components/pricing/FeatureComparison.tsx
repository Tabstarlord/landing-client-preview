import { Fragment } from "react";
import Image from "next/image";
import {
  BarChart3,
  CalendarDays,
  Check,
  Cloud,
  FileText,
  Headset,
  Image as ImageIcon,
  Lightbulb,
  Minus,
  Palette,
  Sparkles,
  Users,
} from "lucide-react";

type Feature = {
  label: string;
  icon: typeof FileText;
  values: [string | boolean, string | boolean, string | boolean, string | boolean];
  strong?: boolean;
};

const sections: {
  title: string;
  description: string;
  icon: typeof FileText;
  color: string;
  features: Feature[];
}[] = [
  {
    title: "CREATE",
    description: "Turn ideas into high-quality content.",
    icon: Sparkles,
    color: "text-purple-700",
    features: [
      { label: "AI-Powered Captions", icon: FileText, values: ["10 / month", "20 / month", "Unlimited", "Unlimited"] },
      { label: "AI Marketing Visuals", icon: ImageIcon, values: ["5 / month", "10 / month", "30 / month", "100 / month"] },
      { label: "Creative Studio", icon: Palette, values: [false, "Basic access", "Full access", "Full access"] },
    ],
  },
  {
    title: "PLAN & PUBLISH",
    description: "Schedule and publish across your channels.",
    icon: CalendarDays,
    color: "text-blue-600",
    features: [
      { label: "Smart Post Scheduling", icon: CalendarDays, values: ["10 / month", "20 / month", "Unlimited", "Unlimited"] },
      { label: "Instagram, Facebook & TikTok", icon: Users, values: ["social", "social", "social", "social"] },
    ],
  },
  {
    title: "ANALYZE & GROW",
    description: "Get insights and recommendations to grow.",
    icon: BarChart3,
    color: "text-green-600",
    features: [
      { label: "Performance Analytics", icon: BarChart3, values: ["Basic", "Basic", "Performance Analytics", "Advanced Performance Analytics"], strong: true },
      { label: "Smart Marketing Recommendations", icon: Lightbulb, values: [false, false, true, true] },
      { label: "Monthly & Yearly PDF Reports", icon: FileText, values: [false, false, true, true] },
      { label: "Peer Benchmarking", icon: Users, values: [false, false, false, true] },
    ],
  },
  {
    title: "CONNECT & STORE",
    description: "Get support and store your media.",
    icon: Users,
    color: "text-amber-500",
    features: [
      { label: "Flyrinzo Business Community", icon: Users, values: [true, true, true, true] },
      { label: "Media Storage", icon: Cloud, values: ["500 MB", "1 GB", "5 GB", "20 GB"] },
      { label: "Priority Support", icon: Headset, values: [false, false, false, true] },
    ],
  },
];

const plans = [
  { name: "Fly Free", note: "Best for trying Flyrinzo", icon: "/pricing-icons/free.svg" },
  { name: "Fly Starter", note: "Best for getting started", icon: "/pricing-icons/starter.svg" },
  { name: "Fly Growth", note: "Stay consistent. Grow smarter.", icon: "/pricing-icons/growth.svg", popular: true },
  { name: "Fly Scale", note: "More content. More visibility. More support.", icon: "/pricing-icons/scale.svg" },
];

function SocialIcons() {
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="Instagram, Facebook and TikTok">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
        <defs>
          <linearGradient id="ig-gradient" x1="0" x2="1" y1="1"   y2="0">
            <stop stopColor="#feda75"/>
            <stop offset=".5" stopColor="#fa7e1e"/>
            <stop offset="1" stopColor="#d62976"/>
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-gradient)"/>
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="white" strokeWidth="2"/>
        <circle cx="17" cy="7" r="1.2" fill="white"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
        <circle cx="12" cy="12" r="12" fill="#1877f2"/>
        <path fill="white" d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8z"/>
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
        <rect width="24" height="24" rx="6" fill="#111"/>
        <path fill="#25f4ee" d="M13 4h3c.1 2 1.2 3.2 3 3.5v3c-1.2 0-2.3-.4-3.1-1v5.2a5 5 0 1 1-5-5h.7v3.1a2 2 0 1 0 1.4 1.9z"/>
        <path fill="#fe2c55" d="M12 3h3c.1 2 1.2 3.2 3 3.5v3c-1.2 0-2.3-.4-3.1-1v5.2a5 5 0 1 1-5-5h.7v3.1a2 2 0 1 0 1.4 1.9z"/>
        <path fill="white" d="M12.5 4h2.7c.1 2 1.2 3.2 3 3.5v2.7c-1.1 0-2.1-.4-3-1v5.5a4.5 4.5 0 1 1-4.5-4.5v2.8a1.8 1.8 0 1 0 1.8 1.8z"/>
      </svg>
    </span>
  );
}

function Value({ value, highlight, strong }: { value: string | boolean; highlight: boolean; strong?: boolean }) {
  if (value === true) return <span className={`mx-auto flex h-6 w-6 items-center justify-center rounded-full ${highlight ? "bg-amber-400" : "bg-emerald-500"}`}><Check className="h-4 w-4 text-white" strokeWidth={3} /></span>;
  if (value === false) return <span className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-slate-300"><Minus className="h-4 w-4 text-white" strokeWidth={3} /></span>;
  return <span className={strong || highlight ? "font-bold text-slate-950" : "font-normal text-slate-700"}>{value}</span>;
}

export default function FeatureComparison() {
  return (
    <section id="pricing-features" className="pb-16 pt-4 sm:pb-20">
      <div className="mx-auto max-w-[1500px] px-4 sm:px-7 lg:px-10">
        <header className="mb-5 text-center sm:mb-6">
          <p className="mb-1 text-sm font-bold uppercase tracking-[0.08em] text-yellow-500 sm:text-lg">Explore what&apos;s included</p>
          <h2 className="text-2xl font-bold leading-none tracking-tight text-slate-950 sm:text-4xl">Compare <span className="text-yellow-400">Plan Features</span></h2>
          <p className="mt-2 text-sm text-slate-500 md:text-base">Find the tools and features that fit your business needs.</p>
        </header>

        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-[0_3px_14px_rgba(15,23,42,0.07)]">
          <table className="w-full min-w-[900px] table-fixed border-collapse text-left text-sm text-slate-700">
            <colgroup>
              <col className="w-[28%]"/>
              <col className="w-[18%]"/>
              <col className="w-[18%]"/>
              <col className="w-[18%]"/>
              <col className="w-[18%]"/>
            </colgroup>
            <thead>
              <tr className="h-[168px] border-b border-slate-200 md:h-[130px]">
                <th className="px-6 text-xl font-bold text-gray-900">Features</th>
                {plans.map(({ name, note, icon, popular }) => 
                  <th 
                  key={name} 
                  className={`relative border-l border-slate-200 px-4 ${popular ? "rounded-t-2xl border-amber-400 bg-amber-50/70" : ""}`}
                  >
                  {popular && 
                  <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap rounded-b-md bg-yellow-400 px-4 py-1.5 text-[11px] font-semibold uppercase leading-none text-white shadow-sm">
                    Most Popular
                  </span>
                  }
                  <div className="flex flex-col items-center gap-2 pt-8 text-center md:flex-row md:gap-4 md:pt-0 md:text-left">
                    <Image 
                    src={icon} 
                    alt="" 
                    width={72} 
                    height={68} 
                    className="h-12 w-12 shrink-0 object-contain"
                    />
                    <span className="min-w-0">
                      <span className="block text-lg font-bold leading-tight text-gray-900">{name}</span>
                      <span className="mt-1 block text-xs font-normal leading-5 text-gray-500">{note}</span>
                    </span>
                  </div>
                </th>
              )}
              </tr>
            </thead>
          <tbody>
              {sections.map((section) => {
                const SectionIcon = section.icon;
                return (
                  <Fragment key={section.title}>
                    <tr className="h-[50px] bg-indigo-50/80">
                      <th colSpan={5} className="px-7">
                        <span className={`mr-3 inline-flex align-middle ${section.color}`}>
                          <SectionIcon className="h-7 w-7" strokeWidth={2.8}/>
                        </span>
                        <span className="align-middle font-bold text-gray-900">{section.title}</span>
                        <span className="ml-4 align-middle text-xs font-normal text-gray-500">{section.description}</span>
                      </th>
                    </tr>
                    {section.features.map((feature) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <tr key={feature.label} className="h-[43px] border-b border-slate-200 last:border-b-0">
                          <th scope="row" className="px-3 font-normal text-slate-600 md:px-7">
                            {feature.label === "Instagram, Facebook & TikTok" ? (
                              <span className="mr-2 inline-block align-middle md:mr-3">
                                <SocialIcons />
                              </span>
                            ) : (
                              <FeatureIcon
                                className={`mr-2 inline h-4 w-4 align-middle ${feature.icon === Lightbulb ? "text-yellow-400" : "text-blue-600"} md:mr-8 md:h-6 md:w-6`}
                                strokeWidth={2.3}
                              />
                            )}
                            {feature.label !== "Instagram, Facebook & TikTok" && <span className="whitespace-nowrap align-middle text-xs md:text-sm">{feature.label}</span>}
                          </th>
                          {feature.values.map((value, i) => (
                            <td
                              key={i}
                              className={`border-l border-slate-200 px-3 text-center ${i === 2 ? "border-x-2 border-amber-400 bg-amber-50/70" : ""}`}
                            >
                              {value === "social" ? 
                              <SocialIcons/> : <Value value={value} highlight={i === 2} strong={feature.strong}/>
                              }
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-2 flex items-start gap-3 px-1 text-xs leading-snug text-slate-500"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-200 text-base font-bold text-white">i</span><span>Limited allowances refresh monthly based on your subscription billing date (monthly or annual). Unlimited AI captions and scheduling are subject to fair-use rules.<br/>Unused allowances do not roll over.</span></p>
      </div>
    </section>
  );
}

