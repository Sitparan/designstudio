import Image from "next/image";
import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo/logo_1.jpeg"  // must exist in /public/logo/logo.jpg
        alt="Lucksan Design Studio"
        width={65}
        height={40}
        className="object-contain"
      />
      <span className="text-2xl md:text-3xl ml-3 font-extrabold tracking-tight bg-clip-text text-white drop-shadow-md">
  Lucksan Design Studio
</span>
    </Link>
  );
}
