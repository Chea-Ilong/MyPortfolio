"use client"

import { memo } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { ITEM_VARIANTS } from "@/constants"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  onHover: () => void
  onLeave: () => void
  isHovered: boolean
}

const ProjectCard = memo(function ProjectCard({
  project,
  onHover,
  onLeave,
  isHovered,
}: ProjectCardProps) {

  return (
    <motion.div
      variants={ITEM_VARIANTS}
      className="bg-white dark:bg-[#2a2826] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/porfile.jpg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
          width={400}
          height={300}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-3">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-5 h-5" />
              <span className="sr-only">GitHub Repository</span>
            </motion.a>
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt className="w-5 h-5" />
              <span className="sr-only">Live Demo</span>
            </motion.a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-[#1F1D1B] text-gray-700 dark:text-gray-300 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
})

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
