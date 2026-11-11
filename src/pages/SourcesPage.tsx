import { ExternalLink } from "../components/SourceLinks";
import { Breadcrumb, PageHeading } from "../components/ui";
import { sources } from "../data/collectibles";
import { chapters } from "../lib/guide";
import { isOpen, useProgress } from "../store/progress";

export function SourcesPage() {
  const data = useProgress((s) => s.data);
  return (
    <>
      <Breadcrumb current="Sources" />
      <PageHeading title="Sources and maps">
        <p>These references cover the 2019 Nintendo Switch remake. The external guides may reveal later chapters.</p>
      </PageHeading>
      <section className="panel">
        <h2>Collectibles, systems and side quests</h2>
        <ul className="source-list">
          {sources.map(([label, url]) => (
            <li key={url}>
              <ExternalLink label={label} url={url} />
            </li>
          ))}
        </ul>
      </section>
      <section className="panel source-panel">
        <h2>Walkthrough references</h2>
        {chapters
          .filter((chapter) => isOpen(data, chapter.id))
          .map((chapter) => (
            <div key={chapter.id}>
              <h3>{chapter.title}</h3>
              <ul className="source-list">
                {chapter.sources.map(([label, url]) => (
                  <li key={url}>
                    <ExternalLink label={label} url={url} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </section>
    </>
  );
}
