import { site } from "@/config/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="04 · experience" title="Where I've worked" />

        <ol className="relative ml-3 space-y-12 border-l border-zinc-800">
          {site.experience.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pl-8">
              <span
                aria-hidden
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-zinc-950 bg-gradient-to-r from-indigo-400 to-cyan-400"
              />
              <p className="font-mono text-xs text-zinc-500">{job.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-100">
                {job.role}{" "}
                <span className="text-indigo-300">· {job.company}</span>
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-400">
                {job.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
