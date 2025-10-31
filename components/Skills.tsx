"use client"

import { useMemo } from "react"
import { motion } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-media-query"
import { InfiniteScrollingLogos } from "./InfiniteScrollingLogos"
import { SectionHeader } from "./ui/SectionHeader"
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiPython,
  SiGit,
  SiCplusplus,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiNextdotjs,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from "@/constants"
import type { Skill } from "@/types"

const Skills = () => {
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Memoize TECH_SKILLS creation
  const TECH_SKILLS = useMemo<Skill[]>(() => [
    {
      name: "ReactJS",
      icon: <SiReact className="w-full h-full" />,
      color: "#61DAFB",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-full h-full" />,
      color: "#06B6D4",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-full h-full" />,
      color: "#000000",
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="w-full h-full" />,
      color: "#336791",
    },
    {
      name: "Java",
      icon: <FaJava className="w-full h-full" />,
      color: "#007396",
    },
    {
      name: "C++",
      icon: <SiCplusplus className="w-full h-full" />,
      color: "#00599C",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-full h-full" />,
      color: "#F7DF1E",
    },
    {
      name: "Python",
      icon: <SiPython className="w-full h-full" />,
      color: "#3776AB",
    },
    {
      name: "Django",
      icon: <SiDjango className="w-full h-full" />,
      color: "#092E20",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-full h-full" />,
      color: "#000000",
    },
    {
      name: "Git",
      icon: <SiGit className="w-full h-full" />,
      color: "#F05032",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-full h-full" />,
      color: "#3178C6",
    },
  ], [])

  // Memoize size calculation
  const scrollLogosSize = useMemo(() => {
    if (isMobile) return "w-12 h-12"
    if (isTablet) return "w-16 h-16"
    return "w-20 h-20"
  }, [isMobile, isTablet])

  const scrollSpeed = useMemo(() => {
    if (isMobile) return 30
    if (isTablet) return 35
    return 40
  }, [isMobile, isTablet])

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 md:py-20 min-h-screen flex items-center bg-white dark:bg-[#1F1D1B] transition-colors duration-500 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          subtitle="EXPERTISE"
          title="Technical Skills"
          centered
        />

        <div className="relative h-16 sm:h-20 md:h-24 mb-8 sm:mb-12 md:mb-16 overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-white dark:from-[#1F1D1B] to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-white dark:from-[#1F1D1B] to-transparent"></div>

          <InfiniteScrollingLogos
            logos={TECH_SKILLS}
            direction="right"
            speed={scrollSpeed}
            size={scrollLogosSize}
          />
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-12 mx-auto max-w-4xl"
          variants={CONTAINER_VARIANTS}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {TECH_SKILLS.map((tech, index) => (
            <motion.div
              key={index}
              variants={ITEM_VARIANTS}
              className="flex flex-col items-center p-4 sm:p-5 bg-white dark:bg-[#2a2826] rounded-lg shadow-md border border-gray-200 dark:border-gray-800"
            >
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mb-2 sm:mb-3"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <span className="text-xs sm:text-sm md:text-base text-gray-900 dark:text-white font-medium text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
