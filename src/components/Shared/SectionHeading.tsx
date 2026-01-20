export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-3">
      <h2 className="text-3xl md:text-4xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
