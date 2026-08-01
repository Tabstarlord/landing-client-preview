import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Redirecting to Sign Up",
  description: "Redirecting to the Flyrinzo app sign up page.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
