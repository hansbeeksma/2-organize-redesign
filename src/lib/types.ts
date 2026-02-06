export interface NavItem {
  label: string
  href: string
  icon?: string
}

export interface Service {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  imageUrl: string
  features: string[]
  pricing: PricingTier[]
  process: ProcessStep[]
}

export interface PricingTier {
  name: string
  price: string
  unit: string
  description: string
  features: string[]
  popular?: boolean
}

export interface Review {
  id: string
  author: string
  avatar?: string
  rating: number
  text: string
  service: string
  date: string
  verified: boolean
}

export interface BookingFormData {
  service: string
  date: string
  time: string
  name: string
  email: string
  phone: string
  address: string
  postalCode: string
  city: string
  notes: string
}

export interface BookingSlot {
  time: string
  available: boolean
}

export interface PortfolioItem {
  id: string
  title: string
  category: string
  beforeImage: string
  afterImage: string
  description: string
}

export interface ProcessStep {
  number: number
  title: string
  description: string
  icon: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  imageUrl?: string
}

export interface Stat {
  value: string
  label: string
  suffix?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}
