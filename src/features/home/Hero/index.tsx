"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui";
import { heroConfig } from "@/config";
import { HeroHeadline, HeroButtons } from "./components";
import { HeroBackgroundSlider } from "./components/HeroBackgroundSlider";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-[80vh] px-6 sm:px-10 py-[100px] overflow-hidden">

      {/* 🔥 Background Slider */}
      <HeroBackgroundSlider />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-col items-center text-center max-w-2xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <Badge>{heroConfig.badge}</Badge>
            </motion.div>

            {/* Headline */}
            <HeroHeadline />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 mb-8 text-neutral-200 text-lg max-w-xl"
            >
              {heroConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <HeroButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
