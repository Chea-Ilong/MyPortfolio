/**
 * Skills and Technology Stack Data
 * Contains all skills and technology information
 * Note: Icons are imported in Skills.tsx component since JSX can't be used in .ts files
 */

export const TECH_SKILLS_CONFIG = [
  {
    name: "ReactJS",
    iconName: "SiReact",
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    iconName: "SiTailwindcss",
    color: "#06B6D4",
  },
  {
    name: "Express.js",
    iconName: "SiExpress",
    color: "#000000",
  },
  {
    name: "PostgreSQL",
    iconName: "SiPostgresql",
    color: "#336791",
  },
  {
    name: "Java",
    iconName: "FaJava",
    color: "#007396",
  },
  {
    name: "C++",
    iconName: "SiCplusplus",
    color: "#00599C",
  },
  {
    name: "JavaScript",
    iconName: "SiJavascript",
    color: "#F7DF1E",
  },
  {
    name: "Python",
    iconName: "SiPython",
    color: "#3776AB",
  },
  {
    name: "Django",
    iconName: "SiDjango",
    color: "#092E20",
  },
  {
    name: "Next.js",
    iconName: "SiNextdotjs",
    color: "#000000",
  },
  {
    name: "Git",
    iconName: "SiGit",
    color: "#F05032",
  },
  {
    name: "TypeScript",
    iconName: "SiTypescript",
    color: "#3178C6",
  },
];

export const SKILLS_CATEGORIES = {
  frontend: [
    "ReactJS",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Vite",
  ],
  backend: ["Node.js", "Express.js", "Python", "Django", "Java"],
  database: ["PostgreSQL"],
  tools: ["Git", "C++"],
} as const;
