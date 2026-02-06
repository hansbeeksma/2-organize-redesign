"use client"

import { motion } from "framer-motion"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
}

export function StaggerChildren({ children, className }: StaggerChildrenProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div variants={fadeInUp} className={cn(className)}>
      {children}
    </motion.div>
  )
}
