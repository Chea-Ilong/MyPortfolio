"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface InfiniteScrollingLogosProps {
  logos: Skill[];
  direction?: "left" | "right";
  speed?: number;
  size?: string;
}

/**
 * Infinite Scrolling Logos Component
 * Displays logos in a continuous scrolling animation
 */
export function InfiniteScrollingLogos({
  logos,
  direction = "right",
  speed = 40,
  size = "w-16 h-16",
}: InfiniteScrollingLogosProps) {
  return (
    <div className="flex overflow-hidden">
      <motion.div
        className={`flex space-x-6 sm:space-x-8 md:space-x-12 items-center`}
        initial={{ x: direction === "left" ? 0 : -1000 }}
        animate={{ x: direction === "left" ? -1000 : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((tech, index) => (
          <motion.div
            key={`${tech.name}-${index}`}
            className={`${size} flex-shrink-0`}
            style={{ color: tech.color }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
      {/* Duplicate for seamless loop */}
      <motion.div
        className={`flex space-x-6 sm:space-x-8 md:space-x-12 items-center ml-6 sm:ml-8 md:ml-12`}
        initial={{ x: direction === "left" ? 0 : -1000 }}
        animate={{ x: direction === "left" ? -1000 : 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((tech, index) => (
          <motion.div
            key={`duplicate-${tech.name}-${index}`}
            className={`${size} flex-shrink-0`}
            style={{ color: tech.color }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
