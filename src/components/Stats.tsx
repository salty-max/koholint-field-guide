import { Link } from "react-router";
import { Icon, type IconName } from "./Icon";
import { ProgressBar } from "./ui";
import { cats, rowsByTag, type CategoryId } from "../lib/guide";
import { useProgress } from "../store/progress";

export function Stat({ tag }: { tag: CategoryId }) {
  const checks = useProgress((s) => s.data.checks);
  const rows = rowsByTag(tag);
  const done = rows.filter((row) => checks[row.id] === true).length;
  const [name, , graphic]: readonly [string, string, IconName] = cats[tag];
  return (
    <Link className="stat" to={`/checklist/${tag}`}>
      <span className="stat-head">
        <span className={`stat-icon ${tag}`}>
          <Icon name={graphic} />
        </span>
        {name}
      </span>
      <span className="stat-values">
        {done} <small>/ {rows.length}</small>
      </span>
      <ProgressBar done={done} total={rows.length} label={name} />
    </Link>
  );
}
