"use client";

import { useState } from "react";
import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Anchors are rooted at "/" so they also work from other pages.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Why Flyrinzo", href: "/#why" },
  { label: "How Flyrinzo works", href: "/#how" },
  { label: "Earn", href: "/affiliate" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const links = navLinks.map((link) => ({
    ...link,
    active: link.href === pathname,
  }));

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <FlyrinzoLogo className="flex-shrink-0" />

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  item.active
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>


          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="https://app.flyrinzo.com"
              className="hidden md:inline-flex flex-shrink-0 bg-white rounded-[6px] border border-yellow-400 hover:bg-yellow-50 text-yellow-500 font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              Login
            </a>
            <Link
              href="/contact-us"
              className="hidden md:inline-flex flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 rounded-[6px] text-white font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              Start for C$0.99
            </Link>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-gray-900 transition-transform duration-200 ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full inset-x-0 bg-white border-t border-gray-100 shadow-lg px-6 py-4 flex flex-col gap-4 origin-top transition-all duration-300 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 -translate-y-2 invisible pointer-events-none"
        }`}
      >
        {links.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`text-sm py-1 ${
              item.active
                ? "text-gray-900 font-medium"
                : "text-gray-500"
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href="https://app.flyrinzo.com/login"
          onClick={() => setOpen(false)}
          className="text-center bg-white rounded-[6px] border border-yellow-400 hover:bg-yellow-50 text-yellow-500 font-semibold text-sm px-5 py-2.5 transition-colors"
        >
          Login
        </a>
        <Link
          href="/contact-us"
          onClick={() => setOpen(false)}
          className="text-center bg-yellow-400 hover:bg-yellow-500 rounded-[6px] text-white font-semibold text-sm px-5 py-2.5 transition-colors"
        >
          Start for C$0.99
        </Link>
      </div>
    </header>
  );
}
