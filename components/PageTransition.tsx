"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

interface PageTransitionProps {
  children: ReactNode
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
}

const pageTransition = {
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition