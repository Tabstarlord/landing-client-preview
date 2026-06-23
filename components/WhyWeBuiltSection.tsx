const pillars = [
  {
    title: "Data-Driven Decisions",
    description:
      "Stop guessing what works. Our AI analyzes your best-performing content to suggest what to post next.",
  },
  {
    title: "Time Efficiency",
    description:
      "Batch-create weeks of content in minutes. Let AI handle the heavy lifting while you focus on your business.",
  },
  {
    title: "Real Growth",
    description:
      "Grow your followers, increase engagement, and convert your audience into paying customers.",
  },
];

export default function WhyWeBuiltSection() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Brand Card Mockup */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white min-h-80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3C9 9 7 13 10 18C11.5 20.5 13 22 14 22C15 22 16.5 20.5 18 18C21 13 19 9 14 3Z" fill="#22C55E" />
                  <path d="M14 3C19 9 21 13 18 18C16.5 20.5 15 22 14 22L14 3Z" fill="#86EFAC" />
                </svg>
                <span className="font-bold text-lg">flyrinzo</span>
              </div>
              <div className="space-y-2 mb-4">
                <div className="h-2 bg-white/20 rounded-full w-3/4" />
                <div className="h-2 bg-white/20 rounded-full w-1/2" />
                <div className="h-2 bg-yellow-400/70 rounded-full w-2/3" />
              </div>
              {/* Mini bar chart */}
              <div className="flex items-end gap-1.5 h-16 mt-4">
                {[50, 70, 40, 85, 60, 90, 65].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background: i === 5 ? "#FACC15" : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-xs text-white/50 mb-1">Posts Scheduled</div>
                <div className="text-white font-bold text-xl">2,847</div>
              </div>
              <div className="bg-yellow-400 rounded-xl p-3">
                <div className="text-xs text-gray-800 mb-1">Growth Rate</div>
                <div className="text-gray-900 font-bold text-xl">+34%</div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 inline-block mb-6">
              Why We Built Flyrinzo
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              We Built Flyrinzo for{" "}
              <span className="italic text-yellow-500">Entrepreneurs</span>{" "}
              Who Refuse to Guess
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Every small business owner deserves the same analytics and AI tools that enterprise brands use.
              We built Flyrinzo to level the playing field.
            </p>
            <div className="space-y-6">
              {pillars.map((p) => (
                <div key={p.title} className="border-l-2 border-yellow-400 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
