"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/features/home/Services/service.data";
import { ServiceCard } from "@/features/home/Services/Components/ServiceCard";

export default function ServicesPage() {
  return (
    <section className="py-24 px-6 sm:px-10 bg-black">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Professional design and consultancy services tailored for modern
            construction needs.
          </p>
        </motion.div>

            <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {services.map((service) => (
                    <ServiceCard
                      key={service.slug}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      slug={service.slug}
                    />
                  ))}
                </motion.div>

        {/* Services Grid
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-background shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-5">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {service.tamil}
                  </p>

                  <p className="mt-4 text-sm text-foreground/80 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}
