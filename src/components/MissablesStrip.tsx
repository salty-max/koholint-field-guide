import { Link } from "react-router";
import { missables, reassurance } from "../data/missables";
import { byId, missablesLeft } from "../lib/guide";
import { useProgress } from "../store/progress";
import { ProgressCheckbox } from "./ProgressCheckbox";
import type { Chapter } from "../types";

/**
 * "Don't miss" strip for a chapter. It lists unchecked entries that can be lost for good; while
 * nothing is flagged it says so, with the sources behind that claim.
 */
export function MissablesStrip({ chapter }: { chapter: Chapter }) {
  const checks = useProgress((s) => s.data.checks);
  const rows = missablesLeft(chapter, checks);

  if (!missables.length) {
    return (
      <aside className="missables missables-clear" aria-label="Missable entries">
        <details>
          <summary>
            <strong>Nothing is flagged as permanently missable.</strong> {reassurance.text}
          </summary>
          <ul>
            {reassurance.sources.map(([label, url]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </details>
      </aside>
    );
  }

  if (!rows.length) return null;
  return (
    <aside className="missables" aria-labelledby={`missables-${chapter.id}`}>
      <h2 id={`missables-${chapter.id}`}>Don’t miss before moving on</h2>
      <ul>
        {rows.map((row) => (
          <li key={row.id}>
            <ProgressCheckbox id={`missable-${row.id}`} rowId={row.id} />
            <label htmlFor={`missable-${row.id}`}>
              {row.title}
              <small>{missables.find((item) => item.id === row.id)?.why ?? byId.get(row.id)?.group}</small>
            </label>
            <Link to={`/guide/${row.chapter}/${row.id}`} aria-label={`Go to “${row.title}”`}>
              Go to step
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
