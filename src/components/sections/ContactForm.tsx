"use client"

import { useState } from "react"
import { Input, Textarea } from "@/components/ui/Input"
import { Select } from "@/components/ui/Select"
import { Button } from "@/components/ui/Button"
import { FadeInUp } from "@/components/motion/FadeInUp"
import { SERVICES, SITE } from "@/lib/constants"
import { MessageCircle, Send, CheckCircle } from "lucide-react"
import type { ContactFormData } from "@/lib/types"

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const serviceOptions = SERVICES.map((s) => ({
    label: s.title,
    value: s.slug,
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section-padding section-spacing">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent-500" />
          </div>
          <h2 className="text-2xl font-bold text-neutral-900 mb-3">
            Bericht verzonden!
          </h2>
          <p className="text-neutral-600">
            Bedankt voor uw bericht. We nemen binnen 24 uur contact met u op.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding section-spacing">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <FadeInUp>
            <h2 className="text-[length:var(--font-size-h2)] font-bold text-neutral-900 mb-2">
              Neem contact op
            </h2>
            <p className="text-neutral-600 mb-8">
              Vul het formulier in of stuur ons een WhatsApp bericht.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Naam"
                name="name"
                placeholder="Uw volledige naam"
                value={formData.name}
                onChange={(v) => setFormData({ ...formData, name: v })}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="uw@email.nl"
                  value={formData.email}
                  onChange={(v) => setFormData({ ...formData, email: v })}
                  required
                />
                <Input
                  label="Telefoon"
                  name="phone"
                  type="tel"
                  placeholder="+31 6 ..."
                  value={formData.phone}
                  onChange={(v) => setFormData({ ...formData, phone: v })}
                />
              </div>
              <Select
                label="Dienst"
                name="service"
                options={serviceOptions}
                value={formData.service}
                onChange={(v) => setFormData({ ...formData, service: v })}
                placeholder="Waar kunnen we u mee helpen?"
              />
              <Textarea
                label="Bericht"
                name="message"
                placeholder="Vertel ons over uw wensen..."
                value={formData.message}
                onChange={(v) => setFormData({ ...formData, message: v })}
                required
              />
              <Button type="submit" size="lg" fullWidth>
                Verstuur bericht
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </FadeInUp>

          {/* Info side */}
          <FadeInUp delay={0.2}>
            <div className="bg-neutral-50 rounded-2xl p-8 lg:p-10 h-fit lg:sticky lg:top-24">
              <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                Direct contact
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">
                    WhatsApp (snelst)
                  </p>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-600 font-medium hover:text-accent-700 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Stuur een WhatsApp
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">
                    E-mail
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">
                    Telefoon
                  </p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>

                <div>
                  <p className="text-sm font-medium text-neutral-700 mb-1">
                    Locatie
                  </p>
                  <p className="text-neutral-600">{SITE.address}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted">
                    Reactietijd: {SITE.responseTime}
                  </p>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
