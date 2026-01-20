"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroConfig } from "@/config";
import Link from "next/link";
import { navLinks } from "@/layouts/Navbar/config";

export function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="flex flex-col sm:flex-row gap-4"
    >
       <Link href={`/work`}>
      <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center justify-center">
        {heroConfig.buttons.primary.label}   <ArrowRight className="ml-2 h-4 w-4" />
      
      </button>
      </Link>
      <button className="border border-white px-8 py-3 text-sm uppercase tracking-widest  hover:bg-white hover:text-black transition-colors">
        <Link href={`/about`}>{heroConfig.buttons.secondary.label}</Link>
      </button>
    </motion.div>
  );
}
