"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="py-32 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white max-w-4xl"
        >
          Crafting digital experiences with precision and purpose.
        </motion.h1>

        <p className="mt-6 text-lg text-white/70 max-w-2xl">
          I design and build modern web applications with a strong focus on
          performance, usability, and clean architecture.
        </p>
      </div>
    </section>
  );
}
