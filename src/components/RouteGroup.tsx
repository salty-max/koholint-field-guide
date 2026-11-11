import { Link } from "react-router";
import { Icon, type IconName } from "./Icon";
import { cats, primaryTag, type CategoryId } from "../lib/guide";
import { useProgress } from "../store/progress";
import { useUi } from "../store/ui";
import type { Row } from "../types";

const BADGE_EXTRAS = ["heart", "shell", "chest", "bottle", "container"];

interface RowProps {
  row: Row;
  prefix: string;
  highlighted: boolean;
  origin?: boolean;
  /** Where to send focus if ticking this row filters it out of the list. */
  fallbackFocusId: string;
}

export function RouteRow({ row, prefix, highlighted, origin = false, fallbackFocusId }: RowProps) {
  const checked = useProgress((s) => s.data.checks[row.id] === true);
  const setCheck = useProgress((s) => s.setCheck);
  const announce = useUi((s) => s.announce);
  const inputId = `${prefix}-${row.id}`;
  const tag = primaryTag(row);
  const badges = [tag, ...(row.tags.filter((entry) => entry !== tag && BADGE_EXTRAS.includes(entry)) as CategoryId[])];

  return (
    <div className={["route-row", checked && "completed", highlighted && "highlight"].filter(Boolean).join(" ")} id={`entry-${row.id}`}>
      <input
        id={inputId}
        type="checkbox"
        checked={checked}
        onChange={(event) => {
          setCheck(row.id, event.target.checked);
          announce(event.target.checked ? "Checked and saved." : "Unchecked and saved.");
          requestAnimationFrame(() => {
            if (!document.getElementById(inputId)) document.getElementById(fallbackFocusId)?.focus({ preventScroll: true });
          });
        }}
      />
      <div>
        <label htmlFor={inputId}>{row.title}</label>
        <p>{row.text}</p>
      </div>
      <div className="row-meta">
        {badges.map((entry) => (
          <span key={entry} className={`tag ${entry}`}>
            {cats[entry][1]}
          </span>
        ))}
        {origin && (
          <Link className="origin" to={`/guide/${row.chapter}/${row.id}`}>
            Chapter {row.chapter}
          </Link>
        )}
      </div>
    </div>
  );
}

interface GroupProps {
  groupKey: string;
  title: string;
  location: string;
  icon?: string;
  rows: Row[];
  open: boolean;
  highlightedId: string;
  origin?: boolean;
  fallbackFocusId: string;
  /** Persist manual open/close only when the list is unfiltered. */
  rememberToggle: boolean;
}

export function RouteGroup({ groupKey, title, location, icon, rows, open, highlightedId, origin, fallbackFocusId, rememberToggle }: GroupProps) {
  const setGroupOpen = useUi((s) => s.setGroupOpen);
  const checks = useProgress((s) => s.data.checks);
  const graphic = (icon ??
    (rows.some((row) => row.tags.includes("chest")) ? "chest" : location.includes("Dampé") ? "grid" : "pin")) as IconName;
  const done = rows.filter((row) => checks[row.id] === true).length;

  return (
    <details
      className="route-group"
      data-section={groupKey}
      open={open}
      onToggle={(event) => {
        if (rememberToggle && event.currentTarget.isConnected) setGroupOpen(groupKey, event.currentTarget.open);
      }}
    >
      <summary>
        <span className="group-icon">
          <Icon name={graphic} />
        </span>
        <span>
          <h3>{title}</h3>
          <small>{location}</small>
        </span>
        <span className="group-count">
          {done} / {rows.length}
        </span>
        <Icon name="down" className="svg-icon caret" />
      </summary>
      <div className="route-list">
        {rows.map((row) => (
          <RouteRow key={row.id} row={row} prefix={groupKey} highlighted={highlightedId === row.id} origin={origin} fallbackFocusId={fallbackFocusId} />
        ))}
      </div>
    </details>
  );
}
