"use client";

import Link from "next/link";
import { navLinks } from "../config";
import { usePathname } from "next/navigation";

interface DesktopNavProps {
  onContactClick?: () => void;
}

export function DesktopNav({ onContactClick }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-8">
      <nav className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => {
          // Active if pathname starts with link.href
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

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

      <div className="hidden md:block">
        <button
          onClick={onContactClick}
          className="border border-white px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Contact
        </button>
      </div>
    </div>
  );
}
