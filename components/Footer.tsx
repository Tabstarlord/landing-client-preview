"use client";

import { useEffect, useState } from "react";
import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";

const navLinks = ["Features", "Privacy Policy", "Terms of Use", "Data Deletion"];

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
          <div className="max-w-sm w-full">
            <div className="mb-5">
              <FlyrinzoLogo />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed text-justify mb-8">
              We&apos;re not just building tools we&apos;re creating a smarter way for small businesses
              to grow, connect, and succeed. Join us, and let&apos;s create the future together.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-800 font-medium hover:text-gray-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right: newsletter + scroll-top + social */}
          <div className="flex flex-col items-start lg:items-end gap-5">
            {/* Newsletter */}
            <div className="w-full lg:w-auto">
              <p className="text-sm font-semibold text-gray-900 mb-3">Stay up to date</p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 lg:w-56 min-w-0 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-yellow-400"
                />
                <button className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Facebook" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-yellow-400 hover:text-yellow-500 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-yellow-400 hover:text-yellow-500 transition-colors">
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
        <p className="text-xs text-gray-400">© 2025 Flyrinzo. All rights reserved.</p>
        <p className="text-xs text-gray-400">Flyrinzo is a Brainleads Group company</p>
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
