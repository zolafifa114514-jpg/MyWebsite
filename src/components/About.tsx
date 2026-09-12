import { site } from "@/config/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { MailIcon, MapPinIcon } from "@/components/icons";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="01 · about" title="Behind the code" />

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-lg leading-8 text-zinc-400">
            {site.about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <aside className="h-fit rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="mb-4 font-mono text-sm text-indigo-400">
              Off the clock
            </h3>
            <ul className="flex flex-wrap gap-2">
              {site.interests.map((interest) => (
                <li
                  key={interest}
                  className="rounded-full border border-zinc-700/60 bg-zinc-800/40 px-3 py-1 text-xs text-zinc-300"
                >
                  {interest}
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-3 border-t border-zinc-800 pt-6 text-sm">
              <p className="flex items-center gap-2 text-zinc-400">
                <MapPinIcon className="h-4 w-4 text-indigo-400" />
                {site.location}
              </p>
              <p className="flex items-center gap-2 text-zinc-400">
                <MailIcon className="h-4 w-4 text-indigo-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-zinc-100"
                >
                  {site.email}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
