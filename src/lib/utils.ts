import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: string): string {
  if (price.startsWith("vanaf")) return price
  if (price === "op maat") return price
  return `€${price}`
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

export function generateDates(days: number): Date[] {
  const dates: Date[] = []
  const today = new Date()
  for (let i = 1; i <= days; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    if (date.getDay() !== 0) {
      dates.push(date)
    }
  }
  return dates
}
