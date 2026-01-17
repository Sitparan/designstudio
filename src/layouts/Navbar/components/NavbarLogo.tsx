"use client";

import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
      Lucksan Design Studio<span className="text-neutral-400">.</span>
    </Link>
  );
}
