import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ReducedMotionProvider } from "@/components/motion/ReducedMotion"
import { Header } from "@/components/layout/Header"
import { MobileNav } from "@/components/layout/MobileNav"
import { Footer } from "@/components/layout/Footer"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "2-Organize | Professionele Organisatie, Schoonmaak & Styling Amsterdam",
  description:
    "Professionele organisatie, schoonmaak en styling in Amsterdam. Van verhuisschoonmaak tot home staging — boek direct online.",
  keywords: [
    "schoonmaak amsterdam",
    "home staging",
    "interieur styling",
    "organisatie",
    "professioneel opruimen",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <ReducedMotionProvider>
          <Header />
          <main className="min-h-svh">{children}</main>
          <Footer />
          <MobileNav />
        </ReducedMotionProvider>
      </body>
    </html>
  )
}
