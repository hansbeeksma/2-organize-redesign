import { cn } from "@/lib/utils"

interface AvatarProps {
  name: string
  imageUrl?: string
  size?: "sm" | "md" | "lg"
  className?: string
}

const sizeStyles = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)
}

function getColorFromName(name: string): string {
  const colors = [
    "bg-brand-200 text-brand-800",
    "bg-accent-200 text-accent-800",
    "bg-neutral-200 text-neutral-700",
    "bg-brand-100 text-brand-700",
    "bg-accent-100 text-accent-700",
  ]
  const index = name.charCodeAt(0) % colors.length
  return colors[index]
}

export function Avatar({
  name,
  imageUrl,
  size = "md",
  className,
}: AvatarProps) {
  if (imageUrl) {
    return (
      <div
        className={cn(
          "rounded-full overflow-hidden flex-shrink-0 bg-neutral-200",
          sizeStyles[size],
          className
        )}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-semibold flex-shrink-0",
        sizeStyles[size],
        getColorFromName(name),
        className
      )}
    >
      {getInitials(name)}
    </div>
  )
}
