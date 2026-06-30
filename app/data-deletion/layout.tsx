import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Deletion Policy",
  description:
    "Learn how to delete your Flyrinzo account and personal data. We value your privacy and provide full control over your personal information.",
  keywords: [
    "data deletion",
    "delete account",
    "remove data",
    "GDPR right to erasure",
    "data privacy",
    "account deletion",
    "Flyrinzo data removal"
  ],
  openGraph: {
    title: "Data Deletion Policy | Flyrinzo AI",
    description: "Full control over your personal data",
    url: "https://www.flyrinzo.com/data-deletion",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/data-deletion"
  }
};

export default function DataDeletionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
