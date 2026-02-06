"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { STATS } from "@/lib/constants"

function AnimatedNumber({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayed, setDisplayed] = useState("0")

  useEffect(() => {
    if (!isInView) return

    const numericValue = parseFloat(value)
    if (isNaN(numericValue)) {
      setDisplayed(value)
      return
    }

    const isDecimal = value.includes(".")
    const duration = 1500
    const steps = 40
    const increment = numericValue / steps

    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, numericValue)
      setDisplayed(
        isDecimal ? current.toFixed(1) : Math.round(current).toString()
      )
      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {displayed}
      {suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="bg-neutral-900 text-white section-padding py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-brand-400">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-neutral-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
