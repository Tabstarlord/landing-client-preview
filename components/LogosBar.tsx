const logos = [
  { name: "Layers", className: "font-bold tracking-tight" },
  { name: "The Washington Post", className: "font-serif text-sm" },
  { name: "amazon", className: "font-bold" },
  { name: "Loomly", className: "font-semibold" },
  { name: "flyrinzo", className: "font-bold" },
  { name: "SIERC", className: "font-bold tracking-widest text-xs" },
];

export default function LogosBar() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">
          Over 10,000 users have published more than 10,000 posts with Flyrinzo
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
          {logos.map((logo) => (
            <span key={logo.name} className={`text-gray-400 ${logo.className}`}>
              {logo.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
