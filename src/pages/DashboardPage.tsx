import { useEffect } from "react";
import { Link, useParams } from "react-router";
import { Stat } from "../components/Stats";
import { Breadcrumb, Button, Chip, PageHeading, ProgressBar } from "../components/ui";
import { biggestGaps, cats, chapterRows, chapters, coreRows, pct, two, type CategoryId } from "../lib/guide";
import { modeNames } from "../lib/progress-state";
import { exportProgress } from "../lib/backup";
import { isOpen, useProgress } from "../store/progress";
import { useUi } from "../store/ui";
import type { RunMode } from "../types";

function RunPanel() {
  const mode = useProgress((s) => s.data.mode);
  const run = useProgress((s) => s.data.runs[s.data.mode]);
  const { setMode, adjustDeaths, toggleClear, resetRun } = useProgress.getState();
  const announce = useUi((s) => s.announce);
  const openDialog = useUi((s) => s.openDialog);
  const label = modeNames[mode];
  let message = "No deaths logged. Compare this count with the grave icon on your Switch save-select screen.";
  if (run.deaths) message = "A Game Over ends this deathless attempt. Your collection checklist still works for this file.";
  if (run.cleared) message = run.deaths ? "Clear recorded with deaths." : `Zero-death clear recorded for ${label} mode.`;

  const log = (delta: 1 | -1) => {
    adjustDeaths(delta);
    const { deaths } = useProgress.getState().data.runs[mode];
    announce(`${deaths} deaths logged.`);
    // "Undo death" disables at zero; keep keyboard focus somewhere useful.
    if (deaths === 0) document.getElementById("death-plus")?.focus();
  };

  return (
    <section id="deathless" className="panel">
      <h2>Deathless run</h2>
      <div className="run-mode" aria-label="Run mode">
        {(Object.entries(modeNames) as [RunMode, string][]).map(([id, name]) => (
          <Chip key={id} label={name} value={id} current={mode} onSelect={(value) => setMode(value as RunMode)} />
        ))}
      </div>
      <div className="run-number">
        {run.deaths}
        <small>{run.deaths === 1 ? "death" : "deaths"}</small>
      </div>
      <p>{message}</p>
      <div className="controls">
        <Button icon="plus" onClick={() => log(1)} id="death-plus">
          Log death
        </Button>
        <Button icon="minus" onClick={() => log(-1)} disabled={run.deaths === 0}>
          Undo death
        </Button>
        <Button
          onClick={() => {
            toggleClear();
            announce(useProgress.getState().data.runs[mode].cleared ? "Run clear recorded." : "Run clear removed.");
          }}
        >
          {run.cleared ? "Undo clear" : "Record clear"}
        </Button>
        <Button
          onClick={() =>
            openDialog({
              kind: "confirm",
              title: `Reset the ${label} run?`,
              explanation: "The death count and clear status for this mode will be reset.",
              label: "Reset run",
              danger: true,
              onConfirm: resetRun,
            })
          }
        >
          Reset this run
        </Button>
      </div>
      <p>Log a Game Over. Secret Medicine can revive you automatically without adding a death. Use bottled fairies before health reaches zero.</p>
      <p>Normal and Hero runs are logged separately. The collection checklist is shared.</p>
    </section>
  );
}

export function DashboardPage() {
  const { section } = useParams();
  const data = useProgress((s) => s.data);
  const openDialog = useUi((s) => s.openDialog);
  const total = coreRows.length;
  const done = coreRows.filter((row) => data.checks[row.id] === true).length;
  const visible = chapters.filter((chapter) => isOpen(data, chapter.id));
  const gaps = biggestGaps(data.checks);

  useEffect(() => {
    if (section === "deathless") document.getElementById("deathless")?.scrollIntoView({ block: "start" });
  }, [section]);

  return (
    <>
      <Breadcrumb current="Progress" />
      <PageHeading title="Your progress">
        <p>Track completion across the island and log a deathless attempt.</p>
        <span className="inline-stat">
          {pct(done, total)}% complete · {done} of {total} entries
        </span>
      </PageHeading>
      <div className="dashboard-grid">
        <div>
          <section className="panel">
            <h2>Chapter progress</h2>
            <p>Open a revealed chapter.</p>
            {visible.map((chapter) => {
              const rows = chapterRows(chapter);
              const count = rows.filter((row) => data.checks[row.id] === true).length;
              return (
                <Link key={chapter.id} className="chapter-progress" to={`/guide/${chapter.id}`}>
                  <small>{two(chapter.id)}</small>
                  <strong>{chapter.title}</strong>
                  <ProgressBar done={count} total={rows.length} label={chapter.title} />
                  <small>
                    {count} / {rows.length}
                  </small>
                </Link>
              );
            })}
            {data.spoilers && data.ceiling < 9 && <p>{9 - data.ceiling} chapters hidden by spoiler protection.</p>}
          </section>
          <section className="panel" aria-labelledby="gaps-title">
            <h2 id="gaps-title">Biggest gaps</h2>
            <p>The categories with the most left to find.</p>
            {gaps.length ? (
              <ul className="gap-list">
                {gaps.map((gap) => (
                  <li key={gap.id}>
                    <Link to={`/checklist/${gap.id}`}>
                      <strong>{gap.name}</strong>
                      <span>
                        {gap.remaining} left <small>of {gap.total}</small>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nothing left. That’s a 100%.</p>
            )}
          </section>
          <section className="panel">
            <h2>Progress backup</h2>
            <p>Progress lives in this browser. Export a backup to move it to another device or keep a copy.</p>
            <div className="controls">
              <Button onClick={exportProgress}>Export progress</Button>
              <Button onClick={() => openDialog({ kind: "settings" })}>Import progress</Button>
            </div>
          </section>
        </div>
        <div>
          <RunPanel />
        </div>
      </div>
      <section className="panel">
        <div className="subhead">
          <div>
            <h2>By category</h2>
            <p>Category totals include the full guide. Optional amiibo and the deathless log sit outside overall completion.</p>
          </div>
        </div>
        <div className="category-board">
          {(Object.keys(cats) as CategoryId[])
            .filter((id) => id !== "story")
            .map((id) => (
              <Stat key={id} tag={id} />
            ))}
        </div>
      </section>
    </>
  );
}

