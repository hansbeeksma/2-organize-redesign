import { cn } from "@/lib/utils"

type BadgeVariant = "default" | "brand" | "accent" | "verified"

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-neutral-100 text-neutral-700",
  brand: "bg-brand-100 text-brand-700",
  accent: "bg-accent-100 text-accent-700",
  verified: "bg-accent-50 text-accent-600",
}

interface BadgeProps {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

export function Badge({
  variant = "default",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
