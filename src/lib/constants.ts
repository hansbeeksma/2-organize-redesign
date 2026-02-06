import type {
  NavItem,
  Service,
  Review,
  PortfolioItem,
  Stat,
  TeamMember,
  BookingSlot,
} from "./types"

// ─── Navigation ────────────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Diensten", href: "/diensten", icon: "Sparkles" },
  { label: "Boeken", href: "/boeken", icon: "Calendar" },
  { label: "Portfolio", href: "/portfolio", icon: "Images" },
  { label: "Over Ons", href: "/over-ons", icon: "Users" },
  { label: "Contact", href: "/contact", icon: "MessageCircle" },
]

export const MOBILE_NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/", icon: "Home" },
  { label: "Diensten", href: "/diensten", icon: "Sparkles" },
  { label: "Boeken", href: "/boeken", icon: "Calendar" },
  { label: "Portfolio", href: "/portfolio", icon: "Images" },
  { label: "Meer", href: "/contact", icon: "Menu" },
]

// ─── Site Info ─────────────────────────────────────────
export const SITE = {
  name: "2-Organize",
  tagline: "Professionele organisatie, schoonmaak & styling in Amsterdam",
  email: "info@2-organize.nl",
  phone: "+31 6 12345678",
  whatsapp: "https://wa.me/31612345678",
  location: "Amsterdam",
  address: "Amsterdam, Nederland",
  kvk: "12345678",
  responseTime: "Binnen 24 uur",
} as const

