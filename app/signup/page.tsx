"use client";

import { useEffect } from "react";

const DESTINATION = "https://app.flyrinzo.com/signup";

export default function SignupRedirect() {
  useEffect(() => {
    window.location.replace(DESTINATION);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 text-center">
      <meta httpEquiv="refresh" content={`0;url=${DESTINATION}`} />
      <p className="text-sm text-gray-500">
        Redirecting to{" "}
        <a href={DESTINATION} className="text-yellow-500 underline">
          Flyrinzo sign up
        </a>
        ...
      </p>
    </main>
  );
}
