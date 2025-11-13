import Image from "next/image";

export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Next01 Labs Logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
}

