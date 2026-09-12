import { site } from "@/config/portfolio";
import SocialLinks from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name} · Built with Next.js &
          Tailwind CSS
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
