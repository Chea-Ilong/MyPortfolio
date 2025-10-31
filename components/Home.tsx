"use client"

import dynamic from "next/dynamic"
import Hero from "./Hero"
import LoadingSkeleton from "./LoadingSkeleton"

// Dynamically import heavy components to improve initial load
const Education = dynamic(() => import("./Education"), {
  loading: () => <LoadingSkeleton />
})

const Skills = dynamic(() => import("./Skills"), {
  loading: () => <LoadingSkeleton />
})

const ProjectsPreview = dynamic(() => import("./ProjectsPreview"), {
  loading: () => <LoadingSkeleton />
})

const About = dynamic(() => import("./About"), {
  loading: () => <LoadingSkeleton />
})

const HomeContact = dynamic(() => import("./HomeContact"), {
  loading: () => <LoadingSkeleton />
})

const Home = () => {
  return (
    <main className="pt-16">
      <Hero />
      <About />
      <Education />
      <ProjectsPreview />
      <Skills />
      <HomeContact />
    </main>
  )
}

export default Home
