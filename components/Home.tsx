"use client"

import { motion } from "framer-motion"
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Education />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <ProjectsPreview />
        <Skills />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <HomeContact />
      </motion.div>
    </main>
  )
}

export default Home
