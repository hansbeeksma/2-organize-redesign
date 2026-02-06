"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { fadeInUp, springGentle } from "@/lib/motion"
import { ArrowRight, Star } from "lucide-react"

interface HeroSectionProps {
  title?: string
  subtitle?: string
  compact?: boolean
}

export function HeroSection({
  title = "Een fris, georganiseerd & stijlvol thuis",
  subtitle = "Professionele schoonmaak, styling en organisatie in Amsterdam. Boek direct online en ervaar het verschil.",
  compact = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-neutral-50 via-brand-50/30 to-neutral-100 ${
        compact ? "pt-24 pb-16 lg:pt-32 lg:pb-20" : "min-h-svh flex items-center pt-14 lg:pt-16"
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto section-padding w-full">
        <div className={`max-w-2xl ${compact ? "" : "py-16 lg:py-24"}`}>
          {!compact && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-4 h-4 fill-brand-400 text-brand-400" />
              <span className="text-sm font-medium text-neutral-700">
                4.9 sterren gemiddeld — 500+ tevreden klanten
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className={`font-bold tracking-tight text-neutral-900 leading-[1.1] ${
              compact ? "text-[length:var(--font-size-h1)]" : "text-[length:var(--font-size-display)]"
            }`}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-6 text-[length:var(--font-size-body-lg)] text-neutral-600 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {!compact && (
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, ...springGentle }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button href="/boeken" size="lg">
                Boek nu
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/diensten" variant="secondary" size="lg">
                Bekijk diensten
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
