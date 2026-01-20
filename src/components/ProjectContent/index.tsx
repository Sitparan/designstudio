import { motion } from "framer-motion";

export function ProjectContent({ project }: { project: any }) {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8 space-y-20">

        {/* ===== Project Description + Info ===== */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="md:col-span-2 text-white/80 space-y-6">
            <p className="text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Sidebar */}
          <aside className="border border-white/10 p-6 h-fit bg-white/5 backdrop-blur">
            <h3 className="text-sm uppercase tracking-widest text-white/60 mb-4">
              Project Info
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <strong className="text-white">Year:</strong> {project.year}
              </li>
              <li>
                <strong className="text-white">Category:</strong> {project.category}
              </li>
              <li>
                <strong className="text-white">Tech:</strong> {project.tech_stack}
              </li>
            </ul>
          </aside>
        </div>

        {/* ===== Project Gallery ===== */}
        {project.gallery?.length > 0 && (
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Project Gallery
            </h2>

            {/* First image as hero */}
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10">
              <img
                src={project.gallery[0]}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Rest of images */}
            {project.gallery.length > 1 && (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.gallery.slice(1).map((img: string, i: number) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="relative aspect-square overflow-hidden rounded-xl border border-white/10 cursor-pointer"
                  >
                    <img
                      src={img}
                      alt={`Project image ${i + 2}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
