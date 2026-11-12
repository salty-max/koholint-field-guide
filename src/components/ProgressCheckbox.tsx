import { byId } from "../lib/guide";
import { useProgress } from "../store/progress";
import { useUi } from "../store/ui";

interface ProgressCheckboxProps {
  id: string;
  rowId: string;
  fallbackFocusId?: string;
}

export function ProgressCheckbox({ id, rowId, fallbackFocusId }: ProgressCheckboxProps) {
  const checked = useProgress((s) => s.data.checks[rowId] === true);
  const setCheck = useProgress((s) => s.setCheck);
  const announce = useUi((s) => s.announce);
  const showToast = useUi((s) => s.showToast);

  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(event) => {
        const next = event.currentTarget.checked;
        setCheck(rowId, next);
        announce(next ? "Checked and saved." : "Unchecked and saved.");
        showToast(`${next ? "Checked" : "Unchecked"} “${byId.get(rowId)?.title ?? "entry"}”`, () => setCheck(rowId, !next));
        if (fallbackFocusId) {
          requestAnimationFrame(() => {
            if (!document.getElementById(id)) document.getElementById(fallbackFocusId)?.focus({ preventScroll: true });
          });
        }
      }}
    />
  );
}
