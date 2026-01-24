"use client";
import { ProjectGrid } from "@/components/ProjectGrid";
import { motion } from "framer-motion";

export default function WorkPage() {
  return (
    <section className="min-h-screen py-24 bg-black">
      <div className="container mx-auto px-4 md:px-8">
               <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Projects
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional design and consultancy services tailored for modern
            construction needs.
          </p>
        </motion.div>


             <ProjectGrid />

      </div>
    </section>
  );
}
