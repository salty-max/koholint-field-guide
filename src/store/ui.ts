import { create } from "zustand";

export type DialogState =
  | { kind: "settings" }
  | { kind: "confirm"; title: string; explanation: string; label: string; danger?: boolean; onConfirm: () => void }
  | null;

interface UiStore {
  /** Message for the polite live region. */
  announcement: string;
  announce: (text: string) => void;
  dialog: DialogState;
  openDialog: (dialog: NonNullable<DialogState>) => void;
  closeDialog: () => void;
}

export const useUi = create<UiStore>((set) => ({
  announcement: "",
  announce: (announcement) => set({ announcement }),
  dialog: null,
  openDialog: (dialog) => set({ dialog }),
  closeDialog: () => set({ dialog: null }),
}));
