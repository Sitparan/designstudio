import { notFound } from "next/navigation";
import { ProjectHero } from "@/components/ProjectHero";
import { ProjectContent } from "@/components/ProjectContent";
import { supabase } from "@/lib/supabase/client";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  console.log("Fetching project with slug:", slug);

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

    console.log("Fetched project is:", project);

  if (error || !project) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[radial-gradient(circle_at_center,_#a8f0b0_0%,_#22c55e_100%)]">
      <ProjectHero project={project} />
      <ProjectContent project={project} />
    </article>
  );
}
