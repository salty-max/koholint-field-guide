import { create } from "zustand";

export type DialogState =
  | { kind: "settings" }
  | { kind: "confirm"; title: string; explanation: string; label: string; danger?: boolean; onConfirm: () => void }
  | null;

export interface Toast {
  id: number;
  message: string;
  undo?: () => void;
}

interface UiStore {
  /** Message for the polite live region. */
  announcement: string;
  announce: (text: string) => void;
  dialog: DialogState;
  openDialog: (dialog: NonNullable<DialogState>) => void;
  closeDialog: () => void;
  toast: Toast | null;
  showToast: (message: string, undo?: () => void) => void;
  dismissToast: (id?: number) => void;
}

let toastId = 0;

export const useUi = create<UiStore>((set) => ({
  announcement: "",
  announce: (announcement) => set({ announcement }),
  dialog: null,
  openDialog: (dialog) => set({ dialog }),
  closeDialog: () => set({ dialog: null }),
  toast: null,
  showToast: (message, undo) => set({ toast: { id: ++toastId, message, undo } }),
  dismissToast: (id) => set((s) => (id === undefined || s.toast?.id === id ? { toast: null } : s)),
}));
