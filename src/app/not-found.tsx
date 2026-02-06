import { Button } from "@/components/ui/Button"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-svh flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <p className="text-6xl font-bold text-brand-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">
          Pagina niet gevonden
        </h1>
        <p className="text-neutral-600 mb-8">
          Sorry, deze pagina bestaat niet of is verplaatst.
          Ga terug naar de homepage om verder te kijken.
        </p>
        <Button href="/">
          <Home className="w-4 h-4" />
          Naar homepage
        </Button>
      </div>
    </div>
  )
}
