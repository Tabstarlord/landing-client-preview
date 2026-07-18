"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Footer from "@/components/Footer";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://flyrinzo-api-server-1.onrender.com/api";

const TOTAL_STEPS = 4;

const STEP_TITLES: Record<number, string> = {
  1: "Get Your Free Insights",
  2: "Get Your Free Insights",
  3: "Enter your contact details",
  4: "Tell us more about you",
};

const AVATAR_COLORS = ["#F87171", "#1F2937", "#A78BFA", "#FBBF24", "#F472B6"];

const INTEREST_OPTIONS = [
  "Content Direction (What to Post)",
  "Social Media management",
  "Influencer Marketing",
  "Not Sure",
];

type CountryOption = { name: string; code: string; flag: string; dial: string };

const FALLBACK_COUNTRIES: CountryOption[] = [
  { name: "Canada", code: "CA", flag: "🇨🇦", dial: "+1" },
  { name: "United States", code: "US", flag: "🇺🇸", dial: "+1" },
  { name: "United Kingdom", code: "GB", flag: "🇬🇧", dial: "+44" },
  { name: "Nigeria", code: "NG", flag: "🇳🇬", dial: "+234" },
  { name: "Australia", code: "AU", flag: "🇦🇺", dial: "+61" },
];

type ApiCountry = {
  name: string;
  iso2: string;
  emoji: string;
  phoneCode: string;
};

