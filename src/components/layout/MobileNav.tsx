"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MOBILE_NAV_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import {
  Home,
  Sparkles,
  Calendar,
  Images,
  Menu,
} from "lucide-react"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  Sparkles,
  Calendar,
  Images,
  Menu,
}

export function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-surface border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="flex items-center justify-around h-16">
        {MOBILE_NAV_ITEMS.map((item) => {
          const Icon = iconMap[item.icon || "Home"]
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-lg transition-colors min-w-[3.5rem]",
                isActive
                  ? "text-brand-600"
                  : "text-neutral-500 hover:text-neutral-700"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
