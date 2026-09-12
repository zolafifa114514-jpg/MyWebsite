import Image from "next/image";
import { site } from "@/config/portfolio";
import SocialLinks from "@/components/SocialLinks";
import { MapPinIcon } from "@/components/icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-100px] top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-[1.2fr_1fr] lg:pt-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {site.availability}
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-zinc-50 sm:text-6xl sm:leading-[1.1]">
            Hi, I&apos;m {site.firstName}{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
              {site.name.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="mt-4 font-mono text-lg text-indigo-300 sm:text-xl">
            {site.role}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Get in touch
            </a>
          </div>

          <SocialLinks className="mt-10" />
        </div>

        <div className="relative mx-auto w-64 sm:w-80 lg:w-full lg:max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-sky-500 to-cyan-400 opacity-30 blur-3xl"
          />
          <Image
            src={site.avatar}
            alt={`Portrait of ${site.name}`}
            width={384}
            height={384}
            priority
            className="relative aspect-square w-full rounded-full border border-zinc-800 object-cover"
          />
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-950/90 px-4 py-2 text-xs text-zinc-400 shadow-lg backdrop-blur-sm">
            <MapPinIcon className="h-3.5 w-3.5 text-indigo-400" />
            {site.location}
          </div>
        </div>
      </div>
    </section>
  );
}
