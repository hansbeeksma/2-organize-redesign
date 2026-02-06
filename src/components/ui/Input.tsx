"use client"

import { cn } from "@/lib/utils"

interface InputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  className?: string
}

export function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className,
}: InputProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={cn(
          "w-full px-4 py-3 rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400",
          "transition-all duration-200 outline-none",
          "focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
          error ? "border-error" : "border-border-strong",
          "min-h-[2.75rem]"
        )}
      />
      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}

interface TextareaProps {
  label: string
  name: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  rows?: number
  className?: string
}

export function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  rows = 4,
  className,
}: TextareaProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        rows={rows}
        className={cn(
          "w-full px-4 py-3 rounded-lg border bg-white text-neutral-900 placeholder:text-neutral-400 resize-y",
          "transition-all duration-200 outline-none",
          "focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
          error ? "border-error" : "border-border-strong",
          className
        )}
      />
      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}
