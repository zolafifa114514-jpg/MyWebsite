import { site } from "@/config/portfolio";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="02 · skills" title="Tools of the trade" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700"
            >
              <h3 className="mb-5 font-mono text-sm text-indigo-400">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs font-mono text-zinc-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
