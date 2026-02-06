"use client"

import { motion } from "framer-motion"
import type { ProcessStep } from "@/lib/types"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import { FadeInUp } from "@/components/motion/FadeInUp"
import {
  ClipboardList,
  FileText,
  Sparkles,
  CheckCircle,
  Heart,
  Palette,
  Hammer,
  Star,
  Target,
  Map,
  HandHelping,
  Shield,
  Phone,
  MessageCircle,
  PartyPopper,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ClipboardList,
  FileText,
  Sparkles,
  CheckCircle,
  Heart,
  Palette,
  Hammer,
  Star,
  Target,
  Map,
  HandHelping,
  Shield,
  Phone,
  MessageCircle,
  PartyPopper,
}

interface ProcessStepsProps {
  steps: ProcessStep[]
  title?: string
  subtitle?: string
}

export function ProcessSteps({
  steps,
  title = "Hoe het werkt",
  subtitle,
}: ProcessStepsProps) {
  return (
    <section className="section-padding section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-neutral-600 max-w-xl mx-auto">{subtitle}</p>
          )}
        </FadeInUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step) => {
            const Icon = iconMap[step.icon] || CheckCircle
            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                className="relative text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>

                <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-brand-500 text-white text-xs font-bold flex items-center justify-center lg:left-1/2 lg:-translate-x-[calc(50%+2rem)]">
                  {step.number}
                </div>

                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
