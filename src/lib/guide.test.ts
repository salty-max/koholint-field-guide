import { allRows, biggestGaps, byId, chapters, coreRows, CHAPTER_COUNT, nextUp, readChapter } from "./guide";

describe("guide data", () => {
  it("has nine chapters in order, each with rows", () => {
    expect(chapters.map((chapter) => chapter.id)).toEqual(Array.from({ length: CHAPTER_COUNT }, (_, i) => i + 1));
    for (const chapter of chapters) expect(chapter.groups.some((group) => group.rows.length)).toBe(true);
  });

  it("has unique row ids", () => {
    expect(byId.size).toBe(allRows.length);
  });

  it("keeps amiibo out of overall completion", () => {
    expect(coreRows.length).toBeLessThan(allRows.length);
    expect(coreRows.every((row) => !row.tags.includes("amiibo"))).toBe(true);
  });

  it("only links to https or internal sources", () => {
    for (const chapter of chapters) for (const [, url] of chapter.sources) expect(url).toMatch(/^https:\/\//);
  });

  it("clamps chapter numbers", () => {
    expect(readChapter("3")).toBe(3);
    expect(readChapter("0", 2)).toBe(2);
    expect(readChapter("10")).toBe(1);
    expect(readChapter("x", 5)).toBe(5);
  });
});

describe("nextUp", () => {
  const open = (n: number) => n <= 2;

  it("starts at the given chapter, in guide order, skipping checked and amiibo steps", () => {
    const first = chapters[0].groups[0].rows[0].id;
    const rows = nextUp({ [first]: true }, open, 1, 3);
    expect(rows).toHaveLength(3);
    expect(rows.map((r) => r.id)).not.toContain(first);
    expect(rows.every((r) => r.chapter <= 2 && !r.tags.includes("amiibo"))).toBe(true);
  });

  it("never reaches into hidden chapters", () => {
    const everyOpenId = Object.fromEntries(allRows.filter((r) => r.chapter <= 2).map((r) => [r.id, true as const]));
    expect(nextUp(everyOpenId, open, 1, 3)).toEqual([]);
  });

  it("wraps round to earlier chapters", () => {
    const later = Object.fromEntries(allRows.filter((r) => r.chapter === 2).map((r) => [r.id, true as const]));
    expect(nextUp(later, open, 2, 1)[0].chapter).toBe(1);
  });
});

describe("biggestGaps", () => {
  it("lists the categories with most left, never route steps or amiibo", () => {
    const gaps = biggestGaps({}, 50);
    expect(gaps.map((g) => g.id)).not.toContain("story");
    expect(gaps.map((g) => g.id)).not.toContain("amiibo");
    expect([...gaps].sort((a, b) => b.remaining - a.remaining).map((g) => g.id)).toEqual(gaps.map((g) => g.id));
  });

  it("drops a category once it is complete and shrinks counts as you check", () => {
    const hearts = allRows.filter((r) => r.tags.includes("heart"));
    const all = Object.fromEntries(hearts.map((r) => [r.id, true as const]));
    expect(biggestGaps(all, 50).map((g) => g.id)).not.toContain("heart");
    const one = biggestGaps({ [hearts[0].id]: true }, 50).find((g) => g.id === "heart");
    expect(one?.remaining).toBe(hearts.length - 1);
  });
});
