"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://flyrinzo-api-server-1.onrender.com/api";

const slug = (label: string) =>
  label.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9+-]+/g, "_").replace(/^_+|_+$/g, "");

// Display labels whose API value isn't a plain slug of the label.
const API_VALUES: Record<string, string> = {
  Retails: "retail",
  "Beauty & Hair Salon": "beauty_hair_salon",
  Constructions: "construction",
  "Restaurant & Food": "restaurant_food",
  "Fitness & Gym": "fitness_gym",
};
const toApi = (label: string) => API_VALUES[label] ?? slug(label);

const COUNTRIES = [
  { name: "Canada", flag: "🇨🇦" },
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "South Africa", flag: "🇿🇦" },
];

const ROLES = [
  "Entrepreneur", "Creator", "Student", "Sales Professional", "Business Consultant",
  "Influencer", "Community Builder", "Marketing Professional", "Freelancer", "Others",
];
const NETWORK_SIZES = ["1-5", "6-20", "21-50", "51-100", "100+"];
const BUSINESS_TYPES = [
  "Restaurant & Food", "Retails", "Beauty & Hair Salon", "Real estate", "Fitness & Gym",
  "Hospitality", "Sales", "Marketing firms", "Constructions", "Others",
];
const CONNECT_METHODS = [
  "In person", "Whatsapp", "Instagram", "Facebook", "Linkedin", "Community events",
  "Email", "Professional network", "Others",
];
const INTERESTS = [
  { label: "Help small businesses", sub: "Introduce businesses to useful AI powered tools." },
  { label: "Grow My Network", sub: "Build meaningful relationship with more businesses" },
  { label: "Earn Rewards", sub: "Unlock milestones rewards as qualified customers grow." },
  { label: "Introduce New Technology", sub: "Help business discover better ways to manage their marketing" },
  { label: "Build Opportunities", sub: "Create new professional and business opportunities." },
  { label: "Others", sub: "" },
];

type Form = {
  firstName: string; lastName: string; email: string; confirmEmail: string;
  phone: string; country: string; role: string;
  networkSize: string; businessTypes: string[]; networkDescription: string;
  connectMethods: string[]; facebook: string; instagram: string;
  reason: string; interests: string[]; referredBefore: "YES" | "NO"; experience: string;
  confirmed: boolean;
};

const initial: Form = {
  firstName: "", lastName: "", email: "", confirmEmail: "", phone: "", country: "Canada",
  role: "Entrepreneur", networkSize: "1-5", businessTypes: [], networkDescription: "",
  connectMethods: [], facebook: "", instagram: "", reason: "", interests: ["Help small businesses"],
  referredBefore: "YES", experience: "", confirmed: false,
};

const TITLES = [
  "Tell us about yourself",
  "Tell us about your network",
  "Why do you want to become a Growth Partner?",
  "Why do you want to become a Growth Partner?",
];

const inputCls =
  "w-full border border-gray-200 rounded-md px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-yellow-400 bg-white";
const labelCls = "block text-sm text-gray-600 mb-1.5";

