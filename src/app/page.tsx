"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { StatsBar } from "@/components/sections/StatsBar"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { WhyChooseUs } from "@/components/sections/WhyChooseUs"
import { CtaSection } from "@/components/sections/CtaSection"

export default function HomePage() {
  return (
    <>
      <HeroSection showAssistant />
      <ServicesGrid />
      <StatsBar />
      <TestimonialsSection />
      <WhyChooseUs />
      <CtaSection />
    </>
  )
}
