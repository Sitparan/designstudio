"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeader, Button } from "@/components/ui";
import { workConfig } from "@/config";
import { ProjectCard } from "./components";
import { supabase } from "@/lib/supabase/client";
import { useEffect } from "react";


export function Work() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState<any[]>([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*");

      console.log("Fetched projects:", data);



    if (error) {
      console.error("Error fetching projects:", error);
    } else {
      setProjects(data ?? []);
    }

    setLoading(false);
  };

  fetchProjects();
}, []);

  return (
    <section id="work" className="relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10 bg-[radial-gradient(circle_at_center,_#a8f0b0_0%,_#22c55e_100%)]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex pt-10 items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs  uppercase tracking-widest text-white/80">
              {workConfig.label}
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 md:mb-0 text-white">
              {workConfig.title} {workConfig.subtitle}
            </h2>
            {/* <Button
              variant="secondary"
              className="border-2 border-white/20 hover:border-white hover:bg-white/5 group"
            >
              View All Work
              <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Button> */}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {loading ? (
  <div className="text-white/80">Loading projects...</div>
) : (
  projects.map((project, index) => (
    <div key={project.id} onMouseEnter={() => setActiveIndex(index)}>
      <ProjectCard
        title={project.title}
        subtitle={project.subtitle}
        image={project.cover_image}
        year={project.year} 
        slug={project.slug}      />
    </div>
  ))
)}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 border border-white/5"></div>
    </section>
  );
}
