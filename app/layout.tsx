import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Flyrinzo AI — Social Media Growth for Small Business",
    template: "%s | Flyrinzo AI"
  },
  description:
    "AI-powered social media management for small businesses. Schedule posts, analyze performance, and grow your audience — all in one place.",
  keywords: [
    "social media management",
    "AI marketing",
    "small business tools",
    "social media analytics",
    "content scheduling",
    "Instagram automation",
    "Facebook management",
    "social media growth",
    "business analytics",
    "AI-powered marketing"
  ],
  authors: [{ name: "Brainleads Group Inc." }],
  creator: "Flyrinzo",
  publisher: "Brainleads Group Inc.",
  metadataBase: new URL("https://www.flyrinzo.com"),
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  openGraph: {
    title: "Flyrinzo AI — Social Media Growth for Small Business",
    description:
      "AI-powered social media management for small businesses. Schedule posts, analyze performance, and grow your audience — all in one place.",
    url: "https://www.flyrinzo.com",
    siteName: "Flyrinzo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Flyrinzo - AI-Powered Social Media Management"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Flyrinzo AI — Social Media Growth for Small Business",
    description:
      "AI-powered social media management for small businesses. Schedule posts, analyze performance, and grow your audience — all in one place.",
    images: ["/twitter-image.png"],
    creator: "@flyrinzo"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#FBBF24" />
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  );
}
