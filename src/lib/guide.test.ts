import { allRows, byId, chapters, coreRows, CHAPTER_COUNT, readChapter } from "./guide";

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
