"use client";

import { useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "https://flyrinzo-api-server-1.onrender.com/api";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || status === "submitting") return;

    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE_URL}/newsletter/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="w-full lg:w-auto">
      <p className="text-sm font-semibold text-gray-900 mb-3">Stay up to date</p>
      <form onSubmit={handleSubscribe} className="flex items-center gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="Enter your email"
          required
          className="flex-1 lg:w-56 min-w-0 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap"
        >
          {status === "submitting" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
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
      {status === "success" && (
        <p className="text-xs text-green-600 mt-2">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="text-xs text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
