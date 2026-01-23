import { notFound } from "next/navigation";
import { services } from "../services.data";



export default function ServiceDetailPage({ params }: any) {
  const service = services.find(
    (s) => s.slug === params.slug
  );

  if (!service) {
    notFound();
  }

  return (
    <section className="py-24 px-6 sm:px-10 bg-black">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            {service.title}
          </h1>

          <p className="mt-2 text-white/80">
            {service.tamil}
          </p>
        </div>

        {/* Description */}
        <div className="card p-8 leading-relaxed whitespace-pre-line bg-[radial-gradient(_#a8f0b0_0%,_#22c55e_100%)] text-white shadow-md">
          <p className="text-foreground/90">
            {service.longDescription}
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:0775068901"
            className="inline-block btn-primary px-8 py-3"
          >
            Call for Appointment
          </a>
        </div>

      </div>
    </section>
  );
}
