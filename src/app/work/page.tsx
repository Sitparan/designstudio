import { ProjectGrid } from "@/components/ProjectGrid";

export default function WorkPage() {
  return (
    <section className="min-h-screen py-24 bg-[radial-gradient(circle_at_center,_#a8f0b0_0%,_#22c55e_100%)]">
      <div className="container mx-auto px-4 md:px-8">
        <ProjectGrid />
      </div>
    </section>
  );
}
