"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import { BookingFlow } from "@/components/sections/BookingFlow"

function BookingContent() {
  const searchParams = useSearchParams()
  const service = searchParams.get("service") || undefined

  return (
    <div className="pt-20 lg:pt-24 pb-32 lg:pb-16">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-10">
          <h1 className="text-[length:var(--font-size-h1)] font-bold text-neutral-900">
            Boek een afspraak
          </h1>
          <p className="mt-3 text-neutral-600">
            In een paar stappen uw afspraak inplannen
          </p>
        </div>

        <BookingFlow initialService={service} />
      </div>
    </div>
  )
}

export default function BoekenPage() {
  return (
    <Suspense fallback={<div className="pt-20 lg:pt-24 pb-32 min-h-svh" />}>
      <BookingContent />
    </Suspense>
  )
}
