"use client"

import { motion } from "framer-motion"
import { fadeInUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface FadeInUpProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function FadeInUp({ children, className, delay = 0 }: FadeInUpProps) {
  return (
    <motion.div
      variants={fadeInUp}
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
