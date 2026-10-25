"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePricing } from "@/components/pricing/usePricing";

const angularButtonStyle = {
  "--angular-border": "#FACC15",
  "--angular-fill": "#FFFFFF",
  "--angular-hover-fill": "#FEFCE8",
  clipPath:
    "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
} as const;

const angularCtaStyle = {
  "--angular-border": "#EAB308",
  "--angular-fill": "#FACC15",
  "--angular-hover-fill": "#EAB308",
  clipPath: angularButtonStyle.clipPath,
} as const;



// Anchors are rooted at "/" so they also work from other pages.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Why Flyrinzo", href: "/#why" },
  { label: "How Flyrinzo works", href: "/#how" },
  { label: "Earn", href: "/affiliate" },
  { label: "Pricing", href: "/pricing" },
];

const navAccentColors = [
  "#FBBF24", // amber
  "#EAB308", // yellow
  "#F59E0B", // orange
  "#8B5CF6", // violet
  "#6366F1", // indigo
  "#4F46E5", // blue-violet
];

const sectionDots = [
  { id: "hero", label: "Home", color: "#FBBF24" },
  { id: "solutions", label: "Solutions", color: "#F97316" },
  { id: "why", label: "Why Flyrinzo", color: "#10B981" },
  { id: "how", label: "How Flyrinzo works", color: "#8B5CF6" },
  { id: "mobile-app", label: "Mobile app", color: "#6366F1" },
];

const sectionPositions = [9.5, 29.75, 50, 70.25, 90.5];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [vehiclePosition, setVehiclePosition] = useState(sectionPositions[0]);
  const { pricing } = usePricing();
  const cta = pricing ? `Start for ${pricing.intro.formatted}` : "Get Started";
  const pathname = usePathname().replace(/\/$/, "") || "/";
  const isLandingPage = pathname === "/";
  const links = navLinks.map((link) => ({
    ...link,
    active: link.href === pathname,
  }));

  useEffect(() => {
    if (!isLandingPage) return;

    const sections = sectionDots
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    let animationFrame = 0;

    const updateVehiclePosition = () => {
      // Map the page scroll range across the dots, so progress continues
      // smoothly through the last section and reaches the final marker at the bottom.
      const markerY = window.scrollY + window.innerHeight * 0.45;
      const sectionTops = sections.map(
        (section) => section.getBoundingClientRect().top + window.scrollY,
      );

      if (markerY <= sectionTops[0]) {
        setVehiclePosition(sectionPositions[0]);
        return;
      }

      const lastIndex = sectionTops.length - 1;
      const pageEnd = document.documentElement.scrollHeight;
      if (markerY >= pageEnd - window.innerHeight * 0.5) {
        setVehiclePosition(sectionPositions[lastIndex]);
        return;
      }

      const nextIndex = sectionTops.findIndex((top) => top > markerY);
      const currentIndex = Math.max(0, nextIndex - 1);
      const sectionSpan = sectionTops[nextIndex] - sectionTops[currentIndex];
      const sectionProgress = sectionSpan > 0
        ? (markerY - sectionTops[currentIndex]) / sectionSpan
        : 0;
      const position =
        sectionPositions[currentIndex] +
        (sectionPositions[nextIndex] - sectionPositions[currentIndex]) *
          Math.min(1, Math.max(0, sectionProgress));

      setVehiclePosition(position);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateVehiclePosition);
    };

    updateVehiclePosition();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isLandingPage]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center h-20 max-[1180px]:h-auto max-[1180px]:grid-rows-[64px_auto] max-[1180px]:gap-y-2">
          {/* Logo */}
          <FlyrinzoLogo className="flex-shrink-0" />

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex items-center gap-4 justify-self-center max-[1180px]:col-span-3 max-[1180px]:row-start-2 max-[1180px]:pb-3">
            {links.map((item, index) => (
              <div
                key={item.label}
                className="nav-link-item flex items-center gap-2"
              >
                <span
                  className={`nav-link-separator${
                    item.active ? " nav-link-separator--active" : ""
                  }`}
                  style={
                    {
                      "--nav-accent": item.active
                        ? "#111827"
                        : navAccentColors[index],
                    } as CSSProperties
                  }
                >
                  {index > 0 && <span className="nav-link-separator__line" />}
                  <svg
                    className="nav-link-separator__hex"
                    viewBox="0 0 10 12"
                    aria-hidden="true"
                  >
                    <polygon points="5,0.75 9.25,3.25 9.25,8.75 5,11.25 0.75,8.75 0.75,3.25" />
                  </svg>
                </span>

                <a
                  href={item.href}
                  style={{
                    textShadow:
                      "0 1px 0 rgba(255, 255, 255, 0.9), 0 2px 3px rgba(17, 24, 39, 0.12)",
                  }}
                  className={`nav-link-label text-sm transition-colors ${
                    item.active
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3 justify-self-end max-[1180px]:col-start-3 max-[1180px]:row-start-1">
            {/* CTA */}
            <a
              href="https://app.flyrinzo.com"
              style={angularButtonStyle}
              className="navbar-angular-button hidden md:inline-flex flex-shrink-0 bg-white  hover:bg-yellow-50 text-yellow-500 font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              <span>Login</span>
            </a>
            <Link
              href="/contact-us"
              style={angularCtaStyle}
              className="navbar-angular-button hidden md:inline-flex flex-shrink-0  bg-yellow-400 hover:bg-yellow-500 text-white font-semibold text-sm px-5 py-2.5 transition-colors"
            >
              <span>{cta}</span>
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

      {/* Section progress rail — landing page only */}
      {isLandingPage && (
        <div className="section-progress-rail" aria-hidden="true">
          <div className="section-progress-rail__line" aria-hidden="true" />
          <div
            className="section-progress-logo-marker"
            style={
              {
                "--vehicle-position": `${vehiclePosition}%`,
              } as CSSProperties
            }
          >
            <Image
              src="/logo.png"
              alt=""
              width={24}
              height={24}
              className="section-progress-logo"
            />
          </div>
          <div className="section-progress-rail__dots">
            {sectionDots.map((section) => {
              return (
                <span
                  key={section.id}
                  className="section-progress-dot"
                  style={{ "--section-color": section.color } as CSSProperties}
                >
                  <span className="section-progress-dot__core" />
                </span>
              );
            })}
          </div>
        </div>
      )}

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
          style={angularButtonStyle}
          className="navbar-angular-button text-center bg-white rounded-[6px] border border-yellow-400 hover:bg-yellow-50 text-yellow-500 font-semibold text-sm px-5 py-2.5 transition-colors"
        >
          <span>Login</span>
        </a>
        <Link
          href="/contact-us"
          onClick={() => setOpen(false)}
          style={angularCtaStyle}
          className="navbar-angular-button text-center bg-yellow-400 hover:bg-yellow-500 rounded-[6px] text-white font-semibold text-sm px-5 py-2.5 transition-colors"
        >
          <span>{cta}</span>
        </Link>
      </div>
    </header>
  );
}
