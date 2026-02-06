"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { ContactForm } from "@/components/sections/ContactForm"

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact"
        subtitle="Vragen, offertes of gewoon even kennismaken? We horen graag van u."
        compact
      />
      <ContactForm />
    </>
  )
}
