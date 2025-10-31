/**
 * Projects Data
 * Contains all project information displayed in portfolio
 */

import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Modern portfolio built with Next.js 14 and TypeScript. Features dark mode, responsive design, and optimized performance with React best practices.",
    image: "/porfile.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Chea-Ilong/MyPortfolio",
    demo: "https://chea-ilong.vercel.app",
    featured: true,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured).slice(0, 3);
