"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import ProjectCard from "./ProjectCard"
import { PROJECTS } from "@/data/projects"
import { CONTAINER_VARIANTS } from "@/constants"
import type { Project } from "@/types"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const handleHover = useCallback((id: number) => {
    setHoveredProject(id)
  }, [])

  const handleLeave = useCallback(() => {
    setHoveredProject(null)
  }, [])

  return (
    <main className="pt-24 pb-16 bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            My Projects
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-20 bg-[#EB2420] mx-auto mt-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Explore my portfolio of projects spanning web development, mobile
            applications, and more. Each project represents my passion for
            creating innovative solutions.
          </motion.p>
        </div>

        <motion.div
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((project: Project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onHover={() => handleHover(project.id)}
              onLeave={handleLeave}
              isHovered={hoveredProject === project.id}
            />
          ))}
        </motion.div>
      </div>
    </main>
  )
}

export default Projects
