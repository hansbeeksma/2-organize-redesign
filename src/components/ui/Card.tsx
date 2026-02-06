"use client"

import { cn } from "@/lib/utils"

type CardVariant = "default" | "elevated" | "outlined" | "pricing"

const variantStyles: Record<CardVariant, string> = {
  default: "bg-white rounded-xl",
  elevated: "bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300",
  outlined: "bg-white rounded-xl border border-border",
  pricing: "bg-white rounded-xl border border-border relative overflow-hidden",
}

interface CardProps {
  variant?: CardVariant
  children: React.ReactNode
  className?: string
  padding?: boolean
}

export function Card({
  variant = "default",
  children,
  className,
  padding = true,
}: CardProps) {
  return (
    <div
      className={cn(
        variantStyles[variant],
        padding && "p-6",
        className
      )}
    >
      {children}
    </div>
  )
}

export function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("mb-4", className)}>{children}</div>
}

export function CardTitle({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3 className={cn("text-lg font-semibold text-neutral-900", className)}>
      {children}
    </h3>
  )
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p className={cn("text-sm text-muted mt-1", className)}>{children}</p>
  )
}
