"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideInFromRight, springGentle } from "@/lib/motion"
import { ProgressSteps } from "@/components/ui/ProgressSteps"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Calendar } from "@/components/ui/Calendar"
import { SERVICES, BOOKING_SLOTS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import type { BookingFormData } from "@/lib/types"
import {
  Sparkles,
  Palette,
  LayoutGrid,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  CalendarDays,
} from "lucide-react"

const STEPS = ["Dienst", "Datum & Tijd", "Gegevens", "Bevestiging"]

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Palette,
  LayoutGrid,
}

interface BookingFlowProps {
  initialService?: string
}

export function BookingFlow({ initialService }: BookingFlowProps) {
  const [step, setStep] = useState(initialService ? 1 : 0)
  const [formData, setFormData] = useState<BookingFormData>({
    service: initialService || "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    notes: "",
  })
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [confirmed, setConfirmed] = useState(false)

  const selectedService = SERVICES.find((s) => s.slug === formData.service)

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const canProceed = () => {
    switch (step) {
      case 0:
        return !!formData.service
      case 1:
        return !!selectedDate && !!formData.time
      case 2:
        return !!formData.name && !!formData.email && !!formData.phone
      default:
        return true
    }
  }

  const handleConfirm = () => {
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ...springGentle, delay: 0.1 }}
          className="w-20 h-20 rounded-full bg-accent-100 flex items-center justify-center mx-auto mb-8"
        >
          <CheckCircle className="w-10 h-10 text-accent-500" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-neutral-900 mb-3"
        >
          Boeking bevestigd!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-600 mb-8"
        >
          We hebben uw boeking ontvangen en nemen binnen 24 uur contact met u op ter bevestiging.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button href="/" variant="secondary">
            Terug naar home
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <ProgressSteps steps={STEPS} currentStep={step} className="mb-10" />

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          variants={slideInFromRight}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Step 0: Service Selection */}
          {step === 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Kies een dienst
              </h2>
              {SERVICES.map((service) => {
                const Icon = iconMap[service.icon] || Sparkles
                const isSelected = formData.service === service.slug
                return (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => updateField("service", service.slug)}
                    className={cn(
                      "w-full flex items-center gap-4 p-5 rounded-xl border transition-all text-left",
                      isSelected
                        ? "border-brand-500 bg-brand-50 ring-1 ring-brand-500/20"
                        : "border-border hover:border-neutral-300 hover:bg-neutral-50"
                    )}
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        isSelected ? "bg-brand-500 text-white" : "bg-neutral-100"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-neutral-900">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted mt-0.5">
                        {service.subtitle}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                        isSelected
                          ? "border-brand-500 bg-brand-500"
                          : "border-neutral-300"
                      )}
                    >
                      {isSelected && (
                        <CheckCircle className="w-3 h-3 text-white" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                  Kies een datum
                </h2>
                <p className="text-sm text-muted mb-4">
                  <CalendarDays className="w-4 h-4 inline mr-1" />
                  Beschikbare data in de komende 2 weken
                </p>
                <Calendar
                  selectedDate={selectedDate}
                  onSelect={(date) => {
                    setSelectedDate(date)
                    updateField("date", date.toISOString())
                  }}
                />
              </div>

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={springGentle}
                >
                  <h3 className="font-medium text-neutral-900 mb-3">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Kies een tijdstip
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {BOOKING_SLOTS.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => updateField("time", slot.time)}
                        className={cn(
                          "py-2.5 rounded-lg text-sm font-medium transition-all",
                          formData.time === slot.time
                            ? "bg-brand-500 text-white shadow-sm"
                            : slot.available
                              ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                              : "bg-neutral-50 text-neutral-300 cursor-not-allowed line-through"
                        )}
                      >
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          )}

          {/* Step 2: Details */}
          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Uw gegevens
              </h2>
              <Input
                label="Naam"
                name="name"
                placeholder="Uw volledige naam"
                value={formData.name}
                onChange={(v) => updateField("name", v)}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="E-mail"
                  name="email"
                  type="email"
                  placeholder="uw@email.nl"
                  value={formData.email}
                  onChange={(v) => updateField("email", v)}
                  required
                />
                <Input
                  label="Telefoon"
                  name="phone"
                  type="tel"
                  placeholder="+31 6 ..."
                  value={formData.phone}
                  onChange={(v) => updateField("phone", v)}
                  required
                />
              </div>
              <Input
                label="Adres"
                name="address"
                placeholder="Straatnaam en huisnummer"
                value={formData.address}
                onChange={(v) => updateField("address", v)}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input
                  label="Postcode"
                  name="postalCode"
                  placeholder="1234 AB"
                  value={formData.postalCode}
                  onChange={(v) => updateField("postalCode", v)}
                />
                <Input
                  label="Stad"
                  name="city"
                  placeholder="Amsterdam"
                  value={formData.city}
                  onChange={(v) => updateField("city", v)}
                />
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-neutral-900 mb-6">
                Controleer uw boeking
              </h2>

              <div className="bg-neutral-50 rounded-xl p-6 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Dienst</span>
                  <span className="font-medium text-neutral-900">
                    {selectedService?.title}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Datum</span>
                  <span className="font-medium text-neutral-900">
                    {selectedDate
                      ? selectedDate.toLocaleDateString("nl-NL", {
                          weekday: "long",
                          day: "numeric",
                          month: "long",
                        })
                      : "-"}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Tijd</span>
                  <span className="font-medium text-neutral-900">
                    {formData.time || "-"}
                  </span>
                </div>
                <div className="border-t border-border pt-4 flex justify-between text-sm">
                  <span className="text-muted">Naam</span>
                  <span className="font-medium text-neutral-900">
                    {formData.name}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">E-mail</span>
                  <span className="font-medium text-neutral-900">
                    {formData.email}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted">Telefoon</span>
                  <span className="font-medium text-neutral-900">
                    {formData.phone}
                  </span>
                </div>
                {formData.address && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Adres</span>
                    <span className="font-medium text-neutral-900 text-right">
                      {formData.address}
                      {formData.postalCode && `, ${formData.postalCode}`}
                      {formData.city && ` ${formData.city}`}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-xs text-muted text-center">
                Na bevestiging ontvangt u een e-mail met de details van uw boeking.
                Annuleren kan tot 24 uur van tevoren kosteloos.
              </p>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-10 pt-6 border-t border-border">
        {step > 0 ? (
          <Button
            variant="ghost"
            onClick={() => setStep(step - 1)}
          >
            <ArrowLeft className="w-4 h-4" />
            Vorige
          </Button>
        ) : (
          <div />
        )}

        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
          >
            Volgende
            <ArrowRight className="w-4 h-4" />
          </Button>
        ) : (
          <Button
            variant="accent"
            onClick={handleConfirm}
          >
            <CheckCircle className="w-4 h-4" />
            Bevestig boeking
          </Button>
        )}
      </div>
    </div>
  )
}
