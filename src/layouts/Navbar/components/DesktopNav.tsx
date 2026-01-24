"use client";

import Link from "next/link";
import { navLinks } from "../config";
import { usePathname } from "next/navigation";

interface DesktopNavProps {
  onContactClick?: () => void; // optional callback if needed
}

export function DesktopNav({ onContactClick }: DesktopNavProps) {
  const pathname = usePathname();

  // Determine if Contact page is active
  const isContactActive = pathname === "/contact" || pathname.startsWith("/contact/");

  return (
    <div className="flex items-center space-x-8">
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                text-sm uppercase tracking-widest transition-colors
                inline-flex items-center justify-center
                ${isActive
                  ? "text-black border-b-2 border-black"
                  : "text-white/70 hover:text-white border-b-2 border-transparent"
                }
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* Contact button as a nav link */}
      <Link
        href="/contact"
        className={`
          hidden md:inline-flex border px-5 py-2 text-sm uppercase tracking-widest transition-colors
          ${isContactActive
            ? "bg-white text-black border-white"
            : "border-white text-white/70 hover:bg-white hover:text-black"
          }
        `}
      >
        Contact
      </Link>
    </div>
  );
}
