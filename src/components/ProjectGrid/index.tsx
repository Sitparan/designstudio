"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
import { ProjectCard } from "@/features/home/Work/components";

export function ProjectGrid() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*");

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data ?? []);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-white/80">Loading projects...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <ProjectCard
              key={project.id}
              title={project.title}
              subtitle={project.subtitle}
              image={project.cover_image}
              year={project.year} 
              slug={project.slug}        />
      ))}
    </div>
  );
}