function Radio({ checked }: { checked: boolean }) {
  return (
    <span className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center ${checked ? "border-yellow-400" : "border-gray-300"}`}>
      {checked && <span className="w-2 h-2 rounded-full bg-yellow-400" />}
    </span>
  );
}

function Option({ checked, onClick, label, sub }: { checked: boolean; onClick: () => void; label: string; sub?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2.5 text-left border rounded-md px-3 py-3 w-full ${checked ? "border-yellow-400 bg-yellow-50/30" : "border-gray-200"}`}
    >
      <Radio checked={checked} />
      <span>
        <span className="block text-sm text-gray-700">{label}</span>
        {sub && <span className="block text-[11px] text-gray-600 leading-snug">{sub}</span>}
      </span>
    </button>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border rounded-full px-3.5 py-2 text-sm text-gray-700 ${active ? "border-yellow-400 bg-yellow-50" : "border-gray-200"}`}
    >
      {children}
    </button>
  );
}

const toggle = (list: string[], v: string) => (list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

export default function AffiliateApplyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<Form>(initial);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setForm((f) => ({ ...f, [k]: v }));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const emailOk = /^\S+@\S+\.\S+$/.test(form.email) && form.email === form.confirmEmail;
  const valid =
    step === 1 ? form.firstName.trim() !== "" && form.lastName.trim() !== "" && emailOk && form.phone.trim().length > 4 && !!form.country && !!form.role
    : step === 2 ? form.businessTypes.length > 0 && form.networkDescription.trim() !== "" && form.connectMethods.length > 0
    : step === 3 ? form.reason.trim() !== "" && form.interests.length > 0
    : form.confirmed;

  function close() {
    onClose();
    setTimeout(() => { setStep(1); setForm(initial); setDone(false); setSubmitError(""); }, 200);
  }

  async function submit() {
    setSubmitError("");
    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/affiliates/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          country: form.country,
          role: toApi(form.role),
          businessCount: form.networkSize,
          businessTypes: form.businessTypes.map(toApi),
          networkDescription: form.networkDescription.trim(),
          connectionMethods: form.connectMethods.map(toApi),
          facebookHandle: form.facebook.trim() || undefined,
          instagramHandle: form.instagram.trim() || undefined,
          reason: form.reason.trim(),
          programInterests: form.interests.map(toApi),
          hasPreviousReferralExperience: form.referredBefore === "YES",
          experienceDescription:
            form.referredBefore === "YES" ? form.experience.trim() || undefined : undefined,
          confirmedAccuracy: form.confirmed,
        }),
      });
      if (res.status === 409) {
        setSubmitError("An application with this email has already been submitted.");
        return;
      }
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setDone(true);
    } catch {
      setSubmitError("Something went wrong submitting your application. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const summary: [string, [string, string][]][] = [
    ["Tell us about yourself", [
      ["First Name", form.firstName], ["Last Name", form.lastName], ["Email Address", form.email],
      ["Phone Number", form.phone], ["Country", form.country], ["Role", form.role],
    ]],
    ["Tell us about your network", [
      ["Number of Businesses", form.networkSize], ["Business Category", form.businessTypes.join(", ")],
      ["Network Description", form.networkDescription], ["Connection method", form.connectMethods.join(", ")],
    ]],
    ["Why do you want to become a Growth Partner", [
      ["Reason for Applying", form.reason], ["Program Interest", form.interests.join(", ")],
      ["Previous Referral Experience", form.referredBefore],
    ]],
  ];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-600/60 backdrop-blur-sm overflow-y-auto">
      <div
        className="min-h-full flex items-center justify-center p-4"
        onMouseDown={(e) => e.target === e.currentTarget && close()}
      >
        {done ? (
          <div role="dialog" aria-modal="true" className="relative bg-white rounded-xl shadow-2xl w-full max-w-[420px] px-6 py-8 text-center">
            <button onClick={close} aria-label="Close" className="absolute top-5 right-5 text-gray-500 hover:text-gray-800">
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"><path d="M3 3l10 10M13 3L3 13" /></svg>
            </button>
            <svg viewBox="0 0 56 56" className="w-14 h-14 mx-auto" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M28 4l6 4 7-1 3 7 6 4-2 7 2 7-6 4-3 7-7-1-6 4-6-4-7 1-3-7-6-4 2-7-2-7 6-4 3-7 7 1z" />
              <path d="M19 28l6 6 12-12" />
            </svg>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Application submitted!</h2>
            <p className="mt-1 text-sm text-gray-500 leading-relaxed">
              Thanks for your interest in becoming a Flyrinzo Growth Partner. We&apos;ve received your application and our team will review it.
            </p>
            <p className="mt-6 text-left text-sm text-gray-700">WHAT&apos;S NEXT?</p>
            <div className="mt-3 space-y-2.5 text-left">
              {[
                ["01", "Application review", "Our team reviews your application."],
                ["02", "Selection", "If selected, you'll receive an invitation to continue."],
                ["03", "Onboarding", "Complete your onboarding session and learn how Flyrinzo referrals, tracking and rewards work."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex items-center gap-3 border border-gray-200 rounded-md px-3 py-3">
                  <span className="text-yellow-400 text-lg">{n}</span>
                  <div>
                    <p className="text-sm text-gray-800">{t}</p>
                    <p className="text-sm text-gray-500 leading-snug">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-gray-500 leading-relaxed">
              Program rewards are based on qualified paying businesses that meet the applicable program requirements.
            </p>
            <Link href="/" className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-8 py-3 rounded-md transition-colors">
              Back to Flyrinzo
            </Link>
          </div>
        ) : (
          <form
            role="dialog"
            aria-modal="true"
            onSubmit={(e) => {
              e.preventDefault();
              if (!valid || submitting) return;
              if (step < 4) setStep(step + 1);
              else void submit();
            }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-[560px] p-5 sm:p-6"
          >
            <div className="flex items-baseline justify-between gap-3 mb-4">
              <h2 className="text-lg font-bold text-black">{TITLES[step - 1]}</h2>
              <span className="text-xs text-[#6F6C90] whitespace-nowrap">Step {step} of 4</span>
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>First name</label><input className={inputCls} placeholder="First name" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} /></div>
                  <div><label className={labelCls}>Last name</label><input className={inputCls} placeholder="Last name" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} /></div>
                  <div><label className={labelCls}>Email *</label><input type="email" className={inputCls} placeholder="you@company.com" value={form.email} onChange={(e) => set("email", e.target.value)} /></div>
                  <div><label className={labelCls}>Phone number *</label><input type="tel" className={inputCls} placeholder="(234) 5678 578" value={form.phone} onChange={(e) => set("phone", e.target.value)} /></div>
                  <div><label className={labelCls}>Confirm email *</label><input type="email" className={inputCls} placeholder="you@company.com" value={form.confirmEmail} onChange={(e) => set("confirmEmail", e.target.value)} /></div>
                  <div>
                    <label className={labelCls}>Country *</label>
                    <select className={inputCls} value={form.country} onChange={(e) => set("country", e.target.value)}>
                      {COUNTRIES.map((c) => <option key={c.name} value={c.name}>{c.flag} {c.name}</option>)}
                    </select>
                  </div>
                </div>
                {form.confirmEmail && form.email !== form.confirmEmail && <p className="text-xs text-red-500">Emails don&apos;t match.</p>}
                <p className="text-sm text-gray-600 pt-1">What best describes you? *</p>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {ROLES.map((r) => <Option key={r} label={r} checked={form.role === r} onClick={() => set("role", r)} />)}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <p className="text-sm text-gray-600">How many small businesses do you currently have a relationship with?*</p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {NETWORK_SIZES.map((s) => <Option key={s} label={s} checked={form.networkSize === s} onClick={() => set("networkSize", s)} />)}
                </div>
                <div className="flex justify-between text-sm text-gray-600"><span>What types of businesses are you connected with?*</span><span className="text-xs">Select all that apply.</span></div>
                <div className="flex flex-wrap gap-2.5">
                  {BUSINESS_TYPES.map((t) => <Chip key={t} active={form.businessTypes.includes(t)} onClick={() => set("businessTypes", toggle(form.businessTypes, t))}>{t}</Chip>)}
                </div>
                <div>
                  <label className={labelCls}>Tell us a little about your network.*</label>
                  <textarea rows={4} className={inputCls} value={form.networkDescription} onChange={(e) => set("networkDescription", e.target.value)} />
                </div>
                <div className="flex justify-between text-sm text-gray-600"><span>How do you typically connect with businesses?*</span><span className="text-xs">Select all that apply.</span></div>
                <div className="flex flex-wrap gap-2.5">
                  {CONNECT_METHODS.map((t) => <Chip key={t} active={form.connectMethods.includes(t)} onClick={() => set("connectMethods", toggle(form.connectMethods, t))}>{t}</Chip>)}
                </div>
                <div className="flex justify-between text-sm text-gray-600"><span>Social media handle</span><span className="text-xs">Select all that apply.</span></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className={labelCls}>Facebook</label><input className={inputCls} placeholder="Useflyrinzo" value={form.facebook} onChange={(e) => set("facebook", e.target.value)} /></div>
                  <div><label className={labelCls}>Instagram</label><input className={inputCls} placeholder="Flyhq" value={form.instagram} onChange={(e) => set("instagram", e.target.value)} /></div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <label className={labelCls}>Why do you want to become a Flyrinzo Growth Partner?*</label>
                  <textarea rows={5} className={inputCls} value={form.reason} onChange={(e) => set("reason", e.target.value)} />
                </div>
                <div className="flex justify-between text-sm text-gray-600"><span>What interests you most about the Growth Partner Program?*</span><span className="text-xs">Select all that apply.</span></div>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {INTERESTS.map((i) => (
                    <Option key={i.label} label={i.label} sub={i.sub} checked={form.interests.includes(i.label)} onClick={() => set("interests", toggle(form.interests, i.label))} />
                  ))}
                </div>
                <p className="text-sm text-gray-600">Have you previously promoted or referred a product or service to businesses?*</p>
                <div className="space-y-2">
                  {(["YES", "NO"] as const).map((v) => (
                    <button key={v} type="button" onClick={() => set("referredBefore", v)} className="flex items-center gap-2 text-base text-gray-700">
                      <Radio checked={form.referredBefore === v} /> {v}
                    </button>
                  ))}
                </div>
                {form.referredBefore === "YES" && (
                  <div>
                    <div className="flex justify-between"><label className={labelCls}>Tell us briefly about your experience.</label><span className="text-xs text-gray-500">Optional</span></div>
                    <textarea rows={5} className={inputCls} value={form.experience} onChange={(e) => set("experience", e.target.value)} />
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                {summary.map(([title, rows], i) => (
                  <div key={title}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-black">{title}</h3>
                      <button type="button" onClick={() => setStep(i + 1)} className="flex items-center gap-1.5 text-xs text-[#6F6C90]">
                        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 3l3 3-7 7H3v-3zM2 14h12" /></svg>
                        Edit
                      </button>
                    </div>
                    <dl className="space-y-1.5">
                      {rows.map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-6 text-sm">
                          <dt className="text-[#6F6C90]">{k}</dt>
                          <dd className="text-gray-900 text-right">{v || "---"}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
                <button type="button" onClick={() => set("confirmed", !form.confirmed)} className="flex items-start gap-2.5 text-left text-xs text-[#6F6C90] leading-snug">
                  <span className="mt-0.5"><Radio checked={form.confirmed} /></span>
                  I confirm that the information I&apos;ve provided is accurate and that I am interested in becoming a Flyrinzo Growth Partner.
                </button>
              </div>
            )}

            {submitError && step === 4 && <p className="mt-4 text-sm text-red-500">{submitError}</p>}

            <div className={`mt-6 flex items-center ${step > 1 ? "justify-between" : "justify-end"}`}>
              {step > 1 && (
                <button type="button" onClick={() => setStep(step - 1)} className="bg-[#6F6C90] hover:bg-[#5f5c7e] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
                  Back
                </button>
              )}
              <button type="submit" disabled={!valid || submitting} className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm px-8 py-3 rounded-md transition-colors">
                {step === 4 ? (submitting ? "Submitting..." : "Submit") : "Continue"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
