"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/projects/project1.jpg",
  "/projects/project2.jpg",
  "/projects/project3.jpg",
];

export function HeroShape() {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square overflow-hidden border border-neutral-800 bg-neutral-900">
      {/* Background overlay (optional) */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 z-10" />

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Project preview"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
