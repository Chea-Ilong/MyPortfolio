"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("hero")
  const pathname = usePathname()

  // Handle dark mode toggle
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme) {
        setDarkMode(savedTheme === "dark")
      } else {
        const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
        setDarkMode(systemPrefersDark)
      }
    }
  }, []) // Empty dependency array means this runs once on mount

  // Apply theme changes when darkMode state changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [darkMode]) // This effect runs only when darkMode changes

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Close mobile menu on Escape key
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
      
      // Toggle dark mode with Ctrl/Cmd + Shift + D
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
        e.preventDefault()
        setDarkMode(!darkMode)
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [isOpen, darkMode])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Calculate scroll progress
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (scrollTop / scrollHeight) * 100
      setScrollProgress(progress)
      
      // Update active section based on scroll position
      if (pathname === "/") {
        const sections = ["hero", "about", "skills", "education", "projects", "contact"]
        const currentSection = sections.find(section => {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            return rect.top <= 100 && rect.bottom >= 100
          }
          return false
        })
        
        if (currentSection && currentSection !== activeSection) {
          setActiveSection(currentSection)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const navLinks = [
    { name: "Home", path: "/", section: "hero" },
    { name: "About", path: "/", section: "about" },
    { name: "Skills", path: "/", section: "skills" },
    { name: "Experience", path: "/", section: "education" },
    { name: "Projects", path: "/", section: "projects" },
    { name: "Contact", path: "/", section: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-[#1F1D1B]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#EB2420] to-[#FF6B35] bg-clip-text text-transparent">
                  CI
                </span>
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-[#EB2420] to-[#FF6B35] rounded-lg blur opacity-0 group-hover:opacity-20"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              <motion.span 
                className="ml-2 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white group-hover:text-[#EB2420] transition-colors duration-300"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Chea Ilong
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const handleClick = (e: React.MouseEvent) => {
                if (link.section && pathname === "/") {
                  e.preventDefault()
                  const element = document.getElementById(link.section)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }
              }

              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative group"
                >
                  <Link
                    href={link.path}
                    onClick={handleClick}
                    className="relative text-base font-medium transition-all duration-300 px-3 py-1 block group text-gray-700 dark:text-gray-300 hover:text-[#EB2420]"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative z-10"
                    >
                      {link.name}
                    </motion.span>
                    
                    {/* Hover underline effect with smooth animation - positioned closer to text */}
                    <motion.div
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#EB2420] rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25,
                        duration: 0.2
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Link>
                </motion.div>
              )
            })}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-[#2a2826] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3a3836] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:ring-offset-2"
              aria-label="Toggle Dark Mode"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              onClick={toggleDarkMode}
              className="p-3 rounded-full bg-gray-100 dark:bg-[#2a2826] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3a3836] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:ring-offset-2"
              aria-label="Toggle Dark Mode"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            <motion.button
              onClick={toggleMenu}
              className="p-3 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2a2826] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#EB2420] focus:ring-offset-2"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
        
        {/* Scroll Progress Bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#EB2420] to-[#FF6B35] shadow-sm"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 dark:bg-[#1F1D1B]/95 backdrop-blur-xl shadow-xl border-t border-gray-200 dark:border-gray-700"
      >
        <motion.div 
          className="px-4 py-4 space-y-2"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            },
            closed: {
              transition: { staggerChildren: 0.05, staggerDirection: -1 }
            }
          }}
        >
          {navLinks.map((link) => {
            const handleMobileClick = (e: React.MouseEvent) => {
              setIsOpen(false)
              if (link.section && pathname === "/") {
                e.preventDefault()
                setTimeout(() => {
                  const element = document.getElementById(link.section)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 100)
              }
            }

            return (
              <motion.div
                key={link.name}
                variants={{
                  open: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      y: { stiffness: 1000, velocity: -100 }
                    }
                  },
                  closed: {
                    y: 50,
                    opacity: 0,
                    transition: {
                      y: { stiffness: 1000 }
                    }
                  }
                }}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative group"
              >
                <Link
                  href={link.path}
                  className="block px-4 py-3 rounded-lg text-base font-medium relative transition-all duration-200 group text-gray-700 dark:text-gray-300 hover:text-[#EB2420] hover:bg-gray-100 dark:hover:bg-[#2a2826]"
                  onClick={handleMobileClick}
                >
                  <span>
                    {link.name}
                  </span>
                  
                  {/* Mobile hover line effect with smooth animation - positioned closer to text */}
                  <motion.div
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#EB2420] rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25,
                      duration: 0.2
                    }}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </header>
  )
}

export default Navbar
