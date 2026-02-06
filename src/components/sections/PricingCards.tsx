"use client"

import { motion } from "framer-motion"
import type { PricingTier } from "@/lib/types"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/Badge"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { Check } from "lucide-react"
import { formatPrice } from "@/lib/utils"

interface PricingCardsProps {
  tiers: PricingTier[]
  serviceName?: string
}

export function PricingCards({ tiers, serviceName }: PricingCardsProps) {
  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
            Transparante prijzen
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Geen verborgen kosten. Kies het pakket dat bij u past.
          </p>
        </FadeInUp>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {tiers.map((tier) => (
            <motion.div key={tier.name} variants={fadeInUp}>
              <div
                className={`relative bg-white rounded-2xl border p-6 lg:p-8 h-full flex flex-col ${
                  tier.popular
                    ? "border-brand-500 shadow-lg ring-1 ring-brand-500/20"
                    : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="brand">Meest gekozen</Badge>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted mt-1">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-neutral-900">
                    {formatPrice(tier.price)}
                  </span>
                  <span className="text-sm text-muted ml-1">
                    {tier.unit}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={`/boeken${serviceName ? `?service=${serviceName}` : ""}`}
                  variant={tier.popular ? "primary" : "secondary"}
                  fullWidth
                >
                  Boek nu
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
