"use client";

import { motion } from "framer-motion";
import { services } from "./service.data";
import { ServiceCard } from "./Components/ServiceCard";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

export default function ServicesGrid() {
  return (
    <section className="py-12 relative overflow-hidden bg-[#0a0a0a]">
      <div className="container mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex pt-10 items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">
              Our Services
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              Explore our professional design and consultancy services.
            </h2>
          </div>
        </motion.div>

        {/* Services Grid */}
   <motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
>
  {services.map((service, index) => (
    <ServiceCard
      key={service.slug}
      icon={service.icon}
      title={service.title}
      description={service.description}
      slug={service.slug}
      index={index} // pass index for stagger effect
    />
  ))}
</motion.div>
      </div>

      {/* Optional decorative blur or shapes */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-white/3 rounded-full blur-3xl"></div>
    </section>
  );
}
