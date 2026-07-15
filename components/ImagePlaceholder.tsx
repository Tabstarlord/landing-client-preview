export default function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 text-center px-4 bg-gray-100 border-2 border-dashed border-gray-300 text-gray-400 ${className}`}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs font-medium leading-snug">{label}</span>
    </div>
  );
}
