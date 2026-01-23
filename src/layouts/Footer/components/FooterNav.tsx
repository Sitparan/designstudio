"use client";

import { footerNavLinks } from "../config";

export function FooterNav() {
  return (
    <nav className="flex gap-6">
      {footerNavLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className=" hover:text-white transition-colors text-sm"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
