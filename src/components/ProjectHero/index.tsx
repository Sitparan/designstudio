export function ProjectHero({ project }: { project: any }) {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      <img
        src={project.cover_image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 h-full flex items-end">
        <div className="container mx-auto px-4 pb-16">
          <div className="text-sm text-white/60 mb-3">
            {project.year}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {project.title}
          </h1>
          <p className="max-w-xl text-white/80 text-lg">
            {project.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
