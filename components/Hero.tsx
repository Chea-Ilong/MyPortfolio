"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { SocialLinks } from "./ui/SocialLinks"
import { COLORS } from "@/constants"

const Hero = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null)

  const handleProjectsClick = useCallback(() => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  const handleContactClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-white dark:bg-[#1F1D1B] transition-colors duration-500">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-white dark:bg-[#1F1D1B]" />
        <div className="absolute inset-0">
          {/* Subtle gradient accent */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#EB2420]/5 dark:bg-[#EB2420]/10 rounded-full filter blur-[120px]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-[#EB2420]">Hello, I'm</h2>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Chea <span className="text-[#EB2420]">Ilong</span>
                </h1>
                <h3 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light">
                  Software Engineering Student
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed">
                Building web applications with React and Next.js. Currently studying Software Engineering and working on
                personal projects to improve my skills.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  onClick={handleProjectsClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                  style={{
                    backgroundImage: `linear-gradient(to right, ${COLORS.primary}, rgba(235, 36, 32, 0.8))`,
                    boxShadow: `hover:0 10px 25px -5px rgba(235, 36, 32, 0.2)`,
                  }}
                >
                  View Projects
                </motion.button>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border text-gray-900 dark:text-white font-medium rounded-lg hover:bg-opacity-10 transition-all cursor-pointer"
                  style={{
                    borderColor: `${COLORS.primary}33`,
                  }}
                  onClick={handleContactClick}
                >
                  Contact Me
                </motion.div>
              </div>

              <div className="pt-6">
                <p className="text-gray-500 dark:text-gray-500 mb-3 text-sm">Find me on</p>
                <SocialLinks layout="horizontal" size="md" withAnimation />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gray-100 dark:bg-[#2a2826]">
                <Image
                  src="/porfile.jpg"
                  alt="Chea Ilong"
                  width={384}
                  height={384}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
