export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-sm text-indigo-400">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
