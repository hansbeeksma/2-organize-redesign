"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { SERVICES } from "@/lib/constants"
import { staggerContainer, fadeInUp, cardHover } from "@/lib/motion"
import { ArrowRight, Sparkles, Palette, LayoutGrid } from "lucide-react"
import { FadeInUp } from "@/components/motion/FadeInUp"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Palette,
  LayoutGrid,
}

interface ServicesGridProps {
  showAll?: boolean
}

export function ServicesGrid({ showAll = false }: ServicesGridProps) {
  const services = showAll ? SERVICES : SERVICES

  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        {!showAll && (
          <FadeInUp className="text-center mb-12">
            <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
              Onze diensten
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
              Van schoonmaak tot styling — wij brengen orde, schoonheid en rust in uw ruimte.
            </p>
          </FadeInUp>
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Link href={`/diensten/${service.slug}`}>
                  <motion.div
                    initial="rest"
                    whileHover="hover"
                    variants={cardHover}
                    className="group bg-white rounded-2xl border border-border overflow-hidden h-full flex flex-col transition-shadow hover:shadow-lg cursor-pointer"
                  >
                    {/* Service Image */}
                    <div className="relative w-full h-[200px] overflow-hidden">
                      <Image
                        src={service.imageUrl}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                      <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-brand-600" />
                      </div>

                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 text-sm leading-relaxed mb-4 flex-1">
                        {service.subtitle}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-neutral-500 flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-2 text-brand-600 font-medium text-sm group-hover:gap-3 transition-all">
                        Meer info
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
