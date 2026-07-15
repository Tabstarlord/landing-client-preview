import type { ReactNode } from "react";

export default function PhoneFrame({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ aspectRatio: "375 / 812" }}
    >
      <div className="absolute inset-0 rounded-[2.75rem] border-[10px] border-gray-900 bg-gray-900 shadow-xl">
        {/* Dynamic island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-full z-10" />
        <div className="relative w-full h-full bg-white rounded-[2rem] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
