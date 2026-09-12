import { site } from "@/config/portfolio";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-zinc-800/60 py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <p className="mb-3 font-mono text-sm text-indigo-400">05 · contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-50 sm:text-5xl">
          Let&apos;s build something together.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400">
          Whether you have a project in mind, a role to fill, or just want to
          talk shop — my inbox is always open.
        </p>
        <a
          href={`mailto:${site.email}`}
          className="mt-10 inline-block rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Say hello
        </a>
      </div>
    </section>
  );
}
