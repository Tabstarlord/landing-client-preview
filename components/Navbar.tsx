import { FlyrinzoLogo } from "@/components/FlyrinzoLogo";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Features", href: "#features", active: false },
  { label: "Why Flyrinzo", href: "#why", active: false },
  { label: "How Flyrinzo works", href: "#how", active: false },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <FlyrinzoLogo className="flex-shrink-0" />

          {/* Nav links — centered */}
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

          {/* CTA */}
          <a
            href="#"
            className="flex-shrink-0 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
