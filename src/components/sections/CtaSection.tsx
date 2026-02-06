"use client"

import { Button } from "@/components/ui/Button"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { ArrowRight, MessageCircle } from "lucide-react"
import { SITE } from "@/lib/constants"

interface CtaSectionProps {
  title?: string
  description?: string
  primaryText?: string
  primaryHref?: string
  secondaryText?: string
  secondaryHref?: string
}

export function CtaSection({
  title = "Klaar voor een frisse start?",
  description = "Boek vandaag nog en ontdek het verschil dat professionele organisatie maakt.",
  primaryText = "Boek nu",
  primaryHref = "/boeken",
  secondaryText = "WhatsApp ons",
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="section-padding py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative">
              <h2 className="text-[length:var(--font-size-h2)] font-bold mb-4">
                {title}
              </h2>
              <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto">
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  href={primaryHref}
                  variant="secondary"
                  size="lg"
                  className="bg-white text-brand-700 hover:bg-brand-50 border-0"
                >
                  {primaryText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  href={secondaryHref || SITE.whatsapp}
                  variant="ghost"
                  size="lg"
                  className="text-white border border-white/30 hover:bg-white/10"
                >
                  <MessageCircle className="w-4 h-4" />
                  {secondaryText}
                </Button>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}
