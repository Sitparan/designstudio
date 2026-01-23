"use client";

import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  slug: string;
  index?: number; // optional, used for stagger
}

export function ServiceCard({ icon: Icon, title, description, slug, index = 0 }: ServiceCardProps) {
  // Variant for animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // falling from top
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: index * 0.3 } },
  };

  return (
    <Link href={`/services/${slug}`} className="block">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="p-6 rounded-xl bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] shadow-md transition-all duration-300 cursor-pointer"
      >
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-green-700 mb-5">
          <Icon className="w-7 h-7 text-white" />
        </div>

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-white/90">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
