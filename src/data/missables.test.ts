import { byId } from "../lib/guide";
import { missables, reassurance } from "./missables";

describe("missables data", () => {
  it("only flags real rows, each backed by two independent https sources", () => {
    for (const item of missables) {
      expect(byId.has(item.id), item.id).toBe(true);
      expect(item.why.length).toBeGreaterThan(10);
      const hosts = new Set(item.sources.map((url) => new URL(url).host));
      expect(item.sources.every((url) => url.startsWith("https://"))).toBe(true);
      expect(hosts.size, `${item.id} needs two independent hosts`).toBeGreaterThanOrEqual(2);
    }
    expect(new Set(missables.map((m) => m.id)).size).toBe(missables.length);
  });

  it("backs its reassurance with at least two sources on different hosts", () => {
    const hosts = new Set(reassurance.sources.map(([, url]) => new URL(url).host));
    expect(hosts.size).toBeGreaterThanOrEqual(2);
  });
});
