"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

type Variant = "primary" | "secondary" | "ghost" | "accent"
type Size = "sm" | "md" | "lg"

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-sm hover:shadow-md active:scale-[0.98]",
  secondary:
    "bg-white text-neutral-800 border border-border-strong hover:bg-neutral-100 active:scale-[0.98]",
  ghost:
    "bg-transparent text-neutral-700 hover:bg-neutral-100 active:scale-[0.98]",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-sm hover:shadow-md active:scale-[0.98]",
}

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm min-h-[2.5rem]",
  md: "px-6 py-3 text-base min-h-[2.75rem]",
  lg: "px-8 py-3.5 text-base min-h-[3rem]",
}

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
  fullWidth?: boolean
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer select-none",
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    disabled && "opacity-50 cursor-not-allowed",
    className
  )

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
