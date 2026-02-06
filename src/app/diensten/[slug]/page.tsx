"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import { SERVICES } from "@/lib/constants"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { PricingCards } from "@/components/sections/PricingCards"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { CtaSection } from "@/components/sections/CtaSection"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { Check } from "lucide-react"

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)
  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <HeroSection
        title={service.title}
        subtitle={service.description}
        compact
      />

      {/* Service Hero Image */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden">
            <Image
              src={service.imageUrl}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="section-padding section-spacing">
        <div className="max-w-7xl mx-auto">
          <FadeInUp>
            <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900 mb-8 text-center">
              Wat wij bieden
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {service.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white rounded-xl border border-border p-4"
                >
                  <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                  <span className="text-sm text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      <ProcessSteps
        steps={service.process}
        title="Ons werkproces"
        subtitle={`Zo pakken wij ${service.title.toLowerCase()} aan`}
      />

      <PricingCards tiers={service.pricing} serviceName={service.slug} />

      <PortfolioGrid limit={3} showFilters={false} />

      <CtaSection
        title={`${service.title} nodig?`}
        description="Neem vandaag nog contact op voor een vrijblijvende offerte."
        primaryText="Boek nu"
        primaryHref={`/boeken?service=${service.slug}`}
      />
    </>
  )
}
