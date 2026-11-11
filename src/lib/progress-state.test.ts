import { allRows } from "./guide";
import { defaultState, validateState } from "./progress-state";

describe("validateState", () => {
  const id = allRows[0].id;

  it("round-trips a default state", () => {
    expect(validateState(JSON.parse(JSON.stringify(defaultState())))).toEqual(defaultState());
  });

  it("rejects things that are not backups", () => {
    for (const bad of [null, {}, { version: 2, checks: {} }, { version: 1, checks: [] }, { version: 1 }]) {
      expect(() => validateState(bad)).toThrow();
    }
  });

  it("drops unknown ids and non-true checks", () => {
    const state = validateState({ version: 1, checks: { [id]: true, nope: true, [allRows[1].id]: false } });
    expect(state.checks).toEqual({ [id]: true });
  });

  it("sanitises numbers and modes", () => {
    const state = validateState({
      version: 1,
      checks: {},
      ceiling: 99,
      chapter: 4,
      mode: "weird",
      runs: { hero: { deaths: -3, cleared: "yes" }, normal: { deaths: 2, cleared: true } },
    });
    expect(state.ceiling).toBe(1);
    expect(state.chapter).toBe(4);
    expect(state.mode).toBe("normal");
    expect(state.runs.hero).toEqual({ deaths: 0, cleared: false });
    expect(state.runs.normal).toEqual({ deaths: 2, cleared: true });
  });
});
