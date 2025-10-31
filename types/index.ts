/**
 * TypeScript Type Definitions
 * Central location for all type definitions used throughout the application
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

export interface EducationEvent {
  year: number;
  title: string;
  description: string;
  details: string;
}

export interface Achievement {
  year: number;
  title: string;
  description: string;
  details: string;
  isCertificate: boolean;
  issuer?: string;
  credentialId?: string;
  credential?: string;
  date?: string;
  skills?: string[];
  images?: string[];
}

export interface SocialLink {
  id: string;
  name: string;
  href: string;
  icon: string;
}

export interface NavLink {
  name: string;
  path: string;
  section?: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface AnimationVariants {
  hidden: Record<string, unknown>;
  visible: Record<string, unknown>;
}
