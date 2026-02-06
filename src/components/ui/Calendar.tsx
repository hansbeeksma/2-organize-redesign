"use client"

import { format, isSameDay } from "date-fns"
import { nl } from "date-fns/locale"
import { cn } from "@/lib/utils"
import { generateDates } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface CalendarProps {
  selectedDate: Date | null
  onSelect: (date: Date) => void
  className?: string
}

export function Calendar({
  selectedDate,
  onSelect,
  className,
}: CalendarProps) {
  const dates = generateDates(14)
  const [startIndex, setStartIndex] = useState(0)
  const visibleDates = dates.slice(startIndex, startIndex + 7)

  const canGoBack = startIndex > 0
  const canGoForward = startIndex + 7 < dates.length

  return (
    <div className={cn("space-y-3", className)}>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setStartIndex(Math.max(0, startIndex - 7))}
          disabled={!canGoBack}
          className="touch-target rounded-full hover:bg-neutral-100 transition-colors disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-neutral-700">
          {format(visibleDates[0], "MMMM yyyy", { locale: nl })}
        </span>
        <button
          type="button"
          onClick={() => setStartIndex(Math.min(dates.length - 7, startIndex + 7))}
          disabled={!canGoForward}
          className="touch-target rounded-full hover:bg-neutral-100 transition-colors disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {visibleDates.map((date) => {
          const isSelected = selectedDate && isSameDay(date, selectedDate)
          const dayName = format(date, "EEEEEE", { locale: nl })
          const dayNum = format(date, "d")

          return (
            <button
              key={date.toISOString()}
              type="button"
              onClick={() => onSelect(date)}
              className={cn(
                "flex flex-col items-center gap-0.5 py-2 px-1 rounded-xl transition-all duration-200",
                isSelected
                  ? "bg-brand-500 text-white shadow-sm"
                  : "hover:bg-neutral-100 text-neutral-700"
              )}
            >
              <span className="text-[10px] uppercase font-medium opacity-70">
                {dayName}
              </span>
              <span className="text-sm font-semibold">{dayNum}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
