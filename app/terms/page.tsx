"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfUse() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <path fill="white" d="M12 6v8h4" />
            </svg>
            <span className="text-yellow-600 font-medium">Terms of Use</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#000000' }}>
            Our Terms of Use
          </h1>

          <p className="text-center mb-8" style={{ color: '#6F6C90' }}>
            Read our Terms below to learn more about your rights and responsibilities as a Flyrinzo user.
          </p>

          <div className="space-y-2 text-sm" style={{ color: '#6F6C90' }}>
            <p><span className="font-semibold">Effective Date:</span> January 19, 2026</p>
            <p><span className="font-semibold">Company:</span> Brainleads Group Inc.</p>
            <p><span className="font-semibold">Website:</span> www.flyrinzo.com</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 pb-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Acceptance */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Acceptance</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                By accessing or using Flyrinzo, you agree to be bound by these Terms of Use and our Privacy
                Policy. If you disagree with any part, please discontinue use immediately.
              </p>
            </div>

            {/* Service Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Service Overview</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                Flyrinzo is an AI-powered community, analytics, and scheduling platform designed to help
                entrepreneurs and small businesses grow, connect, and manage digital marketing efficiently.
              </p>
            </div>

            {/* Users Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Users Responsibilities</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>You agree to:</p>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide accurate information during registration;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Keep login credentials confidential;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Use Flyrinzo only for lawful business purposes;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Not misuse, copy, or reverse-engineer the platform.</span>
                </li>
              </ul>
            </div>

            {/* Content Ownership */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Content Ownership</h2>
              <p className="leading-relaxed mb-2" style={{ color: '#6F6C90' }}>
                All user-generated content remains your property.
              </p>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                By posting or connecting your accounts, you grant Flyrinzo permission to access and display
                such content for analytics and scheduling purposes.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Limitation of Liability</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                Flyrinzo and Brainleads Group Inc. are not liable for indirect or incidental damages resulting from
                use, delays, or data loss.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Termination</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                We may suspend or terminate your account if you violate these Terms or engage in abusive or
                unlawful behavior.
              </p>
            </div>

            {/* Subscription and Payments */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Subscription and Payments</h2>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certain Flyrinzo features require a paid subscription.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fees are billed monthly or annually, depending on your plan</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>You may cancel anytime; access will continue until the end of the billing period.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prices and terms are subject to change, but existing users will be notified in advance.</span>
                </li>
              </ul>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Governing Law</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                These Terms shall be governed by the laws of Ontario, Canada.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Contact</h2>
              <p style={{ color: '#6F6C90' }}>
                <a href="mailto:Support@flyrinzo.com" className="text-blue-600 hover:underline">Support@flyrinzo.com</a>
              </p>
              <p style={{ color: '#6F6C90' }}>Toronto, Canada</p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-8 flex-wrap">
              <div className="flex-1 min-w-[250px]">
                <h3 className="text-xl font-bold mb-2">Stay up to date</h3>
                <p className="text-sm" style={{ color: '#6F6C90' }}>
                  We're not just building tools; we're creating a smarter way for small businesses to grow,
                  connect, and succeed. Join us, and let's create the future together.
                </p>
              </div>

              <div className="flex gap-2 flex-1 min-w-[250px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
