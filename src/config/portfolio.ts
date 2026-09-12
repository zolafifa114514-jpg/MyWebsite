// All site content lives here — edit this file to personalize everything.
export type SocialIconName = "github" | "linkedin" | "x";

export const site = {
  name: "Colin Zhang",
  firstName: "Colin",
  role: "Student & Coder",
  tagline:
    "I’m learning to code, building my foundation, and looking for opportunities to grow with ambitious teams.",
  location: "Your location",
  email: "hello@example.com",
  avatar: "/avatar.png",
  availability: "Open to learning and opportunities",
  about: [
    "I’m a student interested in coding and excited to explore how technology can turn ideas into useful experiences.",
    "This portfolio is a starting point for sharing what I learn, the projects I build, and the interests that keep me curious as I work toward opportunities at leading technology companies.",
  ],
  interests: ["Coding", "Problem solving", "Learning", "Technology"],
  socials: [
    { label: "GitHub", href: "https://github.com/your-username", icon: "github" as SocialIconName },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/your-profile",
      icon: "linkedin" as SocialIconName,
    },
    { label: "X / Twitter", href: "#", icon: "x" as SocialIconName },
  ],
  skills: [
    { label: "Learning", items: ["HTML", "CSS", "JavaScript", "Python"] },
    { label: "Exploring", items: ["React", "Next.js", "Git", "APIs"] },
    { label: "Building", items: ["Websites", "Interfaces", "Experiments", "Projects"] },
    { label: "Placeholder", items: ["Add your skills", "Add your tools", "Add your strengths"] },
  ],
  projects: [
    {
      title: "Personal Portfolio",
      description:
        "This portfolio is the first step in documenting my coding journey and sharing the work I create.",
      tags: ["HTML", "CSS", "Next.js"],
      repo: "https://github.com/your-username/portfolio",
      demo: "#top",
    },
    {
      title: "Your next project",
      description:
        "A placeholder for a future project. I’m looking forward to filling this space with something useful.",
      tags: ["Coming soon"],
      repo: "",
      demo: "",
    },
    {
      title: "Your next experiment",
      description:
        "Another space for an experiment where I can practice turning a problem into a simple solution.",
      tags: ["Coming soon"],
      repo: "",
      demo: "",
    },
  ],
  experience: [
    {
      role: "Student",
      company: "Learning and building",
      period: "Present",
      summary:
        "Developing coding skills through personal projects, experiments, and consistent practice.",
    },
  ],
};
