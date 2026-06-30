import Image from "next/image";
import Link from "next/link";

export function FlyrinzoLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/logo.png"
        alt="Flyrinzo"
        width={36}
        height={36}
        className="shrink-0"
        priority
      />
      <span className="text-xl font-bold tracking-tight text-gray-900">
        Flyrinzo
      </span>
    </Link>
  );
}
