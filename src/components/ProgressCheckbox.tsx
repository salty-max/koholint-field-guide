import { useProgress } from "../store/progress";
import { useUi } from "../store/ui";

interface ProgressCheckboxProps {
  id: string;
  rowId: string;
  label?: string;
  fallbackFocusId?: string;
}

export function ProgressCheckbox({ id, rowId, label, fallbackFocusId }: ProgressCheckboxProps) {
  const checked = useProgress((s) => s.data.checks[rowId] === true);
  const setCheck = useProgress((s) => s.setCheck);
  const announce = useUi((s) => s.announce);

  return (
    <input
      id={id}
      type="checkbox"
      aria-label={label}
      checked={checked}
      onChange={(event) => {
        const next = event.currentTarget.checked;
        setCheck(rowId, next);
        announce(next ? "Checked and saved." : "Unchecked and saved.");
        if (fallbackFocusId) {
          requestAnimationFrame(() => {
            if (!document.getElementById(id)) document.getElementById(fallbackFocusId)?.focus({ preventScroll: true });
          });
        }
      }}
    />
  );
}
