"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-[#2a2826] py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#EB2420]">CI</span>
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">Chea Ilong</span>
            </Link>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Software engineer specializing in building exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/Chea-Ilong"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#EB2420] dark:hover:text-[#EB2420] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/chea-ilong-88bb83333/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#EB2420] dark:hover:text-[#EB2420] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.facebook.com/chea.elong.9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-[#EB2420] dark:hover:text-[#EB2420] transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </motion.a>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">© {currentYear} Chea Ilong. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
