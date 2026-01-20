import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Let’s build something meaningful
        </h2>
        <p className="mt-4 text-white/60 max-w-xl mx-auto">
          Have a project in mind or want to collaborate?
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