// ─── Services ──────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: "schoonmaak",
    slug: "schoonmaak",
    title: "Schoonmaak",
    subtitle: "Professionele reiniging voor een fris resultaat",
    description:
      "Van reguliere schoonmaak tot dieptereiniging. Wij zorgen voor een smetteloos resultaat met aandacht voor elk detail. Perfect voor woningen die verhuurd of verkocht worden, of gewoon voor een frisse start.",
    icon: "Sparkles",
    imageUrl: "/images/schoonmaak.jpg",
    features: [
      "Reguliere schoonmaak",
      "Dieptereiniging",
      "Verhuisschoonmaak",
      "Raamreiniging",
      "Keuken & badkamer specialist",
      "Ecologische schoonmaakmiddelen",
    ],
    pricing: [
      {
        name: "Basis",
        price: "25",
        unit: "per uur",
        description: "Reguliere schoonmaak voor woningen",
        features: [
          "Stofzuigen & dweilen",
          "Sanitair reinigen",
          "Keuken schoonmaken",
          "Stof afnemen",
        ],
      },
      {
        name: "Uitgebreid",
        price: "35",
        unit: "per uur",
        description: "Dieptereiniging met extra aandacht",
        features: [
          "Alles van Basis",
          "Ramen zemen (binnenzijde)",
          "Oven & koelkast",
          "Plinten & deurposten",
          "Kasten binnenkant",
        ],
        popular: true,
      },
      {
        name: "Verhuisklaar",
        price: "vanaf 250",
        unit: "per woning",
        description: "Complete schoonmaak bij verhuizing",
        features: [
          "Alles van Uitgebreid",
          "Alle ramen (binnen & buiten)",
          "Muren afnemen",
          "Vloeren behandelen",
          "Oplevering-garantie",
        ],
      },
    ],
    process: [
      {
        number: 1,
        title: "Gratis inventarisatie",
        description: "We bekijken samen wat er nodig is en maken een plan op maat.",
        icon: "ClipboardList",
      },
      {
        number: 2,
        title: "Offerte op maat",
        description: "Transparante prijsopgave zonder verborgen kosten.",
        icon: "FileText",
      },
      {
        number: 3,
        title: "Schoonmaak",
        description: "Ons team gaat aan de slag met professionele middelen.",
        icon: "Sparkles",
      },
      {
        number: 4,
        title: "Eindcontrole",
        description: "Samen checken we het resultaat tot u tevreden bent.",
        icon: "CheckCircle",
      },
    ],
  },
  {
    id: "styling",
    slug: "styling",
    title: "Stylen & Inrichten",
    subtitle: "Creëer een sfeer die verkoopt",
    description:
      "Home staging en interieur styling die uw woning tot leven brengt. Of u nu verkoopt, verhuurt of gewoon toe bent aan een nieuwe look — wij creëren een sfeer die aanspreekt en verkoopt.",
    icon: "Palette",
    imageUrl: "/images/styling.jpg",
    features: [
      "Home staging voor verkoop",
      "Interieur advies",
      "Meubelarrangement",
      "Accessoires & decoratie",
      "Kleuradvies",
      "Lichtplan",
    ],
    pricing: [
      {
        name: "Advies",
        price: "150",
        unit: "per sessie",
        description: "2 uur persoonlijk stylingadvies",
        features: [
          "Inventarisatie ter plaatse",
          "Kleur- & materiaaladvies",
          "Moodboard",
          "Actiepunten lijst",
        ],
      },
      {
        name: "Home Staging",
        price: "vanaf 500",
        unit: "per woning",
        description: "Complete styling voor verkoop/verhuur",
        features: [
          "Inventarisatie & plan",
          "Meubels herschikken",
          "Accessoires plaatsen",
          "Professionele fotoshoot-klaar",
          "2 weken nazorg",
        ],
        popular: true,
      },
      {
        name: "Full Service",
        price: "vanaf 1.500",
        unit: "per project",
        description: "Complete interieur make-over",
        features: [
          "Alles van Home Staging",
          "Inkoopbegeleiding",
          "Meubels & accessoires regelen",
          "Volledige uitvoering",
          "4 weken nazorg",
        ],
      },
    ],
    process: [
      {
        number: 1,
        title: "Kennismaking",
        description: "We bespreken uw wensen, stijl en budget.",
        icon: "Heart",
      },
      {
        number: 2,
        title: "Concept & Moodboard",
        description: "Een visueel plan dat u inspireert en overtuigt.",
        icon: "Palette",
      },
      {
        number: 3,
        title: "Uitvoering",
        description: "Wij regelen alles van inkoop tot plaatsing.",
        icon: "Hammer",
      },
      {
        number: 4,
        title: "Oplevering",
        description: "Het eindresultaat dat u verwachtingen overtreft.",
        icon: "Star",
      },
    ],
  },
  {
    id: "organisatie",
    slug: "organisatie",
    title: "Reorganisatie & Re-styling",
    subtitle: "Structuur en rust in uw ruimte",
    description:
      "Moeite met opruimen of organiseren? Wij helpen u structuur te brengen in uw woning of kantoor. Van kastindeling tot complete reorganisatie — wij zorgen voor een opgeruimde, functionele ruimte.",
    icon: "LayoutGrid",
    imageUrl: "/images/organisatie.jpg",
    features: [
      "Kastindeling & opruimen",
      "Garderobe organisatie",
      "Kantoor inrichting",
      "Ruimte optimalisatie",
      "Declutter begeleiding",
      "Onderhoudsplan",
    ],
    pricing: [
      {
        name: "Quick Fix",
        price: "35",
        unit: "per uur",
        description: "Gerichte reorganisatie van één ruimte",
        features: [
          "1 ruimte naar keuze",
          "Opruimen & sorteren",
          "Indeling optimaliseren",
          "Tips voor onderhoud",
        ],
      },
      {
        name: "Transformatie",
        price: "vanaf 400",
        unit: "per project",
        description: "Complete reorganisatie van meerdere ruimtes",
        features: [
          "Tot 3 ruimtes",
          "Declutter begeleiding",
          "Nieuwe indeling",
          "Opbergsystemen advies",
          "Follow-up na 2 weken",
        ],
        popular: true,
      },
      {
        name: "Zakelijk",
        price: "op maat",
        unit: "per offerte",
        description: "Kantoor & bedrijfsruimte organisatie",
        features: [
          "Werkplekoptimalisatie",
          "Archief reorganisatie",
          "Ergonomie advies",
          "Team workshop",
          "Maandelijkse check-in",
        ],
      },
    ],
    process: [
      {
        number: 1,
        title: "Intake gesprek",
        description: "We brengen de situatie in kaart en stellen doelen.",
        icon: "Target",
      },
      {
        number: 2,
        title: "Plan van aanpak",
        description: "Een helder stappenplan voor uw reorganisatie.",
        icon: "Map",
      },
      {
        number: 3,
        title: "Samen aan de slag",
        description: "Wij begeleiden u door het hele proces.",
        icon: "HandHelping",
      },
      {
        number: 4,
        title: "Nazorg",
        description: "Tips en check-in om het resultaat te behouden.",
        icon: "Shield",
      },
    ],
  },
]

