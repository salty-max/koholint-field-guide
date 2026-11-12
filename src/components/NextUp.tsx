import { Link } from "react-router";
import { ProgressCheckbox } from "./ProgressCheckbox";
import { nextUp, two } from "../lib/guide";
import { isOpen, useProgress } from "../store/progress";

/** The next few unchecked steps, so you never have to scroll to find your place. */
export function NextUp({ chapter }: { chapter: number }) {
  const data = useProgress((s) => s.data);
  const rows = nextUp(data.checks, (n) => isOpen(data, n), chapter, 3);

  return (
    <section className="next-up" aria-labelledby="next-up-title">
      <h2 id="next-up-title">Next up</h2>
      {rows.length ? (
        <ul>
          {rows.map((row) => (
            <li key={row.id}>
              <ProgressCheckbox id={`next-${row.id}`} rowId={row.id} />
              <label htmlFor={`next-${row.id}`}>{row.title}</label>
              <Link to={`/guide/${row.chapter}/${row.id}`} aria-label={`Go to “${row.title}” in chapter ${row.chapter}`}>
                Ch. {two(row.chapter)} · Go to step
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Everything revealed so far is done. Reveal the next chapter or check the progress page.</p>
      )}
    </section>
  );
}
