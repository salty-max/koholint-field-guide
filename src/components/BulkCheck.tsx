import { useProgress } from "../store/progress";
import { useUi } from "../store/ui";
import type { Row } from "../types";

const CONFIRM_ABOVE = 5;

export function BulkCheck({ rows, label }: { rows: Row[]; label: string }) {
  const checks = useProgress((s) => s.data.checks);
  const setChecks = useProgress((s) => s.setChecks);
  const openDialog = useUi((s) => s.openDialog);
  const showToast = useUi((s) => s.showToast);
  const announce = useUi((s) => s.announce);

  const unchecked = rows.filter((row) => checks[row.id] !== true).length;
  const allDone = rows.length > 0 && unchecked === 0;
  const target = !allDone;

  const apply = () => {
    const changed = setChecks(rows.map((row) => row.id), target);
    if (!changed.length) return;
    const message = `${target ? "Checked" : "Unchecked"} ${changed.length} in “${label}”`;
    announce(`${message}.`);
    showToast(message, () => setChecks(changed, !target));
  };

  return (
    <button
      type="button"
      className="text-button bulk-check"
      onClick={() => {
        if (!target && rows.length > CONFIRM_ABOVE) {
          openDialog({
            kind: "confirm",
            title: `Uncheck all of “${label}”?`,
            explanation: `This clears ${rows.length} checks. You can undo right after.`,
            label: "Uncheck all",
            danger: true,
            onConfirm: apply,
          });
        } else apply();
      }}
    >
      {allDone ? `Uncheck all (${rows.length})` : `${unchecked < rows.length ? "Check remaining" : "Check all"} (${unchecked})`}
    </button>
  );
}
