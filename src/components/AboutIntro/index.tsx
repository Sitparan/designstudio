"use client";
import { SectionHeading } from "../Shared/SectionHeading";

export function AboutIntro() {
  return (
    <section className="py-24 w-full bg-black">
      <div className="px-4 md:px-8 grid md:grid-cols-12 gap-16 w-full">
        <div className="md:col-span-12 space-y-6">
          <SectionHeading
            title="About Me"
            subtitle="A developer focused on building scalable and elegant solutions."
          />

          <p className="text-white/80 leading-relaxed">
            I specialize in building full-stack web applications using modern
            technologies. My work focuses on clean UI, maintainable code,
            and performance-driven architecture.
          </p>

          <p className="text-white/80 leading-relaxed">
            Whether it’s a startup product, internal dashboard, or a
            customer-facing platform, I approach every project with the
            same attention to detail and long-term scalability.
          </p>
        </div>
      </div>
    </section>
  );
}
