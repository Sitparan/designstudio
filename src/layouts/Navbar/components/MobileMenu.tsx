"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks, mobileMenuAnimationConfig } from "../config";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <motion.div
      initial={mobileMenuAnimationConfig.initial}
      animate={mobileMenuAnimationConfig.animate}
      exit={mobileMenuAnimationConfig.exit}
      className="md:hidden bg-black"
    >
      <div className="container mx-auto px-4 py-8">
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => {
            // Highlight link if on page or any subpage
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  text-xl font-light py-2 transition-colors
                  ${isActive 
                    ? "bg-[radial-gradient(circle,_#a8f0b0_0%,_#22c55e_100%)] bg-clip-text text-transparent"
                    : "text-neutral-400 hover:text-white"
                  }
                `}
                onClick={onClose}
              >
                {link.label}
              </Link>
            );
          })}

          <button
            className="text-neutral-400 border border-white px-5 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors w-full mt-4"
            onClick={onClose}
          >
            Contact
          </button>
        </nav>
      </div>
    </motion.div>
  );
}
