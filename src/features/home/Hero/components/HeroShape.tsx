"use client";

import { useEffect, useState, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/projects/project1.jpg",
  "/projects/project2.jpg",
  "/projects/project3.jpg",
];

export const HeroShape = forwardRef<HTMLDivElement>((props, ref) => {
  const [index, setIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      ref={ref}
      {...props}
      className="relative w-full max-w-md aspect-square overflow-hidden"
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{
        clipPath:
          "polygon(0% 100%, 0% 30%, 50% 0%, 100% 30%, 100% 100%)",
        border: "2px solid rgba(255,255,255,0.2)",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70 z-10" />

      {/* Sliding images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="Project preview"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </motion.div>
  );
});

HeroShape.displayName = "HeroShape";