// ─── Reviews ───────────────────────────────────────────
export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Lisa van der Berg",
    rating: 5,
    text: "Fantastisch werk! Mijn appartement was verhuisklaar in één dag. Elk hoekje glom. De oplevering werd zonder problemen goedgekeurd.",
    service: "Schoonmaak",
    date: "2025-12-15",
    verified: true,
  },
  {
    id: "r2",
    author: "Mark de Vries",
    rating: 5,
    text: "Door de home staging verkochten we ons huis binnen twee weken boven de vraagprijs. Het verschil was ongelooflijk — echt professioneel.",
    service: "Styling",
    date: "2025-11-28",
    verified: true,
  },
  {
    id: "r3",
    author: "Sarah Jansen",
    rating: 4,
    text: "Eindelijk orde in mijn garderobekamer! Ze dacht echt mee over praktische oplossingen. Het voelt als een nieuwe ruimte.",
    service: "Organisatie",
    date: "2026-01-10",
    verified: true,
  },
  {
    id: "r4",
    author: "Pieter Bakker",
    rating: 5,
    text: "Al maanden gebruik ik 2-Organize voor de wekelijkse schoonmaak van mijn kantoor. Betrouwbaar, grondig en flexibel.",
    service: "Schoonmaak",
    date: "2026-01-22",
    verified: true,
  },
  {
    id: "r5",
    author: "Anne Willems",
    rating: 5,
    text: "De complete interieur make-over was een droom. Van moodboard tot oplevering: alles perfect geregeld. Onze woonkamer is niet meer te herkennen!",
    service: "Styling",
    date: "2025-10-05",
    verified: true,
  },
  {
    id: "r6",
    author: "Tom Hendriks",
    rating: 4,
    text: "Goede reorganisatie van ons thuiskantoor. Praktische oplossingen en prettige samenwerking. Aanrader voor iedereen die structuur zoekt.",
    service: "Organisatie",
    date: "2026-01-30",
    verified: true,
  },
]

