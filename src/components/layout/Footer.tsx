import Link from "next/link"
import { FOOTER, SITE } from "@/lib/constants"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pb-24 lg:pb-0">
      <div className="max-w-7xl mx-auto section-padding py-12 lg:py-16">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">{SITE.name}</h3>
            <p className="text-sm text-neutral-400 mb-4">
              {FOOTER.tagline}
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{SITE.address}</span>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{SITE.email}</span>
              </a>
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-400 flex-shrink-0" />
                <span>{SITE.phone}</span>
              </a>
            </div>
          </div>

          {/* Columns */}
          {FOOTER.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">{FOOTER.copyright}</p>
          <p className="text-xs text-neutral-500">
            KvK: {SITE.kvk}
          </p>
        </div>
      </div>
    </footer>
  )
}
