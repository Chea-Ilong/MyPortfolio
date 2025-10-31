/**
 * Site Configuration
 * Central configuration for the portfolio site
 */

export const SITE_CONFIG = {
  title: "Chea Ilong | Software Engineer",
  description:
    "Portfolio website for Chea Ilong, Software Engineer specializing in full-stack development, React, Next.js, and modern web technologies. Based in Phnom Penh, Cambodia.",
  keywords:
    "Chea Ilong, Software Engineer, Full Stack Developer, React, Next.js, TypeScript, JavaScript, Web Development, Cambodia, Phnom Penh",
  author: "Chea Ilong",
  url: "https://chea-ilong.vercel.app",
  email: "your-email@example.com",
  image: "/porfile.jpg",
  twitterHandle: "@cheailong",
  linkedinProfile: "https://www.linkedin.com/in/chea-ilong-88bb83333/",
  githubProfile: "https://github.com/Chea-Ilong",
  facebookProfile: "https://www.facebook.com/chea.elong.9",
} as const;

export const SOCIAL_LINKS = [
  {
    id: "github",
    name: "GitHub",
    href: SITE_CONFIG.githubProfile,
    icon: "FaGithub",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    href: SITE_CONFIG.linkedinProfile,
    icon: "FaLinkedin",
  },
  {
    id: "facebook",
    name: "Facebook",
    href: SITE_CONFIG.facebookProfile,
    icon: "FaFacebook",
  },
] as const;

export const NAVIGATION_LINKS = [
  { name: "Home", path: "/", section: "hero" },
  { name: "About", path: "/", section: "about" },
  { name: "Experience", path: "/", section: "education" },
  { name: "Projects", path: "/", section: "projects" },
  { name: "Skills", path: "/", section: "skills" },
  { name: "Contact", path: "/", section: "contact" },
] as const;

export const SECTIONS = [
  "hero",
  "about",
  "skills",
  "education",
  "projects",
  "contact",
] as const;

export const KEYBOARD_SHORTCUTS = {
  TOGGLE_DARK_MODE: {
    key: "D",
    ctrl: true,
    shift: true,
    description: "Toggle Dark Mode",
  },
  CLOSE_MENU: {
    key: "Escape",
    description: "Close Mobile Menu",
  },
} as const;
