/**
 * Reusable Animation Variants
 * Centralized Framer Motion variants to maintain consistency
 */

export const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const FADE_IN_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const SLIDE_IN_LEFT = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const SLIDE_IN_RIGHT = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export const SCALE_UP = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

export const SECTION_HEADER_VARIANTS = {
  title: {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
  underline: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  },
  description: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  },
};

export const HOVER_SCALE = {
  scale: 1.05,
};

export const HOVER_ROTATE = [0, -10, 10, -5, 5, 0];

export const LOGO_VARIANTS = {
  initial: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: HOVER_ROTATE,
    transition: {
      scale: { duration: 0.3 },
      rotate: { duration: 0.5 },
    },
  },
};

export const SPRING_TRANSITION = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const SMOOTH_TRANSITION = {
  duration: 0.3,
  ease: "easeInOut",
};
