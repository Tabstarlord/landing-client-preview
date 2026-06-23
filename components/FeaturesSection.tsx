const features = [
  "AI Content Suggestions",
  "Multi-Platform Scheduling",
  "Analytics Dashboard",
  "Team Collaboration",
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <span className="text-xs font-medium text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5H12L8.25 7.25L9.75 12L6 9.25L2.25 12L3.75 7.25L0 4.5H4.5L6 0Z" />
            </svg>
            Features
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: App Screenshots */}
          <div className="space-y-3">
            {/* Main post card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-gray-900">
                  F
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Flyrinzo</div>
                  <div className="text-xs text-gray-400">2 hours ago</div>
                </div>
                <div className="ml-auto flex gap-1">
                  {["IG", "TW", "FB"].map((p) => (
                    <span key={p} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-yellow-50 rounded-xl h-24 flex items-center justify-center text-yellow-200 mb-3">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
              <p className="text-xs text-gray-600">
                Boost your social media presence with AI-powered content suggestions…
              </p>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl shadow border border-gray-100 p-3">
                <div className="text-xs text-gray-400 mb-1">Total Reach</div>
                <div className="font-bold text-gray-900 text-lg">128.4K</div>
                <div className="text-xs text-green-500">↑ 24% this week</div>
              </div>
              <div className="bg-white rounded-xl shadow border border-gray-100 p-3">
                <div className="text-xs text-gray-400 mb-1">Engagement</div>
                <div className="font-bold text-gray-900 text-lg">8.2%</div>
                <div className="text-xs text-green-500">↑ 5% vs last week</div>
              </div>
            </div>

            {/* Scheduled post row */}
            <div className="bg-white rounded-xl shadow border border-gray-100 p-3">
              <div className="text-xs font-semibold text-gray-700 mb-2">Upcoming Posts</div>
              {["9:00 AM — Instagram reel", "12:30 PM — Twitter thread", "6:00 PM — LinkedIn update"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  <span className="text-xs text-gray-500">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Everything you need to{" "}
              <span className="italic text-yellow-500">manage</span> right in your pocket.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Schedule posts, analyze performance, and grow your audience across all major social media
              platforms — all from one powerful dashboard.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-yellow-600" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 6l3 3 5-5" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
