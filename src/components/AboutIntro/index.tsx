"use client";
import { SectionHeading } from "../Shared/SectionHeading";

export function AboutIntro() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16">
        <div className="space-y-6">
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

        <div className="relative aspect-square border border-white/10 bg-white/5 rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          {/* Optional image */}
          {/* <img src="/about/me.jpg" className="object-cover w-full h-full" /> */}
        </div>
      </div>
    </section>
  );
}
