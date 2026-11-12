import { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router";
import { Icon } from "../components/Icon";
import { ProgressCheckbox } from "../components/ProgressCheckbox";
import { SourceLinks } from "../components/SourceLinks";
import { Breadcrumb, Button, LinkButton } from "../components/ui";
import { chapters, CHAPTER_COUNT, guideAnchor, readChapter, two } from "../lib/guide";
import { useReveal } from "../lib/useReveal";
import { isOpen, useProgress } from "../store/progress";
import type { Chapter } from "../types";

export function GuidePage() {
  const { chapter: param, entry } = useParams();
  const savedChapter = useProgress((s) => s.data.chapter);
  const ceiling = useProgress((s) => s.data.ceiling);
  const visitChapter = useProgress((s) => s.visitChapter);
  const reveal = useReveal();
  const chapterId = readChapter(param, savedChapter);
  const open = useProgress((s) => isOpen(s.data, chapterId));
  const target = guideAnchor(chapterId, entry);

  useEffect(() => {
    if (open) visitChapter(chapterId);
  }, [open, chapterId, visitChapter]);

  if (!open) {
    return (
      <>
        <Breadcrumb current={`Chapter ${chapterId}`} />
        <div className="page-heading">
          <h1>Chapter {chapterId} is hidden</h1>
          <p>Reveal through this chapter when you’re ready.</p>
        </div>
        <Button look="" icon="unlock" onClick={() => reveal(chapterId, target ? entry : undefined)}>
          Reveal chapter
        </Button>{" "}
        <LinkButton to={`/guide/${ceiling}`}>Back to your guide</LinkButton>
      </>
    );
  }

  return <GuideView chapter={chapters[chapterId - 1]} target={target} />;
}

function GuideView({ chapter, target }: { chapter: Chapter; target?: string }) {
  const { key: locationKey } = useLocation();
  const nextOpen = useProgress((s) => isOpen(s.data, chapter.id + 1));
  const reveal = useReveal();

  useEffect(() => {
    if (!target) return;
    const element = document.getElementById(target);
    element?.focus({ preventScroll: true });
    element?.scrollIntoView({ block: "start" });
  }, [target, locationKey]);

  const chapterPath = `/guide/${chapter.id}`;
  const currentSection = chapter.groups.find((group) =>
    group.key === target || group.rows.some((row) => `entry-${row.id}` === target),
  )?.key;

  const sectionLinks = (
    <ul className="chapter-contents-list">
      {chapter.groups.map((group) => (
        <li key={group.key}>
          <Link to={`${chapterPath}/${group.key}`} aria-current={currentSection === group.key ? "location" : undefined}>
            {group.title}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Breadcrumb current={chapter.title} />
      <header className="hero" data-chapter={chapter.id}>
        <div className="hero-content">
          <div className="hero-meta">
            <span className="kicker">Chapter {two(chapter.id)} / {two(CHAPTER_COUNT)}</span>
            <span>{chapter.region}</span>
          </div>
          <h1>{chapter.title}</h1>
          <p>{chapter.intro}</p>
          <div className="hero-actions">
            <LinkButton to={`${chapterPath}/${chapter.groups[0].key}`} look="gold" icon="down">
              Read walkthrough
            </LinkButton>
            <LinkButton to={`/checklist/all/${chapter.id}`} look="ghost" icon="checkList">
              Chapter checklist
            </LinkButton>
          </div>
        </div>
      </header>

      <div className="walkthrough-layout">
        <details className="chapter-contents chapter-contents-mobile">
          <summary>In this chapter <Icon name="down" className="svg-icon caret" /></summary>
          <nav aria-label="In this chapter">{sectionLinks}</nav>
        </details>

        <article className="walkthrough-article" aria-label={`${chapter.title} walkthrough`}>
          {chapter.groups.map((group) => (
            <section className="walkthrough-section" key={group.key} aria-labelledby={group.key}>
              <header className="walkthrough-heading">
                <h2 id={group.key} tabIndex={-1}>{group.title}</h2>
                <p>{group.location}</p>
              </header>
              {group.rows.map((row) => (
                <p
                  className={`walkthrough-paragraph${target === `entry-${row.id}` ? " linked-paragraph" : ""}`}
                  id={`entry-${row.id}`}
                  key={row.id}
                  tabIndex={-1}
                >
                  <strong>{row.title}{/[.!?]$/.test(row.title) ? "" : "."}</strong>{" "}
                  {row.text}{" "}
                  <label className="walkthrough-check">
                    <ProgressCheckbox id={`walkthrough-${row.id}`} rowId={row.id} label={row.title} />
                  </label>
                </p>
              ))}
            </section>
          ))}

          <nav className="end-nav walkthrough-end" aria-label="Chapter navigation">
            <span>
              {chapter.id > 1 && (
                <LinkButton to={`/guide/${chapter.id - 1}`} icon="left">
                  Previous chapter
                </LinkButton>
              )}
            </span>
            {chapter.id === CHAPTER_COUNT ? (
              <LinkButton to="/dashboard" look="" icon="chart">
                View progress
              </LinkButton>
            ) : nextOpen ? (
              <LinkButton to={`/guide/${chapter.id + 1}`} look="" icon="arrow">
                Next chapter
              </LinkButton>
            ) : (
              <Button look="" icon="unlock" onClick={() => reveal(chapter.id + 1)}>
                Reveal next chapter
              </Button>
            )}
          </nav>
          <SourceLinks items={[...chapter.sources, ["Heart Pieces, shells and side-quest sources", "/sources"]]} />
        </article>

        <nav className="chapter-contents chapter-contents-desktop" aria-label="In this chapter">
          <h2>In this chapter</h2>
          {sectionLinks}
        </nav>
      </div>
    </>
  );
}