// ─── Portfolio ─────────────────────────────────────────
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Penthouse Zuidas",
    category: "Schoonmaak",
    beforeImage: "/images/portfolio/penthouse-before.jpg",
    afterImage: "/images/portfolio/penthouse-after.jpg",
    description: "Dieptereiniging van een penthouse na verbouwing. Van bouwstof naar showroom-klaar.",
  },
  {
    id: "p2",
    title: "Herenhuis Oud-Zuid",
    category: "Styling",
    beforeImage: "/images/portfolio/herenhuis-before.jpg",
    afterImage: "/images/portfolio/herenhuis-after.jpg",
    description: "Home staging voor verkoop. Het huis verkocht binnen 10 dagen boven vraagprijs.",
  },
  {
    id: "p3",
    title: "Studio De Pijp",
    category: "Organisatie",
    beforeImage: "/images/portfolio/studio-before.jpg",
    afterImage: "/images/portfolio/studio-after.jpg",
    description: "Complete reorganisatie van een compacte studio. Slimme opbergoplossingen maximaliseren de ruimte.",
  },
  {
    id: "p4",
    title: "Familiewoning Jordaan",
    category: "Schoonmaak",
    beforeImage: "/images/portfolio/familie-before.jpg",
    afterImage: "/images/portfolio/familie-after.jpg",
    description: "Verhuisschoonmaak met oplevering-garantie. Alles in één dag klaar.",
  },
  {
    id: "p5",
    title: "Loft Haarlemmerbuurt",
    category: "Styling",
    beforeImage: "/images/portfolio/loft-before.jpg",
    afterImage: "/images/portfolio/loft-after.jpg",
    description: "Verhuur-styling voor een industriële loft. Warm en uitnodigend gemaakt met bestaande meubels.",
  },
  {
    id: "p6",
    title: "Kantoor Centrum",
    category: "Organisatie",
    beforeImage: "/images/portfolio/kantoor-before.jpg",
    afterImage: "/images/portfolio/kantoor-after.jpg",
    description: "Werkplekoptimalisatie voor een team van 12. Ergonomisch, overzichtelijk en productief.",
  },
  {
    id: "p7",
    title: "Grachtenpand Keizersgracht",
    category: "Styling",
    beforeImage: "/images/portfolio/grachten-before.jpg",
    afterImage: "/images/portfolio/grachten-after.jpg",
    description: "Full service make-over voor een monumentaal grachtenpand. Moderne elegantie met historisch karakter.",
  },
  {
    id: "p8",
    title: "Appartement Oost",
    category: "Schoonmaak",
    beforeImage: "/images/portfolio/appartement-before.jpg",
    afterImage: "/images/portfolio/appartement-after.jpg",
    description: "Wekelijkse schoonmaak voor een drukke professional. Consistente kwaliteit, altijd betrouwbaar.",
  },
  {
    id: "p9",
    title: "Garderobe Amstelveen",
    category: "Organisatie",
    beforeImage: "/images/portfolio/garderobe-before.jpg",
    afterImage: "/images/portfolio/garderobe-after.jpg",
    description: "Van chaos naar sereniteit. Complete garderobe reorganisatie met op maat gemaakt systeem.",
  },
]

// ─── Stats ─────────────────────────────────────────────
export const STATS: Stat[] = [
  { value: "500", label: "Tevreden klanten", suffix: "+" },
  { value: "4.9", label: "Gemiddelde beoordeling" },
  { value: "8", label: "Jaar ervaring" },
  { value: "1200", label: "Projecten afgerond", suffix: "+" },
]

// ─── Team ──────────────────────────────────────────────
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Emma van Dijk",
    role: "Oprichtster & Lead Organizer",
    bio: "Met 8 jaar ervaring in professionele organisatie en styling heeft Emma haar passie voor orde en schoonheid omgezet in 2-Organize. Haar oog voor detail en klantgerichte aanpak maken elk project bijzonder.",
    imageUrl: "/images/team/emma.jpg",
  },
  {
    name: "Sophie Mulder",
    role: "Senior Stylist",
    bio: "Sophie combineert haar achtergrond in interieurontwerp met praktische styling. Gespecialiseerd in home staging en verkoopstyling.",
    imageUrl: "/images/team/sophie.jpg",
  },
  {
    name: "Lucas Peters",
    role: "Schoonmaak Coördinator",
    bio: "Lucas leidt ons schoonmaakteam en garandeert kwaliteit bij elk project. Zijn systematische aanpak zorgt voor een consistent, hoog resultaat.",
    imageUrl: "/images/team/lucas.jpg",
  },
]

