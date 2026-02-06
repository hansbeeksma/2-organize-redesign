"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { PortfolioGrid } from "@/components/sections/PortfolioGrid"
import { CtaSection } from "@/components/sections/CtaSection"
import { CTA } from "@/lib/constants"

export default function PortfolioPage() {
  return (
    <>
      <HeroSection
        title="Ons portfolio"
        subtitle="Bekijk de transformaties die wij hebben gerealiseerd. Schuif de slider om het verschil te zien."
        compact
      />
      <PortfolioGrid />
      <CtaSection
        title={CTA.portfolio.title}
        description={CTA.portfolio.description}
        primaryText={CTA.portfolio.primary}
        primaryHref="/boeken"
        secondaryText={CTA.portfolio.secondary}
      />
    </>
  )
}
