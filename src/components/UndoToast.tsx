import { useEffect } from "react";
import { useUi } from "../store/ui";
import { Button } from "./ui";

const LIFETIME_MS = 6000;

/** Short-lived "Checked … · Undo" bar. A new action replaces the old one. */
export function UndoToast() {
  const toast = useUi((s) => s.toast);
  const dismissToast = useUi((s) => s.dismissToast);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => dismissToast(toast.id), LIFETIME_MS);
    return () => clearTimeout(timer);
  }, [toast, dismissToast]);

  if (!toast) return null;
  return (
    <div className="toast toast-undo" role="group" aria-label="Last change">
      <span>{toast.message}</span>
      {toast.undo && (
        <Button
          look=""
          onClick={() => {
            toast.undo?.();
            useUi.getState().announce("Change undone.");
            dismissToast(toast.id);
          }}
        >
          Undo
        </Button>
      )}
    </div>
  );
}
