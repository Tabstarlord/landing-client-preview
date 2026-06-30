"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
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
            <span className="text-yellow-600 font-medium">Privacy policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#000000' }}>
            Our commitment to protecting your privacy
          </h1>

          <p className="text-center mb-8" style={{ color: '#6F6C90' }}>
            Learn more about how Flyrinzo collects and uses data and your rights as a Flyrinzo user.
          </p>

          <div className="space-y-2 text-sm" style={{ color: '#6F6C90' }}>
            <p><span className="font-semibold">Effective Date:</span> January 19, 2026</p>
            <p><span className="font-semibold">Company:</span> Brainleads Group Inc.</p>
            <p><span className="font-semibold">Product:</span> Flyrinzo</p>
            <p><span className="font-semibold">Website:</span> www.flyrinzo.com</p>
            <p><span className="font-semibold">Contact:</span> <a href="mailto:privacy@flyrinzo.com" className="text-blue-600 hover:underline">privacy@flyrinzo.com</a></p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 pb-16 max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Introduction</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                Flyrinzo ("we", "us", or "our") is an AI-powered business platform created by Brainleads Group Inc.
                to help entrepreneurs and small business owners manage growth, analytics, scheduling, and community connections.
              </p>
              <p className="leading-relaxed mt-4" style={{ color: '#6F6C90' }}>
                We value your trust and are committed to protecting your personal data. This Privacy Policy
                explains how we collect, use, share, and protect your information when you use Flyrinzo or
                connect your social media accounts (such as Facebook or Instagram).
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Information We Collect</h2>
              <p className="mb-4" style={{ color: '#6F6C90' }}>We collect the following categories of data:</p>

              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#000000' }}>Category</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold" style={{ color: '#000000' }}>Examples</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Account Information</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Name, Email, Phone Number, and Password.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Business Details</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Company name, category, website, and analytics preferences.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Connected Social Accounts</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Public Profile Name, Page ID, email, and Content Performance Data (if you connect Meta or other platforms)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Usage Data</td>
                      <td className="px-6 py-4 text-sm" style={{ color: '#6F6C90' }}>Log files, device type, IP address, and app interactions to improve performance.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-sm" style={{ color: '#6F6C90' }}>
                We do not collect or store sensitive financial data such as payment card details directly.
                Transactions are processed through secure third-party providers.
              </p>
            </div>

            {/* How We Use Your Data */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>How We Use Your Data</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>We use your data to:</p>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Provide and maintain the Flyrinzo platform;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Schedule posts and manage social accounts (when authorized);</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Offer business analytics and AI-driven insights;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Personalize your experience and suggest relevant connections;</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Send updates, newsletters, and promotional content (optional);</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improve security, detect fraud, and ensure legal compliance.</span>
                </li>
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Data Sharing</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>We only share your data in the following cases:</p>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>With your consent (e.g., when connecting to Meta, LinkedIn, or other platforms).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>With service providers that help us operate Flyrinzo (e.g., cloud hosting, analytics).</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>When required by law to comply with government or regulatory authorities.</span>
                </li>
              </ul>
              <p className="mt-4 font-medium" style={{ color: '#6F6C90' }}>We never sell your personal data.</p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Data Retention</h2>
              <p style={{ color: '#6F6C90' }}>Your data is retained for as long as your account is active.</p>
              <p className="mt-2" style={{ color: '#6F6C90' }}>
                If you delete your account, your data and all connected permissions are permanently removed
                within <span className="font-semibold">7 business days</span>.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Security</h2>
              <p style={{ color: '#6F6C90' }}>
                We use SSL encryption, secure storage, and restricted access protocols to keep your data safe.
                While no system is 100% secure, we take every reasonable measure to protect your information.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Your Rights</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>You may:</p>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Access, edit, or delete your account data.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Withdraw Meta or other third-party permissions at any time.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Request full deletion of your data by emailing <a href="mailto:privacy@flyrinzo.com" className="text-blue-600 hover:underline">privacy@flyrinzo.com</a>.</span>
                </li>
              </ul>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>International Data Transfers</h2>
              <p style={{ color: '#6F6C90' }}>
                Flyrinzo operates globally. Your data may be processed in countries outside your region (including
                Canada and the United States) under secure privacy standards.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Updates</h2>
              <p style={{ color: '#6F6C90' }}>
                We may update this policy from time to time. The latest version will always be available at{" "}
                <a href="https://www.flyrinzo.com/privacy" className="text-blue-600 hover:underline">
                  www.flyrinzo.com/privacy
                </a>.
              </p>
            </div>

            {/* Contact Us */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Contact Us</h2>
              <p style={{ color: '#6F6C90' }}>
                <a href="mailto:privacy@flyrinzo.com" className="text-blue-600 hover:underline">privacy@flyrinzo.com</a>
              </p>
              <p style={{ color: '#6F6C90' }}>Brainleads Group Inc.</p>
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
                <p className="text-gray-600 text-sm">
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
