"use client"

import { cn } from "@/lib/utils"

interface SelectOption {
  label: string
  value: string
}

interface SelectProps {
  label: string
  name: string
  options: SelectOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  error?: string
  required?: boolean
  className?: string
}

export function Select({
  label,
  name,
  options,
  value,
  onChange,
  placeholder = "Selecteer...",
  error,
  required = false,
  className,
}: SelectProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={name}
        className="text-sm font-medium text-neutral-700"
      >
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className={cn(
          "w-full px-4 py-3 rounded-lg border bg-white text-neutral-900 appearance-none",
          "transition-all duration-200 outline-none cursor-pointer",
          "focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500",
          error ? "border-error" : "border-border-strong",
          "min-h-[2.75rem]",
          "bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239A8E7D%22%20stroke-width%3D%222%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25rem]",
          !value && "text-neutral-400"
        )}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-xs text-error">{error}</p>
      )}
    </div>
  )
}
