import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to Login",
  description: "Redirecting to the Flyrinzo app login page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
