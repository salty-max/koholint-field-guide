import { Link } from "react-router";
import { Icon, type IconName } from "./Icon";
import { ProgressBar } from "./ui";
import { cats, coreRows, pct, rowsByTag, type CategoryId } from "../lib/guide";
import { modeNames } from "../lib/progress-state";
import { useProgress } from "../store/progress";

export function Stat({ tag }: { tag: CategoryId | "overall" }) {
  const checks = useProgress((s) => s.data.checks);
  const rows = tag === "overall" ? coreRows : rowsByTag(tag);
  const done = rows.filter((row) => checks[row.id] === true).length;
  const [name, , graphic]: readonly [string, string, IconName] = tag === "overall" ? ["Overall Completion", "", "compass"] : cats[tag];
  const label = tag === "overall" ? `${pct(done, rows.length)}%` : done;
  const detail = tag === "overall" ? `${done} of ${rows.length}` : `/ ${rows.length}`;
  return (
    <Link className="stat" to={tag === "overall" ? "/dashboard" : `/checklist/${tag}`}>
      <span className="stat-head">
        <span className={`stat-icon ${tag}`}>
          <Icon name={graphic} />
        </span>
        {name}
      </span>
      <span className="stat-values">
        {label} <small>{detail}</small>
      </span>
      <ProgressBar done={done} total={rows.length} label={name} />
    </Link>
  );
}

export function DeathStat() {
  const mode = useProgress((s) => s.data.mode);
  const run = useProgress((s) => s.data.runs[s.data.mode]);
  const caption = run.cleared ? (run.deaths === 0 ? "Deathless clear" : "Run cleared") : `${modeNames[mode]} mode`;
  return (
    <Link className="stat" to="/dashboard/deathless">
      <span className="stat-head">
        <span className="stat-icon death">
          <Icon name="shield" />
        </span>
        Deathless Run
      </span>
      <span className="stat-values">
        {run.deaths} <small>{run.deaths === 1 ? "death" : "deaths"}</small>
      </span>
      <span className="stat-caption">
        <span className="live-dot" />
        {caption}
      </span>
    </Link>
  );
}
