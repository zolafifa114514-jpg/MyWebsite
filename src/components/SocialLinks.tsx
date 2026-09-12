import { site, type SocialIconName } from "@/config/portfolio";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

const iconMap: Record<SocialIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {site.socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-zinc-500 transition-colors hover:text-zinc-100"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
