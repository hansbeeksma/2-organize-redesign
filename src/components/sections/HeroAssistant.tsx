"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { springGentle } from "@/lib/motion"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const SUGGESTED_QUESTIONS = [
  "Wat kost een schoonmaak?",
  "Hoe werkt home staging?",
  "Kan ik online boeken?",
  "Werken jullie in heel Amsterdam?",
]

const KNOWLEDGE_BASE: Record<string, string> = {
  schoonmaak:
    "Onze schoonmaakservice begint vanaf €25/uur voor reguliere schoonmaak. Voor dieptereiniging rekenen we €35/uur, en een complete verhuisschoonmaak begint vanaf €250 per woning. We gebruiken uitsluitend ecologische schoonmaakmiddelen.",
  styling:
    "Home staging & interieur styling helpt uw woning sneller en voor een betere prijs te verkopen. Een adviesgesprek kost €150, een complete home staging voor verkoop vanaf €750. We regelen meubelverhuur, decoratie en kleuradvies.",
  organisatie:
    "Bij onze reorganisatie-service brengen we structuur en rust in uw ruimte. Van kastindeling (€200) tot complete garderobe organisatie (€350) en kantoorinrichting (vanaf €500). We beginnen altijd met een gratis inventarisatie.",
  kosten:
    "Onze tarieven: Schoonmaak vanaf €25/uur, Styling advies vanaf €150, Organisatie vanaf €200. We werken met transparante prijzen — geen verborgen kosten. Vraag een gratis offerte aan!",
  boeken:
    "U kunt direct online een afspraak boeken via onze boekingspagina. Kies uw dienst, een datum en tijd die u uitkomt, en vul uw gegevens in. We bevestigen binnen 24 uur. Avonden en weekenden zijn in overleg mogelijk.",
  amsterdam:
    "Ja, we werken in heel Amsterdam en omgeving! Of het nu gaat om een appartement in de Jordaan, een herenhuis in Oud-Zuid of een kantoor op de Zuidas — wij komen graag bij u langs.",
  proces:
    "Ons werkproces: 1) Gratis inventarisatie — we bekijken samen wat nodig is. 2) Offerte op maat — transparant en zonder verborgen kosten. 3) Uitvoering — ons professionele team gaat aan de slag. 4) Eindcontrole — samen checken we het resultaat.",
  contact:
    "U kunt ons bereiken via: Email: info@2-organize.nl, Telefoon: +31 6 12345678, of stuur ons een WhatsApp. We reageren binnen 24 uur!",
  waarom:
    "Waarom 2-Organize? We zijn al 8 jaar het vertrouwde adres in Amsterdam met 500+ tevreden klanten en een 4.9 ster beoordeling. We zijn volledig verzekerd, werken met ecologische producten en bieden een kwaliteitsgarantie.",
}

function findAnswer(input: string): string {
  const lower = input.toLowerCase()

  if (lower.includes("kost") || lower.includes("prijs") || lower.includes("tarief") || lower.includes("euro"))
    return KNOWLEDGE_BASE.kosten
  if (lower.includes("schoonma") || lower.includes("reiniging") || lower.includes("poets"))
    return KNOWLEDGE_BASE.schoonmaak
  if (lower.includes("styl") || lower.includes("staging") || lower.includes("inricht") || lower.includes("interieur"))
    return KNOWLEDGE_BASE.styling
  if (lower.includes("organis") || lower.includes("opruim") || lower.includes("kast") || lower.includes("garderobe"))
    return KNOWLEDGE_BASE.organisatie
  if (lower.includes("boek") || lower.includes("afspraak") || lower.includes("reserv") || lower.includes("planning"))
    return KNOWLEDGE_BASE.boeken
  if (lower.includes("amsterdam") || lower.includes("locatie") || lower.includes("gebied") || lower.includes("waar"))
    return KNOWLEDGE_BASE.amsterdam
  if (lower.includes("hoe") && lower.includes("werk"))
    return KNOWLEDGE_BASE.proces
  if (lower.includes("contact") || lower.includes("bereik") || lower.includes("bellen") || lower.includes("mail"))
    return KNOWLEDGE_BASE.contact
  if (lower.includes("waarom") || lower.includes("kies") || lower.includes("beter"))
    return KNOWLEDGE_BASE.waarom

  return "Bedankt voor uw vraag! Voor dit specifiek onderwerp raad ik u aan om contact met ons op te nemen via info@2-organize.nl of bel +31 6 12345678. We helpen u graag persoonlijk verder!"
}

export function HeroAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Welkom bij 2-Organize! Ik help u graag met vragen over onze diensten, prijzen of het boeken van een afspraak. Waar kan ik u mee helpen?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  function handleSend(text?: string) {
    const message = text || input.trim()
    if (!message) return

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: message,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setIsTyping(true)

    setTimeout(() => {
      const answer = findAnswer(message)
      const assistantMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: answer,
      }
      setMessages((prev) => [...prev, assistantMsg])
      setIsTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <div className="w-full flex flex-col rounded-2xl overflow-hidden border border-border shadow-lg bg-white" style={{ height: "520px" }}>
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Sparkles className="w-4 h-4" />
        </div>
        <div>
          <p className="font-semibold text-sm">2-Organize Assistent</p>
          <p className="text-xs text-white/80">Altijd beschikbaar</p>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
          <span className="text-xs text-white/80">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-neutral-50/50">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springGentle, duration: 0.3 }}
              className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                  msg.role === "assistant"
                    ? "bg-brand-100 text-brand-600"
                    : "bg-neutral-200 text-neutral-600"
                }`}
              >
                {msg.role === "assistant" ? (
                  <Bot className="w-3.5 h-3.5" />
                ) : (
                  <User className="w-3.5 h-3.5" />
                )}
              </div>
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                  msg.role === "assistant"
                    ? "bg-white border border-border text-neutral-800"
                    : "bg-brand-500 text-white"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-white border border-border rounded-2xl px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-neutral-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions (only when 1 message) */}
      {messages.length === 1 && (
        <div className="px-4 py-2 border-t border-border bg-white flex flex-wrap gap-2">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 rounded-full border border-brand-200 text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors cursor-pointer"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-border bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSend()
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Stel uw vraag..."
            className="flex-1 rounded-xl border border-border px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-400 bg-neutral-50"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-10 h-10 rounded-xl bg-brand-500 text-white flex items-center justify-center hover:bg-brand-600 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  )
}
