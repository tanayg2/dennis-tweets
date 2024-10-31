import { create } from "zustand"

export const useLoginModal = create<{
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}>((set) => ({
  isOpen: false,
  onOpenChange: (isOpen) => set({ isOpen }),
}))
