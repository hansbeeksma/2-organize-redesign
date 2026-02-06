"use client"

import * as Dialog from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  children: React.ReactNode
  className?: string
}

export function Modal({
  open,
  onOpenChange,
  title,
  children,
  className,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className={cn(
            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50",
            "bg-white rounded-2xl shadow-xl p-6 w-[calc(100%-2rem)] max-w-lg max-h-[85vh] overflow-y-auto",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
            className
          )}
        >
          <div className="flex items-center justify-between mb-4">
            {title && (
              <Dialog.Title className="text-lg font-semibold text-neutral-900">
                {title}
              </Dialog.Title>
            )}
            <Dialog.Close className="touch-target rounded-full hover:bg-neutral-100 transition-colors ml-auto">
              <X className="w-5 h-5 text-neutral-500" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
