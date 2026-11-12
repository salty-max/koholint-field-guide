import { Link } from "react-router";
import { Icon, type IconName } from "./Icon";
import { cats, primaryTag, type CategoryId } from "../lib/guide";
import { useProgress } from "../store/progress";
import { BulkCheck } from "./BulkCheck";
import { ProgressCheckbox } from "./ProgressCheckbox";
import type { Row } from "../types";

const BADGE_EXTRAS = ["heart", "shell", "chest", "bottle", "container"];

interface RowProps {
  row: Row;
  prefix: string;
  /** Where to send focus if ticking this row filters it out of the list. */
  fallbackFocusId: string;
}

function RouteRow({ row, prefix, fallbackFocusId }: RowProps) {
  const checked = useProgress((s) => s.data.checks[row.id] === true);
  const inputId = `${prefix}-${row.id}`;
  const tag = primaryTag(row);
  const badges = [tag, ...(row.tags.filter((entry) => entry !== tag && BADGE_EXTRAS.includes(entry)) as CategoryId[])];

  return (
    <div className={checked ? "route-row completed" : "route-row"} id={`entry-${row.id}`}>
      <ProgressCheckbox id={inputId} rowId={row.id} fallbackFocusId={fallbackFocusId} />
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
        <Link className="origin" to={`/guide/${row.chapter}/${row.id}`} aria-label={`Open “${row.title}” in chapter ${row.chapter}`}>
          Chapter {row.chapter}
        </Link>
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
  fallbackFocusId: string;
}

export function RouteGroup({ groupKey, title, location, icon, rows, fallbackFocusId }: GroupProps) {
  const checks = useProgress((s) => s.data.checks);
  const graphic = (icon ??
    (rows.some((row) => row.tags.includes("chest")) ? "chest" : location.includes("Dampé") ? "grid" : "pin")) as IconName;
  const done = rows.filter((row) => checks[row.id] === true).length;

  return (
    <details className="route-group" data-section={groupKey} open>
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
        <div className="route-tools">
          <BulkCheck rows={rows} label={title} />
        </div>
        {rows.map((row) => (
          <RouteRow key={row.id} row={row} prefix={groupKey} fallbackFocusId={fallbackFocusId} />
        ))}
      </div>
    </details>
  );
}
