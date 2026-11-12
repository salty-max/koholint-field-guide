import { earlyChapters } from "../data/early";
import { middleChapters } from "../data/middle";
import { lateChapters } from "../data/late";
import { extraTags, sideGroups } from "../data/collectibles";
import type { Chapter, RawSection, Row, SideGroup } from "../types";
import type { IconName } from "../components/Icon";

export const CHAPTER_COUNT = 9;

/** id → [plural name, singular tag label, icon] */
export const cats = {
  heart: ["Heart Pieces", "Heart Piece", "heart"],
  shell: ["Secret Seashells", "Seashell", "shell"],
  chest: ["Treasure Chests", "Chest", "chest"],
  trade: ["Trading Quest", "Trade", "swap"],
  gear: ["Equipment & Upgrades", "Equipment", "sword"],
  container: ["Heart Containers", "Heart Container", "heart"],
  instrument: ["Instruments", "Instrument", "music"],
  song: ["Ocarina Songs", "Song", "music"],
  bottle: ["Fairy Bottles", "Bottle", "flask"],
  figure: ["Figures", "Figure", "star"],
  mini: ["Mini-game Rewards", "Mini-game", "fish"],
  lure: ["Fishing Lures", "Lure", "fish"],
  challenge: ["Chamber Challenges", "Challenge", "grid"],
  stone: ["Chamber Stones", "Chamber Stone", "gem"],
  effect: ["Chamber Effects", "Effect", "star"],
  warp: ["Warp Points", "Warp Point", "pin"],
  fairy: ["Great Fairy Fountains", "Fountain", "leaf"],
  explore: ["Island Sweep", "Exploration", "compass"],
  amiibo: ["Optional amiibo", "amiibo", "star"],
  story: ["Route Steps", "Route", "book"],
} as const satisfies Record<string, readonly [string, string, IconName]>;

export type CategoryId = keyof typeof cats;
export const isCategory = (value: string | undefined): value is CategoryId =>
  value !== undefined && Object.hasOwn(cats, value);

const rawChapters = [...earlyChapters, ...middleChapters, ...lateChapters].sort((a, b) => a.id - b.id);

type Section = RawSection & { icon?: string };

function orderedSections(chapterId: number, story: Section[]): Section[] {
  const sides = sideGroups.filter((group) => group.chapter === chapterId);
  const pick = (placement: string): SideGroup[] => {
    const byTitle = new Map<string, SideGroup>();
    for (const group of sides.filter((item) => item.placement === placement)) {
      const previous = byTitle.get(group.title);
      byTitle.set(group.title, previous ? { ...previous, steps: [...previous.steps, ...group.steps] } : group);
    }
    return [...byTitle.values()];
  };
  const breaks: Record<number, number> = { 1: 2, 2: 1, 3: 3, 4: 3, 5: 1, 6: 1, 7: 2, 8: 1, 9: 0 };
  const index = breaks[chapterId];
  if (chapterId === 1) {
    return [story[0], ...pick("village"), story[1], ...pick("before-dungeon"), ...story.slice(index), ...pick("after")];
  }
  if (chapterId === 8) {
    return [story[0], ...pick("before-dungeon"), ...story.slice(1, 3), ...pick("roof"), ...story.slice(3), ...pick("after")];
  }
  if (chapterId === 3) {
    return [story[0], ...pick("early"), ...story.slice(1, index), ...pick("before-dungeon"), ...story.slice(index), ...pick("after")];
  }
  return [...story.slice(0, index), ...pick("before-dungeon"), ...story.slice(index), ...pick("after")];
}

export const chapters: Chapter[] = rawChapters.map(({ sections, ...chapter }) => ({
  ...chapter,
  groups: orderedSections(chapter.id, sections).map((group, index) => ({
    title: group.title,
    location: group.location,
    icon: group.icon,
    key: `section-${chapter.id}-${index + 1}`,
    rows: group.steps.map(([id, raw, title, text]): Row => ({
      id,
      title,
      text,
      chapter: chapter.id,
      location: group.location,
      group: group.title,
      tags: [...new Set([...[raw].flat(), ...(extraTags[id] ?? [])])],
    })),
  })),
}));

export const allRows: Row[] = chapters.flatMap((chapter) => chapter.groups.flatMap((group) => group.rows));
export const byId = new Map(allRows.map((row) => [row.id, row]));
export function guideAnchor(chapterId: number, target: string | undefined): string | undefined {
  if (!target) return;
  if (byId.get(target)?.chapter === chapterId) return `entry-${target}`;
  return chapters[chapterId - 1]?.groups.find((group) => group.key === target)?.key;
}
/** Rows that count toward overall completion (amiibo are optional). */
export const coreRows = allRows.filter((row) => !row.tags.includes("amiibo"));
export const rowsByTag = (tag: string) => allRows.filter((row) => row.tags.includes(tag));
export const chapterRows = (chapter: Chapter) => chapter.groups.flatMap((group) => group.rows);
export const primaryTag = (row: Row): CategoryId =>
  (row.tags.find((tag) => tag !== "story") ?? row.tags[0]) as CategoryId;

export const two = (value: number) => String(value).padStart(2, "0");
export const pct = (done: number, total: number) => (total ? Math.floor((done / total) * 100) : 0);
export const readChapter = (value: unknown, fallback = 1) => {
  const n = Number(value);
  return Number.isInteger(n) && n >= 1 && n <= CHAPTER_COUNT ? n : fallback;
};

export const statusOptions: [string, string][] = [
  ["all", "All statuses"],
  ["todo", "Unfinished"],
  ["done", "Completed"],
];
