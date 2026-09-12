import { site } from "@/config/portfolio";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRightIcon, FolderIcon, GitHubIcon } from "@/components/icons";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-800/60 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="03 · projects" title="Things I've built" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:bg-zinc-900/70"
            >
              <div className="mb-5 flex items-center justify-between">
                <FolderIcon className="h-9 w-9 text-indigo-400" />
                <div className="flex items-center gap-3">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-zinc-500 transition-colors hover:text-zinc-100"
                    >
                      <GitHubIcon className="h-5 w-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-zinc-500 transition-colors hover:text-indigo-300"
                    >
                      <ArrowUpRightIcon className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-zinc-100 transition-colors group-hover:text-indigo-300">
                {project.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-6 text-zinc-400">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="font-mono text-xs text-zinc-500 transition-colors group-hover:text-zinc-400"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
