"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PORTFOLIO_ITEMS, PORTFOLIO_CATEGORIES } from "@/lib/constants"
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { staggerContainer, fadeInUp } from "@/lib/motion"
import { cn } from "@/lib/utils"

interface PortfolioGridProps {
  limit?: number
  showFilters?: boolean
}

export function PortfolioGrid({ limit, showFilters = true }: PortfolioGridProps) {
  const [activeFilter, setActiveFilter] = useState("alle")

  const filtered =
    activeFilter === "alle"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter)

  const items = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-8">
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
            Ons werk
          </h2>
          <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
            Bekijk het verschil dat wij maken. Schuif de slider om voor en na te vergelijken.
          </p>
        </FadeInUp>

        {showFilters && (
          <FadeInUp className="flex justify-center gap-2 mb-10">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeFilter === cat.value
                    ? "bg-brand-500 text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                )}
              >
                {cat.label}
              </button>
            ))}
          </FadeInUp>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                layout
                className="group"
              >
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
                <div className="mt-3">
                  <h3 className="font-medium text-neutral-900">{item.title}</h3>
                  <p className="text-sm text-muted mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
