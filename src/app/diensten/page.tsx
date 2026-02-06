"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CtaSection } from "@/components/sections/CtaSection"
import { CTA } from "@/lib/constants"

export default function DienstenPage() {
  return (
    <>
      <HeroSection
        title="Onze diensten"
        subtitle="Van professionele schoonmaak tot interieur styling en reorganisatie. Ontdek wat wij voor u kunnen betekenen."
        compact
      />
      <ServicesGrid showAll />
      <CtaSection
        title={CTA.services.title}
        description={CTA.services.description}
        primaryText={CTA.services.primary}
        primaryHref="/contact"
        secondaryText={CTA.services.secondary}
      />
    </>
  )
}
