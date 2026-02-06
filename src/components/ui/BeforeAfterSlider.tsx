"use client"

import { useState, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { GripVertical } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Voor",
  afterLabel = "Na",
  className,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    isDragging.current = true
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize select-none",
        className
      )}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (full) */}
      <div
        className="absolute inset-0 bg-neutral-200"
        style={{
          backgroundImage: `url(${afterImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 bg-neutral-300"
        style={{
          backgroundImage: `url(${beforeImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center">
          <GripVertical className="w-5 h-5 text-neutral-400" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </div>
      <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
        {afterLabel}
      </div>
    </div>
  )
}
