"use client";

import { useEffect, useState } from "react";
import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";
import NewsletterSection from "@/components/NewsletterSection";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Ambassadors", href: "/ambassador" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Data Deletion", href: "/data-deletion" },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-14 pb-10">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-12">

          {/* Left: logo + description + links */}
          <div className=" w-full">
            <div className="mb-5">
              <FlyrinzoLogo />
            </div>
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed text-justify mb-3">
              We&apos;re not just building tools we&apos;re creating a smarter way for small businesses
              to grow, connect, and succeed. Join us, and let&apos;s create the future together.
            </p>
            <div className="flex flex-col lg:flex-row items-start gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-gray-500 font-regular  hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: newsletter + scroll-top + social */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            {/* Newsletter */}
            <NewsletterSection />

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/share/1DKmgQi8Rz/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://www.tiktok.com/@getflyrinzo" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.6 5.82c-1.01-.87-1.63-2.14-1.63-3.55h-3.28v13.6c0 1.6-1.3 2.9-2.9 2.9s-2.9-1.3-2.9-2.9 1.3-2.9 2.9-2.9c.29 0 .57.04.83.12v-3.34a6.24 6.24 0 00-.83-.06 6.2 6.2 0 100 12.4c3.42 0 6.2-2.78 6.2-6.2v-6.5a8.16 8.16 0 004.83 1.57V7.71a4.83 4.83 0 01-3.22-1.89z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/useflyrinzo?igsh=cWRpcjkyajVqZXJr&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <hr className="border-gray-200" />
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-400">Flyrinzo is a Brainleads Group company</p>
        <p className="text-xs text-gray-400">© 2025 Flyrinzo. All rights reserved.</p>
      </div>
    </footer>

      {/* Floating back-to-top button */}
      <button
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 bg-white border border-gray-200 rounded-xl shadow-lg flex items-center justify-center text-gray-600 hover:border-gray-400 hover:text-gray-900 hover:shadow-xl transition-all duration-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
