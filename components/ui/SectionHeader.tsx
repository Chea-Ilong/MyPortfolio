"use client";

import { motion } from "framer-motion";
import { SECTION_HEADER_VARIANTS, COLORS } from "@/constants";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  variant?: "default" | "light";
}

/**
 * Reusable Section Header Component
 * Displays a consistent section title with underline and optional description
 */
export function SectionHeader({
  title,
  subtitle,
  description,
  centered = true,
  variant = "default",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={centered ? "text-center mb-16" : "mb-16"}
    >
      {subtitle && (
        <p
          className={`text-lg sm:text-xl md:text-2xl mb-2 font-medium tracking-wider ${
            variant === "light"
              ? `text-[${COLORS.primary}]`
              : `text-[${COLORS.primary}]`
          }`}
        >
          {subtitle}
        </p>
      )}

      <motion.h2
        variants={SECTION_HEADER_VARIANTS.title}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
          variant === "light"
            ? "text-gray-700 dark:text-gray-300"
            : "text-gray-900 dark:text-white"
        }`}
      >
        {title}
      </motion.h2>

      <motion.div
        variants={SECTION_HEADER_VARIANTS.underline}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={`h-1 w-16 sm:w-20 bg-[${COLORS.primary}] mx-auto mt-3 sm:mt-4`}
        style={{ backgroundColor: COLORS.primary }}
      />

      {description && (
        <motion.p
          variants={SECTION_HEADER_VARIANTS.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`mt-4 sm:mt-6 max-w-3xl ${centered ? "mx-auto" : ""} text-base sm:text-lg ${
            variant === "light"
              ? "text-gray-600 dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
