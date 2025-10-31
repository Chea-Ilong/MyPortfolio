"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SOCIAL_LINKS, COLORS } from "@/constants";

interface SocialLinksProps {
  layout?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
  showLabels?: boolean;
  withAnimation?: boolean;
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  facebook: FaFacebook,
};

/**
 * Reusable Social Links Component
 * Displays social media links with consistent styling and animations
 */
export function SocialLinks({
  layout = "horizontal",
  size = "md",
  showLabels = false,
  withAnimation = true,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  const containerClass =
    layout === "vertical" ? "flex flex-col space-y-4" : "flex space-x-4";

  return (
    <div className={containerClass}>
      {SOCIAL_LINKS.map((social, index) => {
        const Icon = iconMap[social.id as keyof typeof iconMap];

        return (
          <motion.a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-500 dark:text-gray-400 hover:text-[${COLORS.primary}] transition-colors flex items-center gap-2`}
            style={{ color: "currentColor" }}
            whileHover={
              withAnimation
                ? { scale: 1.2, color: COLORS.primary }
                : undefined
            }
            whileTap={withAnimation ? { scale: 0.9 } : undefined}
            initial={withAnimation ? { opacity: 0 } : undefined}
            animate={withAnimation ? { opacity: 1 } : undefined}
            transition={
              withAnimation
                ? { delay: 0.001 * social.id.length }
                : undefined
            }
          >
            <Icon className={sizeClasses[size]} />
            {showLabels && (
              <span className="text-sm font-medium">{social.name}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}
