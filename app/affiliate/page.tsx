"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AffiliateApplyModal from "@/components/AffiliateApplyModal";

const MAX_REFERRALS = 500;
const MILESTONES = [
  { count: 100, reward: 1000 },
  { count: 200, reward: 3000 },
  { count: 300, reward: 5000 },
  { count: 400, reward: 7000 },
  { count: 500, reward: 10000 },
];

// Interpolate between milestones so the total matches each milestone's reward exactly
function earningsFor(referrals: number) {
  let prev = { count: 0, reward: 0 };
  for (const m of MILESTONES) {
    if (referrals <= m.count) {
      const t = (referrals - prev.count) / (m.count - prev.count);
      return Math.round(prev.reward + t * (m.reward - prev.reward));
    }
    prev = m;
  }
  return prev.reward;
}

const faqs = [
  {
    q: "What is the Flyrinzo Growth Partner Program?",
    a: "The Flyrinzo Growth Partner Program allows approved partners to introduce small businesses to Flyrinzo, help them get started and earn rewards based on qualified customers they generate.",
  },
  {
    q: "Do I need to be an influencer?",
    a: "No. You do not need thousands of followers or a large social media audience. We welcome creators, entrepreneurs, students, sales professionals, community connectors and anyone with genuine relationships with small businesses.",
  },
  {
    q: "Is there a fee to join?",
    a: "No. There is no application fee to apply to become a Flyrinzo Growth Partner.",
  },
  {
    q: "What happens after I apply?",
    a: "Our team will review your application. Selected applicants will be invited to complete an approximately 30-minute onboarding session with a Flyrinzo Partner Success Specialist.",
  },
  {
    q: "What happens during the onboarding?",
    a: "You'll learn how Flyrinzo works, how to introduce it to businesses, how to use your referral tools, how referrals are tracked and how the rewards program works.",
  },
  {
    q: "How do I refer a business?",
    a: "Approved Growth Partners receive a unique referral link and/or QR code. Businesses that register through your unique referral source are connected to your partner account for tracking purposes.",
  },
  {
    q: "Can I onboard businesses in person?",
    a: "Yes. You can introduce Flyrinzo online or through genuine conversations with eligible businesses in your community, subject to the Growth Partner Program terms and applicable marketing requirements.",
  },
  {
    q: "Does a signup count toward my $10,000 milestone?",
    a: "Registrations may appear in your referral dashboard, but milestone rewards are based on qualified paying businesses that meet the requirements of the Growth Partner Program.",
  },
  {
    q: "What is a qualified business?",
    a: "A qualified business is an eligible business that registers through your approved referral source, completes the required account activation process and meets the applicable paid-customer requirements. Duplicate, fraudulent, self-referred or otherwise ineligible accounts do not qualify.",
  },
  {
    q: "When do I get paid?",
    a: "Eligible commissions and milestone rewards are calculated according to the Flyrinzo Growth Partner payout schedule and displayed through your partner dashboard.",
  },
  {
    q: "How do I know how many businesses I have referred?",
    a: "Your Flyrinzo Growth Partner dashboard will allow you to monitor your referrals, activated businesses, qualified customers, commissions and progress toward your next milestone.",
  },
  {
    q: "Can I really earn $10,000?",
    a: "Partners who satisfy the requirements for the applicable milestones can unlock cumulative milestone rewards of up to $10,000. Earnings are performance-based and are not guaranteed.",
  },
  {
    q: "Do I have to personally provide customer support?",
    a: "No. Your job is to introduce eligible businesses and help them complete the initial onboarding process. Flyrinzo manages ongoing platform support for its customers.",
  },
  {
    q: "Can businesses I refer participate in the Empower 500 campaign?",
    a: "Eligible businesses may participate while campaign spaces remain available and provided they meet the applicable campaign requirements.",
  },
  {
    q: "Can I run social media content promoting Flyrinzo?",
    a: "Yes. Approved partners can promote Flyrinzo using their unique referral link and approved marketing resources. Any promotional relationship with Flyrinzo should be clearly disclosed.",
  },
  {
    q: "What happens when I reach 500 qualified customers?",
    a: "Once 500 qualified businesses have met the applicable program requirements, you will have reached the highest published milestone of $10,000 in cumulative milestone rewards, subject to verification and the Growth Partner Program terms.",
  },
  {
    q: "What if I have more questions?",
    a: "Your Flyrinzo Partner Success Specialist and partner resources will be available to help you understand the program and get started.",
  },
];

const icon = "w-9 h-9";

