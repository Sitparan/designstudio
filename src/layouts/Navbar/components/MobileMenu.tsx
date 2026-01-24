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

  // Check if contact page is active
  const isContactActive = pathname === "/contact" || pathname.startsWith("/contact/");

  // Common class for all links
  const linkClass = (isActive: boolean) =>
    `text-xl font-light py-2 transition-colors ${
      isActive
        ? "bg-[radial-gradient(circle,_#a8f0b0_0%,_#22c55e_100%)] bg-clip-text text-transparent"
        : "text-neutral-400 hover:text-white"
    }`;

  return (
    <motion.div
      initial={mobileMenuAnimationConfig.initial}
      animate={mobileMenuAnimationConfig.animate}
      exit={mobileMenuAnimationConfig.exit}
      className="md:hidden bg-black"
    >
      <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-6">
        {/* Nav links */}
        {navLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={linkClass(isActive)}
              onClick={onClose} // close menu after click
            >
              {link.label}
            </Link>
          );
        })}

        {/* Contact link styled same as other links */}
        <Link
          href="/contact"
          className={linkClass(isContactActive)}
          onClick={onClose} // close menu after click
        >
          Contact
        </Link>
      </div>
    </motion.div>
  );
}
