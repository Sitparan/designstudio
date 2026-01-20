const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "30+" },
  { label: "Technologies Used", value: "15+" },
];

export function AboutStats() {
  return (
    <section className="py-24 border-y border-white/10 bg-white/5">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-4xl font-bold text-white">
              {stat.value}
            </p>
            <p className="mt-2 text-white/60 text-sm uppercase tracking-widest">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
