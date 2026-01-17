"use client";

import Link from "next/link";

export function FooterLogo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tighter">
      Lucksan Design Studio<span className="text-neutral-400">.</span>
    </Link>
  );
}
