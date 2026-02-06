"use client"

import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface SlideInProps {
  children: React.ReactNode
  direction?: "left" | "right"
  className?: string
  delay?: number
}

export function SlideIn({
  children,
  direction = "right",
  className,
  delay = 0,
}: SlideInProps) {
  return (
    <motion.div
      variants={direction === "right" ? slideInFromRight : slideInFromLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