const Svg = ({ color, children, className = icon }: { color: string; children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {children}
  </svg>
);

const steps = [
  {
    title: "Express Your Interest",
    text: "Complete a short application telling us about you.",
    icon: "/affiliate/express-interest.svg",
  },
  {
    title: "Get Accepted & Trained",
    text: "Learn how Flyrinzo, referrals, QR codes and rewards work.",
    icon: "/affiliate/accepted-trained.svg",
  },
  {
    title: "Onboard Small Businesses",
    text: "Introduce businesses using your unique referral link or QR code.",
    icon: "/affiliate/onboard-businesses.svg",
  },
];

const perks = [
  {
    title: "Earn From Your Referrals",
    text: "Turn your network into an opportunity. Earn rewards when people you refer join Flyrinzo and meet the program requirements.",
    icon: "/affiliate/earn-referrals.svg",
  },
  {
    title: "Grow Your Influence",
    text: "Introduce businesses and creators to a tool that helps them manage and grow their social media presence while building your audience.",
    icon: (
      <Svg color="#c026d3">
        <path d="M4 24l8-8 5 5 11-12M20 9h8v8" />
      </Svg>
    ),
  },
  {
    title: "Track Your Growth",
    text: "See your referrals, conversions, rewards, and ambassador progress in one place with your dedicated dashboard.",
    icon: "/affiliate/track-growth.svg",
  },
  {
    title: "Unlock Ambassador Perks",
    text: "Progress through the ambassador program and unlock exclusive opportunities, recognition, resources, and program benefits as you grow.",
    icon: "/affiliate/ambassador-perks.svg",
  },
  {
    title: "Help businesses grow",
    text: "Introduce businesses to smarter marketing with Flyrinzo. You bring the relationships. Flyrinzo gives businesses the AI-powered tools they need.",
    icon: "/affiliate/help-businesses.svg",
  },
  {
    title: "Easy to Share",
    text: "Share your unique referral link or QR code and introduce businesses to Flyrinzo wherever you connect.",
    icon: (
      <Svg color="#06b6d4">
        <path d="M28 4L4 14l9 4 4 9zM13 18l15-14" />
      </Svg>
    ),
  },
];

// Rectangle 2–10 exports, in grid order (even = rounded square, odd = circle)
const avatars = Array.from({ length: 9 }, (_, i) => `/affiliate/avatar-${i + 2}.svg`);

function ApplyButton({ label = "Become an Affiliate", className = "", onClick }: { label?: string; className?: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-base px-8 py-3 rounded-md transition-colors ${className}`}
    >
      {label}
    </button>
  );
}

export default function AffiliatePage() {
  const [referrals, setReferrals] = useState(56);
  const [applyOpen, setApplyOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const earnings = earningsFor(referrals);
  const pct = (referrals / MAX_REFERRALS) * 100;

  return (
    <main className="bg-white text-gray-900">
      {/* Nav */}
      <Navbar />

      {/* Hero */}
      <section className="text-center px-6 pt-16 pb-14 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          <span className="md:whitespace-nowrap">
            Help Small Businesses <span className="text-yellow-400">Grow</span>.
          </span>
          <br />
          Get Rewarded.
        </h1>
        <p className="mt-5 text-base text-gray-500 leading-relaxed max-w-md mx-auto">
          Unlock up to <strong className="text-gray-700">$10,000</strong>{" "}
          in milestone rewards by introducing
          businesses to Flyrinzo. You don&apos;t need a huge following. <br/> You don&apos;t need an office. And you
          don&apos;t need expensive equipment.
        </p>
        <ApplyButton onClick={() => setApplyOpen(true)} className="mt-6" />
      </section>

      {/* Steps */}
      <section className="px-6 py-8 max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-10">Three Steps to Earning</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.icon} alt="" className="w-12 h-12" />
              <h3 className="mt-3 text-base font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-1 text-sm text-[#6F6C90] leading-relaxed max-w-[200px]">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="px-6 pt-16 pb-8 max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700">How Much Could You Earn?</h2>
        <p className="text-center text-base text-[#6F6C90] mt-3 leading-relaxed">
          Calculate Your Progress
          <br />
          Move the slider to see your milestone potential.
        </p>

        <div className="mt-8 bg-gray-50 rounded-2xl p-6 md:p-8 grid md:grid-cols-[1fr_220px] gap-6">
          <div>
            <p className="text-sm font-semibold">
              Businesses Referred: <span className="text-yellow-400">{referrals}</span>
            </p>
            <input
              type="range"
              min={0}
              max={MAX_REFERRALS}
              value={referrals}
              onChange={(e) => setReferrals(Number(e.target.value))}
              aria-label="Businesses referred"
              className="mt-3 w-full h-1.5 appearance-none rounded-full cursor-pointer accent-yellow-400"
              style={{
                background: `linear-gradient(to right, #fbbf24 ${pct}%, #f3f0e8 ${pct}%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-700 mt-1">
              <span>0</span>
              <span>500</span>
            </div>

            <p className="text-sm font-semibold mt-6 mb-4">Milestones Reward</p>
            <div className="relative grid grid-cols-5 text-center">
              <div className="absolute top-2 left-[10%] right-[10%] border-t border-dashed border-yellow-300" />
              {MILESTONES.map(({ count, reward }) => {
                const reached = referrals >= count;
                return (
                  <div key={count} className="relative flex flex-col items-center">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center bg-gray-50 ${
                        reached ? "border-yellow-400 bg-yellow-400 text-white" : "border-gray-300 text-gray-400"
                      }`}
                    >
                      <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6.2l2 2 4-4.4" />
                      </svg>
                    </span>
                    <span className="mt-2 text-xs font-semibold">{count}</span>
                    <span className="text-[11px] text-gray-500">${reward.toLocaleString()}</span>
                    <span className="text-[10px] text-gray-400">Total Reward</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex items-center gap-2 bg-yellow-50 border border-yellow-100 rounded-md px-3 py-2">
              <span className="w-4 h-4 rounded bg-yellow-200 flex-shrink-0" />
              <p className="text-[10px] text-gray-500 leading-snug">
                Milestone rewards are based on qualified paying businesses and are subject to Flyrinzo Growth
                Partner Program terms.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-5 flex flex-col items-center text-center">
            <p className="text-xs text-gray-700">Referral earning</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/affiliate/earn-referrals.svg" alt="" className="w-8 h-8 mt-2" />
            <p className="text-4xl font-bold text-yellow-500 mt-2">${earnings.toLocaleString()}</p>
            <p className="text-xs text-gray-700 mt-1">+ commission</p>
            <hr className="w-full border-yellow-100 my-4" />
            <p className="text-[11px] text-gray-500 leading-snug">
              Based on {referrals} referrals/mo on Growth plan. As your qualified Flyrinzo customer base grows,
              so can your rewards.
            </p>
          </div>
        </div>

        <p className="text-center text-base text-[#6F6C90] mt-8 leading-relaxed max-w-lg mx-auto">
          Your partner dashboard will show your referrals, activated businesses, qualified customers,
          commissions and progress toward your next milestone.
        </p>
      </section>

      {/* Why promote */}
      <section className="px-6 pt-20 pb-10 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700">Why Promote Flyrinzo</h2>
        <p className="text-center text-base text-[#6F6C90] mt-2">You Don&apos;t Need Thousands of Followers</p>
        <div className="mt-10 grid md:grid-cols-2 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className={`p-6 ${i % 2 === 0 ? "md:border-r" : ""} ${i < perks.length - 2 ? "md:border-b" : ""} border-gray-100 ${
                i < perks.length - 1 ? "border-b md:border-b-0" : ""
              } ${i < perks.length - 2 ? "md:border-b" : ""}`}
            >
              <div className="w-9 h-9">
                {typeof p.icon === "string" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.icon} alt="" className="w-full h-full" />
                ) : (
                  p.icon
                )}
              </div>
              <h3 className="mt-3 text-base font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-[#6F6C90] leading-relaxed max-w-xs">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <ApplyButton onClick={() => setApplyOpen(true)} />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pt-16 pb-16 max-w-3xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-8">Frequently Asked Questions</h2>
        <div className="bg-white rounded-3xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] p-6 md:p-8 space-y-2.5">
          {faqs.map(({ q, a }, i) => {
            const open = openFaq === i;
            return (
              <div key={q} className="bg-gray-50 rounded-md">
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between text-left px-4 py-3.5 text-sm font-semibold text-gray-800"
                >
                  {q}
                  <svg viewBox="0 0 12 12" fill="none" className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}>
                    <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {open && (
                  <p className="px-4 pb-4 text-sm text-gray-500 leading-relaxed">{a}</p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16 max-w-4xl mx-auto">
        <div className="bg-slate-700 rounded-xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to Get Started?</h2>
            <p className="mt-3 text-sm text-gray-200 leading-relaxed">
              Being a Flyrinzo Growth Partner isn&apos;t only about posting referral links. It&apos;s about
              introducing useful technology to entrepreneurs who may not know where to start with AI.
            </p>
            <p className="mt-3 text-sm text-gray-200 leading-relaxed">
              Your phone could be the beginning of something bigger. Apply today to become a Flyrinzo Growth
              Partner.
            </p>
            <p className="mt-3 text-sm text-gray-200">Built for People Who Know People</p>
            <ApplyButton onClick={() => setApplyOpen(true)} label="Apply Now" className="mt-5 w-full md:w-auto md:px-14" />
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {avatars.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                className={`w-full aspect-square object-cover ${i % 2 === 0 ? "rounded-md" : "rounded-full"}`}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <AffiliateApplyModal open={applyOpen} onClose={() => setApplyOpen(false)} />
    </main>
  );
}
