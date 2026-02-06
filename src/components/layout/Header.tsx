"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { NAV_ITEMS, SITE } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Menu, X, Phone } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Desktop Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 hidden lg:block",
          isScrolled
            ? "glass-surface border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-lg font-bold text-neutral-900"
            >
              <Image
                src="/logo.png"
                alt="2-Organize"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            <nav className="flex items-center gap-1">
              {NAV_ITEMS.filter((item) => item.label !== "Home").map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                    pathname === item.href
                      ? "text-brand-600 bg-brand-50"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{SITE.phone}</span>
              </a>
              <Button href="/boeken" size="sm">
                Boek nu
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header - minimal top bar */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 lg:hidden",
          isScrolled || isMobileMenuOpen
            ? "glass-surface border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4">
          <Link
            href="/"
            className="text-lg font-bold text-neutral-900"
          >
            <Image
              src="/logo.png"
              alt="2-Organize"
              width={140}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="touch-target rounded-lg hover:bg-neutral-100"
            aria-label={isMobileMenuOpen ? "Menu sluiten" : "Menu openen"}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="border-t border-border bg-white px-4 pb-4">
            <nav className="flex flex-col gap-1 pt-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === item.href
                      ? "text-brand-600 bg-brand-50"
                      : "text-neutral-700 hover:bg-neutral-100"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4">
              <Button href="/boeken" fullWidth>
                Boek nu
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
