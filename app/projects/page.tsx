import Projects from "@/components/Projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Chea Ilong - Software Engineer",
  description: "Explore the portfolio of Chea Ilong featuring full-stack web applications, mobile apps, and innovative software solutions built with React, Next.js, Node.js, and more.",
  keywords: "projects, portfolio, web development, React, Next.js, Node.js, full-stack, software engineer, Chea Ilong",
  openGraph: {
    title: "Projects | Chea Ilong - Software Engineer",
    description: "Explore the portfolio of Chea Ilong featuring full-stack web applications and innovative software solutions.",
    url: "https://chea-ilong.vercel.app/projects",
  },
}

export default function ProjectsPage() {
  return <Projects />
}
