import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
  value: number
  max?: number
  size?: "sm" | "md"
  className?: string
}

export function Rating({
  value,
  max = 5,
  size = "sm",
  className,
}: RatingProps) {
  const sizeClass = size === "sm" ? "w-4 h-4" : "w-5 h-5"

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          className={cn(
            sizeClass,
            i < Math.floor(value)
              ? "fill-brand-400 text-brand-400"
              : i < value
                ? "fill-brand-200 text-brand-400"
                : "fill-neutral-200 text-neutral-200"
          )}
        />
      ))}
    </div>
  )
}
