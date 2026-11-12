import { useState } from "react";
import { Link } from "react-router";
import { Button } from "./ui";
import { ProgressCheckbox } from "./ProgressCheckbox";
import { byId, nextUp, two } from "../lib/guide";
import { isOpen, useProgress } from "../store/progress";

/**
 * The next few unchecked steps. A step you tick stays where it is (checked, struck through) so the list
 * never jumps under your finger; "Show next steps" advances it when you are ready.
 */
export function NextUp({ chapter }: { chapter: number }) {
  const data = useProgress((s) => s.data);
  const [frozen, setFrozen] = useState<string[] | null>(null);
  const fresh = nextUp(data.checks, (n) => isOpen(data, n), chapter, 3);

  // Hold the list steady once something in it is ticked, until it is advanced or every tick is undone.
  const holding = frozen !== null && frozen.some((id) => data.checks[id] === true);
  const rows = holding ? frozen.map((id) => byId.get(id)!).filter(Boolean) : fresh;

  return (
    <section className="next-up" aria-labelledby="next-up-title">
      <h2 id="next-up-title">Next up</h2>
      {rows.length ? (
        <ul onChangeCapture={() => setFrozen((current) => current ?? fresh.map((row) => row.id))}>
          {rows.map((row) => (
            <li key={row.id} className={data.checks[row.id] === true ? "ticked" : undefined}>
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
      {holding && (
        <div className="next-up-advance">
          <Button onClick={() => setFrozen(null)}>Show next steps</Button>
        </div>
      )}
    </section>
  );
}
