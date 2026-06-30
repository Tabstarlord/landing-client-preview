"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataDeletionPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        {/* Header Section */}
        <section className="py-16 px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            <span className="text-yellow-600 font-medium">Data Deletion</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6" style={{ color: '#000000' }}>
            Data Deletion Policy
          </h1>

          <p className="text-center mb-8 text-[20px]" style={{ color: '#6F6C90' }}>
            At Flyrinzo, we value your privacy and are committed to providing you with control over your
            personal data.
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
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Overview</h2>
              <p className="leading-relaxed" style={{ color: '#6F6C90' }}>
                You have full control over your data. If you wish to delete your Flyrinzo account or remove Meta-connected data, follow one of the methods below.
              </p>
            </div>

            {/* In-App Deletion */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>In-App Deletion</h2>
              <ul className="space-y-2" style={{ color: '#6F6C90' }}>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Go to Settings → Privacy → Delete Account</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Confirm Deletion</span>
                </li>
              </ul>
            </div>

            {/* Manual Request */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Manual Request</h2>
              <p className="mb-4" style={{ color: '#6F6C90' }}>If you cannot access your account:</p>

              <p className="mb-2" style={{ color: '#6F6C90' }}>
                Email <a href="mailto:privacy@flyrinzo.com" className="text-blue-600 hover:underline">privacy@flyrinzo.com</a>
              </p>

              <p className="mb-2" style={{ color: '#6F6C90' }}>
                Subject line: "Request for Data Deletion"<br />
                Include:
              </p>

              <ul className="space-y-1 ml-4" style={{ color: '#6F6C90' }}>
                <li>Full name</li>
                <li>Registered email</li>
                <li>Optional: connected Facebook/Instagram page</li>
              </ul>

              <p className="mt-4" style={{ color: '#6F6C90' }}>
                Your data will be deleted and confirmation sent once completed.
              </p>
            </div>

            {/* Meta Deletion in Facebook */}
            <div>
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Meta Deletion in Facebook</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>If you've logged in with Meta:</p>

              <p className="mb-3" style={{ color: '#6F6C90' }}>
                Visit Facebook → Settings → Apps and Websites → Flyrinzo → Remove App
              </p>

              <p className="mb-2" style={{ color: '#6F6C90' }}>
                This will revoke permissions and delete connected data.
              </p>

              <p style={{ color: '#6F6C90' }}>
                Your data will be deleted and confirmation sent once completed.
              </p>
            </div>

            {/* Contact */}
            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>Contact</h2>
              <p className="mb-3" style={{ color: '#6F6C90' }}>
                If you need help with data deletion or privacy inquiries:
              </p>
              <p className="mb-3" style={{ color: '#6F6C90' }}>
                <a href="mailto:Privacy@flyrinzo.com" className="text-blue-600 hover:underline">Privacy@flyrinzo.com</a>
              </p>
              <p style={{ color: '#6F6C90' }}>
                We respond to verified requests within 7 business days.
              </p>
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
