import type { Variants, Transition } from "framer-motion"

// Spring configs (Apple HIG)
export const springGentle: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 14,
}

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 24,
}

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 10,
}

// Fade In Up
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...springGentle,
      duration: 0.6,
    },
  },
}

// Stagger Container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

// Slide In from direction
export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springGentle,
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.3 },
  },
}

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springGentle,
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.3 },
  },
}

// Scale In
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springGentle,
  },
}

// Card hover
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.02,
    y: -4,
    transition: springSnappy,
  },
}
