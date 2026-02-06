"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { StatsBar } from "@/components/sections/StatsBar"
import { ProcessSteps } from "@/components/sections/ProcessSteps"
import { CtaSection } from "@/components/sections/CtaSection"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { StaggerChildren, StaggerItem } from "@/components/motion/StaggerChildren"
import { Avatar } from "@/components/ui/Avatar"
import { TEAM_MEMBERS, GENERAL_PROCESS } from "@/lib/constants"

export default function OverOnsPage() {
  return (
    <>
      <HeroSection
        title="Over 2-Organize"
        subtitle="Met passie voor orde, schoonheid en functionaliteit transformeren wij ruimtes in Amsterdam. Al 8 jaar het vertrouwde adres voor particulieren en bedrijven."
        compact
      />

      <StatsBar />

      {/* Team Section */}
      <section className="section-padding section-spacing">
        <div className="max-w-7xl mx-auto">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900">
              Ons team
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
              Een toegewijd team van professionals dat elke ruimte met zorg behandelt.
            </p>
          </FadeInUp>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl border border-border p-6 text-center">
                  <Avatar
                    name={member.name}
                    size="lg"
                    className="mx-auto mb-4 w-20 h-20 text-lg"
                  />
                  <h3 className="font-semibold text-neutral-900">{member.name}</h3>
                  <p className="text-sm text-brand-600 mb-3">{member.role}</p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <ProcessSteps
        steps={GENERAL_PROCESS.map((s) => ({
          number: s.number,
          title: s.title,
          description: s.description,
          icon: s.icon,
        }))}
        title="Zo werken wij"
        subtitle="Van eerste contact tot eindresultaat — u bent altijd betrokken"
      />

      <CtaSection
        title="Samen aan de slag?"
        description="Neem contact op voor een vrijblijvend adviesgesprek."
        primaryText="Neem contact op"
        primaryHref="/contact"
      />
    </>
  )
}
