import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface ProgressStepsProps {
  steps: string[]
  currentStep: number
  className?: string
}

export function ProgressSteps({
  steps,
  currentStep,
  className,
}: ProgressStepsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep
        const isCurrent = index === currentStep

        return (
          <div key={step} className="flex items-center gap-2 flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                  isCompleted && "bg-accent-500 text-white",
                  isCurrent && "bg-brand-500 text-white ring-4 ring-brand-100",
                  !isCompleted && !isCurrent && "bg-neutral-200 text-neutral-500"
                )}
              >
                {isCompleted ? (
                  <Check className="w-4 h-4" />
                ) : (
                  index + 1
                )}
              </div>
              <span
                className={cn(
                  "text-xs text-center hidden sm:block",
                  isCurrent ? "text-brand-600 font-medium" : "text-muted"
                )}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 rounded-full transition-colors duration-300",
                  isCompleted ? "bg-accent-500" : "bg-neutral-200"
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
