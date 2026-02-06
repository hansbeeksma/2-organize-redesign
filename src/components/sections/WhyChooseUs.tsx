"use client"

import { motion } from "framer-motion"
import { USPS } from "@/lib/constants"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { ShieldCheck, Leaf, Clock, Award } from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Leaf,
  Clock,
  Award,
}

export function WhyChooseUs() {
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
            Waarom 2-Organize?
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Wij combineren vakmanschap met persoonlijke aandacht
          </p>
        </FadeInUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {USPS.map((usp) => {
            const Icon = iconMap[usp.icon] || ShieldCheck
            return (
              <motion.div
                key={usp.title}
                variants={fadeInUp}
                className="bg-white rounded-2xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {usp.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
