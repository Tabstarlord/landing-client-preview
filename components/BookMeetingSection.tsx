const analyticsStats = [
  { label: "Reach", value: "45.2K", up: true },
  { label: "Likes", value: "3,821", up: true },
  { label: "Shares", value: "942", up: false },
];

const miniChartHeights = [40, 65, 45, 80, 60, 90, 70];

export default function BookMeetingSection() {
  return (
    <section className="py-24 bg-yellow-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Book a Meeting to Get Free Insights
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-8">
              Get a personalized walkthrough of how Flyrinzo can 10x your social media growth. Our experts
              will analyze your current strategy and show you exactly what to improve.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
            >
              Book Free Meeting
            </a>
          </div>

          {/* Right: Dashboard Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6">
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-sm text-gray-900">
                F
              </div>
              <div>
                <div className="font-semibold text-gray-900 text-sm">Hello, Branom! 👋</div>
                <div className="text-xs text-gray-400">Flyrinzo AI Assistant</div>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-xs text-gray-400">Online</span>
              </div>
            </div>

            {/* Analytics panel */}
            <div className="bg-gray-50 rounded-2xl p-4 mb-4">
              <div className="text-xs text-gray-500 mb-3 font-medium">Analytics Overview</div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {analyticsStats.map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-2 text-center shadow-sm">
                    <div className="text-xs font-bold text-gray-900">{s.value}</div>
                    <div className="text-xs text-gray-400">{s.label}</div>
                    <div className={`text-xs font-semibold ${s.up ? "text-green-500" : "text-red-400"}`}>
                      {s.up ? "↑" : "↓"}
                    </div>
                  </div>
                ))}
              </div>
              {/* Mini chart */}
              <div className="flex items-end gap-1 h-10">
                {miniChartHeights.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-yellow-400 rounded-t"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>

            {/* AI tip */}
            <div className="text-xs text-gray-600 bg-gray-50 rounded-xl px-3 py-2.5 flex items-start gap-2">
              <span className="text-base leading-none">💡</span>
              <span>
                Based on your data, posting Tuesday at 9AM increases reach by 34%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
