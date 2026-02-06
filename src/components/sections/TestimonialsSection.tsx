"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { REVIEWS } from "@/lib/constants"
import { Rating } from "@/components/ui/Rating"
import { Avatar } from "@/components/ui/Avatar"
import { Badge } from "@/components/ui/Badge"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goTo = (index: number) => {
    setCurrentIndex(((index % REVIEWS.length) + REVIEWS.length) % REVIEWS.length)
  }

  const review = REVIEWS[currentIndex]

  return (
    <section className="section-padding section-spacing bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <FadeInUp className="text-center mb-12">
          <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
            Wat onze klanten zeggen
          </h2>
          <p className="mt-3 text-neutral-600">
            Beoordeeld met 4.9 sterren door meer dan 500 klanten
          </p>
        </FadeInUp>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-border"
            >
              <Rating value={review.rating} size="md" className="mb-4" />

              <blockquote className="text-lg text-neutral-800 leading-relaxed mb-6">
                &ldquo;{review.text}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={review.author} size="md" />
                  <div>
                    <p className="font-medium text-neutral-900">{review.author}</p>
                    <p className="text-sm text-muted">{review.service}</p>
                  </div>
                </div>

                {review.verified && (
                  <Badge variant="verified">
                    <ShieldCheck className="w-3 h-3" />
                    Geverifieerd
                  </Badge>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goTo(currentIndex - 1)}
              className="touch-target rounded-full border border-border hover:bg-neutral-100 transition-colors"
              aria-label="Vorige review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-brand-500 w-6" : "bg-neutral-300"
                  }`}
                  aria-label={`Review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(currentIndex + 1)}
              className="touch-target rounded-full border border-border hover:bg-neutral-100 transition-colors"
              aria-label="Volgende review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