// ─── Booking Slots ─────────────────────────────────────
export const BOOKING_SLOTS: BookingSlot[] = [
  { time: "08:00", available: true },
  { time: "09:00", available: true },
  { time: "10:00", available: true },
  { time: "11:00", available: false },
  { time: "12:00", available: true },
  { time: "13:00", available: true },
  { time: "14:00", available: false },
  { time: "15:00", available: true },
  { time: "16:00", available: true },
  { time: "17:00", available: true },
]

// ─── USPs ──────────────────────────────────────────────
export const USPS = [
  {
    icon: "ShieldCheck",
    title: "Betrouwbaar & Verzekerd",
    description: "Volledig verzekerd en betrouwbare service. Altijd op tijd, altijd professioneel.",
  },
  {
    icon: "Leaf",
    title: "Ecologisch Verantwoord",
    description: "Wij werken met milieuvriendelijke schoonmaakmiddelen en duurzame materialen.",
  },
  {
    icon: "Clock",
    title: "Flexibele Planning",
    description: "Boek wanneer het u uitkomt. Avonden en weekenden mogelijk in overleg.",
  },
  {
    icon: "Award",
    title: "Kwaliteitsgarantie",
    description: "Niet tevreden? Dan komen we terug. Uw tevredenheid is onze prioriteit.",
  },
] as const

// ─── Process (General) ─────────────────────────────────
export const GENERAL_PROCESS = [
  {
    number: 1,
    title: "Neem contact op",
    description: "Bel, WhatsApp of boek online. Vertel ons wat u nodig heeft.",
    icon: "Phone",
  },
  {
    number: 2,
    title: "Gratis adviesgesprek",
    description: "We komen langs voor een vrijblijvende inventarisatie en offerte.",
    icon: "MessageCircle",
  },
  {
    number: 3,
    title: "Wij gaan aan de slag",
    description: "Op de afgesproken datum komen we met ons team en alle benodigdheden.",
    icon: "Hammer",
  },
  {
    number: 4,
    title: "U geniet van het resultaat",
    description: "Een fris, georganiseerd en stijlvol huis of kantoor.",
    icon: "PartyPopper",
  },
] as const

// ─── CTA Texts ─────────────────────────────────────────
export const CTA = {
  homepage: {
    title: "Klaar voor een frisse start?",
    description: "Boek vandaag nog en ontdek het verschil dat professionele organisatie maakt.",
    primary: "Boek nu",
    secondary: "Bekijk diensten",
  },
  services: {
    title: "Vragen over onze diensten?",
    description: "Neem vrijblijvend contact op. We denken graag met u mee.",
    primary: "Contact opnemen",
    secondary: "WhatsApp ons",
  },
  portfolio: {
    title: "Overtuigd door onze resultaten?",
    description: "Laat ons ook uw ruimte transformeren.",
    primary: "Boek een afspraak",
    secondary: "Bel ons",
  },
} as const

// ─── Footer ────────────────────────────────────────────
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} 2-Organize. Alle rechten voorbehouden.`,
  tagline: "Professionele organisatie, schoonmaak & styling in Amsterdam",
  columns: [
    {
      title: "Diensten",
      links: [
        { label: "Schoonmaak", href: "/diensten/schoonmaak" },
        { label: "Stylen & Inrichten", href: "/diensten/styling" },
        { label: "Reorganisatie", href: "/diensten/organisatie" },
      ],
    },
    {
      title: "Bedrijf",
      links: [
        { label: "Over ons", href: "/over-ons" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "info@2-organize.nl", href: "mailto:info@2-organize.nl" },
        { label: "+31 6 12345678", href: "tel:+31612345678" },
        { label: "WhatsApp", href: "https://wa.me/31612345678" },
      ],
    },
  ],
} as const

// ─── Portfolio Categories ──────────────────────────────
export const PORTFOLIO_CATEGORIES = [
  { label: "Alle", value: "alle" },
  { label: "Schoonmaak", value: "Schoonmaak" },
  { label: "Styling", value: "Styling" },
  { label: "Organisatie", value: "Organisatie" },
] as const