async function fetchAllCountries(): Promise<CountryOption[]> {
  const perPage = 100;
  let page = 1;
  let pages = 1;
  const countries: CountryOption[] = [];

  do {
    const res = await fetch(`${API_BASE_URL}/location/countries?page=${page}&perPage=${perPage}`);
    if (!res.ok) throw new Error(`Failed to load countries (${res.status})`);
    const json: { data: { result: ApiCountry[]; metadata: { pages: number } } } = await res.json();
    countries.push(
      ...json.data.result.map((c) => ({
        name: c.name,
        code: c.iso2,
        flag: c.emoji,
        dial: c.phoneCode ? `+${c.phoneCode.split("-")[0]}` : "",
      })),
    );
    pages = json.data.metadata.pages;
    page += 1;
  } while (page <= pages);

  return countries;
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none">
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ContactUs() {
  return (
    <Suspense fallback={null}>
      <ContactUsForm />
    </Suspense>
  );
}

function ContactUsForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    const prefillEmail = searchParams.get("email");
    if (prefillEmail && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(prefillEmail)) {
      setEmail(prefillEmail);
      setStep(2);
    } else if (prefillEmail) {
      setEmail(prefillEmail);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [interests, setInterests] = useState<string[]>([]);
  const [interestError, setInterestError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("CA");
  const [phone, setPhone] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const [detailErrors, setDetailErrors] = useState<Record<string, boolean>>({});
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [additionalInfoError, setAdditionalInfoError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [countries, setCountries] = useState<CountryOption[]>(FALLBACK_COUNTRIES);

  useEffect(() => {
    let cancelled = false;
    fetchAllCountries()
      .then((list) => {
        if (!cancelled && list.length > 0) setCountries(list);
      })
      .catch(() => {
        // keep the fallback list if the API is unreachable
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const selectedCountry = countries.find((c) => c.code === countryCode) ?? countries[0];

  function toggleInterest(option: string) {
    setInterests((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option]
    );
    setInterestError("");
  }

  function handleStep1Submit() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError("");
    setStep(2);
  }

  function handleStep2Next() {
    if (interests.length === 0) {
      setInterestError("Please select at least one option.");
      return;
    }
    setStep(3);
  }

  function handleStep3Next() {
    const errors: Record<string, boolean> = {};
    if (!firstName.trim()) errors.firstName = true;
    if (!lastName.trim()) errors.lastName = true;
    if (!companyName.trim()) errors.companyName = true;
    if (!phone.trim()) errors.phone = true;
    setDetailErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setStep(4);
  }

  async function handleStep4Submit() {
    if (!additionalInfo.trim()) {
      setAdditionalInfoError(true);
      return;
    }
    setAdditionalInfoError(false);

    setSubmitError("");
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interests,
          firstName,
          lastName,
          companyName,
          countryCode,
          phone,
          marketingOptIn,
          additionalInfo,
        }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setShowSuccessModal(true);
    } catch {
      setSubmitError("Something went wrong submitting your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className={showSuccessModal ? "blur-sm" : undefined}>
      <main className="bg-[#374151]">
        <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
            {/* Left: heading + copy */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
                Get Free AI-Powered
                <br />
                <span style={{ color: "#FBBF24" }}>Insights</span>
              </h1>
              <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-md">
                Curious how Flyrinzo can help you create smarter content and grow faster?
              </p>
              <p className="mt-6 text-white/90 text-lg leading-relaxed max-w-md">
                Explore the full power of our AI-driven platform with a personalized walkthrough.
              </p>
            </div>

            {/* Right: multi-step card */}
            <div className="w-full max-w-md lg:ml-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-2xl font-bold text-black">{STEP_TITLES[step]}</h2>
                  <span className="text-sm font-medium whitespace-nowrap" style={{ color: "#6F6C90" }}>
                    Step {step} of {TOTAL_STEPS}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-5 h-2 w-full rounded-full overflow-hidden" style={{ backgroundColor: "#F4F1EC" }}>
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${(step / TOTAL_STEPS) * 100}%`, backgroundColor: "#FBBF24" }}
                  />
                </div>

                {/* Step 1 */}
                {step === 1 && (
                  <>
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email Address"
                        className="flex-1 min-w-0 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                      />
                      <button
                        type="button"
                        onClick={handleStep1Submit}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg text-sm whitespace-nowrap transition-colors"
                      >
                        Get Free Insights
                      </button>
                    </div>
                    {emailError && <p className="mt-2 text-xs text-red-500">{emailError}</p>}
                  </>
                )}

                {/* Step 2 */}
                {step === 2 && (
                  <>
                    <p className="mt-6 text-sm" style={{ color: "#6F6C90" }}>
                      What solution are you interested in?
                    </p>
                    <div className="mt-4 flex flex-col items-start gap-3">
                      {INTEREST_OPTIONS.map((option) => {
                        const selected = interests.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleInterest(option)}
                            className={`text-left px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                              selected ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                            }`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-sm" style={{ color: "#6F6C90" }}>
                      You can choose more than one.
                    </p>
                    <p className="text-sm" style={{ color: "#6F6C90" }}>
                      <span className="text-red-500">*</span> Indicates a required field
                    </p>
                    {interestError && <p className="mt-2 text-xs text-red-500">{interestError}</p>}

                    <hr className="mt-6 border-gray-200" />
                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        &larr; Back
                      </button>
                      <button
                        type="button"
                        onClick={handleStep2Next}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg text-sm transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {/* Step 3 */}
                {step === 3 && (
                  <>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                          First name
                        </label>
                        <input
                          id="firstName"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="First name"
                          className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 ${
                            detailErrors.firstName ? "border-red-400" : "border-gray-300"
                          }`}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Last name"
                          className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 ${
                            detailErrors.lastName ? "border-red-400" : "border-gray-300"
                          }`}
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="companyName" className="block text-sm font-medium text-black mb-2">
                        Company Name
                      </label>
                      <input
                        id="companyName"
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="you@company.com"
                        className={`w-full border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 ${
                          detailErrors.companyName ? "border-red-400" : "border-gray-300"
                        }`}
                      />
                    </div>

                    <div className="mt-5">
                      <label htmlFor="country" className="block text-sm font-medium text-black mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center gap-1.5">
                          <span className="text-lg leading-none">{selectedCountry.flag}</span>
                          <ChevronDown className="w-3 h-3 text-gray-500" />
                        </div>
                        <select
                          id="country"
                          value={countryCode}
                          onChange={(e) => setCountryCode(e.target.value)}
                          className="w-full appearance-none border border-gray-300 rounded-lg pl-16 pr-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-gray-500 bg-white"
                        >
                          {countries.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                        Phone Number
                      </label>
                      <div
                        className={`flex items-center border rounded-lg focus-within:border-gray-500 ${
                          detailErrors.phone ? "border-red-400" : "border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-1.5 pl-4">
                          <span className="text-lg leading-none">{selectedCountry.flag}</span>
                          <ChevronDown className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className="pl-2 text-sm text-gray-700">{selectedCountry.dial}</span>
                        <input
                          id="phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(234) 5678 578"
                          className="flex-1 min-w-0 pl-2 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent rounded-r-lg"
                        />
                      </div>
                    </div>

                    <label className="mt-5 flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={marketingOptIn}
                        onChange={(e) => setMarketingOptIn(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-yellow-400"
                      />
                      <span className="text-sm text-gray-700">You agree to receiving marketing update from us.</span>
                    </label>

                    <p className="mt-4 text-sm" style={{ color: "#6F6C90" }}>
                      <span className="text-red-500">*</span> Indicates a required field
                    </p>

                    <hr className="mt-6 border-gray-200" />
                    <div className="mt-6 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-sm font-medium text-gray-500 hover:text-gray-700"
                      >
                        &larr; Back
                      </button>
                      <button
                        type="button"
                        onClick={handleStep3Next}
                        className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg text-sm transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}

                {/* Step 4 */}
                {step === 4 && (
                  <>
                    <div className="mt-6">
                      <label htmlFor="additionalInfo" className="block text-sm font-medium text-black mb-2">
                        Please provide additional information you&apos;d like us to know before the meeting.{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="additionalInfo"
                        value={additionalInfo}
                        onChange={(e) => {
                          setAdditionalInfo(e.target.value);
                          if (additionalInfoError) setAdditionalInfoError(false);
                        }}
                        rows={6}
                        className={`w-full resize-none border rounded-lg px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 ${
                          additionalInfoError ? "border-red-400" : "border-gray-300"
                        }`}
                      />
                    </div>

                    <p className="mt-4 text-sm" style={{ color: "#6F6C90" }}>
                      <span className="text-red-500">*</span> Indicates a required field
                    </p>
                    {submitError && <p className="mt-2 text-xs text-red-500">{submitError}</p>}

                    <hr className="mt-6 border-gray-200" />
                    <button
                      type="button"
                      onClick={handleStep4Submit}
                      disabled={isSubmitting}
                      className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed text-black font-semibold px-8 py-3 rounded-lg text-sm transition-colors"
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                  </>
                )}

                {/* Fine print */}
                <p className="mt-6 text-xs leading-relaxed" style={{ color: "#6F6C90" }}>
                  By submitting this form you agree to Flyrinzo&apos;s{" "}
                  <a href="/terms" className="hover:underline">
                    terms of use
                  </a>{" "}
                  and user{" "}
                  <a href="/privacy" className="hover:underline">
                    privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      </div>

      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setShowSuccessModal(false);
                router.push("/");
              }}
              aria-label="Close"
              className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>

            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#FEF3C7" }}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: "#FBBF24" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <h3 className="mt-6 text-3xl font-bold leading-tight text-black">
              You&apos;re In! Your <span style={{ color: "#FBBF24" }}>Smart Marketing</span> Journey Starts Now.
            </h3>

            <p className="mt-4 text-sm leading-relaxed" style={{ color: "#6F6C90" }}>
              We&apos;re preparing your first Flyrinzo insights. You&apos;ll receive an email shortly with your next
              steps.
            </p>

            <div className="mt-6 flex justify-center -space-x-3">
              {AVATAR_COLORS.map((color, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
              ))}
            </div>

            <p className="mt-4 text-sm" style={{ color: "#6F6C90" }}>
              You&apos;re not alone{" "}
              <span className="font-semibold" style={{ color: "#FBBF24" }}>
                9,000+ entrepreneurs
              </span>{" "}
              are growing with Flyrinzo.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
