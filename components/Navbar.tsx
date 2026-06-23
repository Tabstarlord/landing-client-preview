"use client";

import { useState } from "react";
import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Features", href: "#features", active: false },
  { label: "Why Flyrinzo", href: "#why", active: false },
  { label: "How Flyrinzo works", href: "#how", active: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <FlyrinzoLogo className="flex-shrink-0" />

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  item.active
                    ? "text-gray-900 font-medium"
                    : "text-gray-500 hover:text-gray-800"
                }`}
                style={
                  item.active
                    ? {
                        textDecoration: "underline",
                        textDecorationColor: "#FBBF24",
                        textDecorationThickness: "2px",
                        textUnderlineOffset: "4px",
                      }
                    : {}
                }
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* CTA */}
            <a
              href="#"
              className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              Get Started
            </a>

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
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
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
        </div>
      )}
    </header>
  );
}
