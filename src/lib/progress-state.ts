import type { ProgressState, Run, RunMode } from "../types";
import { byId, readChapter } from "./guide";

export const STORAGE_KEY = "koholint-field-guide.v1";
export const modeNames: Record<RunMode, string> = { normal: "Normal", hero: "Hero" };

export const blankRun = (): Run => ({ deaths: 0, cleared: false });
export const defaultState = (): ProgressState => ({
  version: 1,
  checks: {},
  ceiling: 1,
  spoilers: true,
  chapter: 1,
  mode: "normal",
  runs: { normal: blankRun(), hero: blankRun() },
});

/** Parse untrusted JSON (storage or an imported file) into a safe state. Throws on a non-backup. */
export function validateState(value: unknown): ProgressState {
  const v = value as Partial<Record<keyof ProgressState, unknown>> | null;
  const checks = v?.checks;
  if (!v || v.version !== 1 || !checks || Array.isArray(checks) || typeof checks !== "object") {
    throw new Error("This file is not a Koholint progress backup.");
  }
  const result = defaultState();
  result.checks = Object.fromEntries(
    Object.entries(checks).filter(([id, checked]) => byId.has(id) && checked === true),
  ) as Record<string, true>;
  result.ceiling = readChapter(v.ceiling);
  result.chapter = readChapter(v.chapter);
  result.spoilers = v.spoilers !== false;
  result.mode = v.mode === "hero" ? "hero" : "normal";
  const runs = v.runs as Partial<Record<RunMode, Partial<Run>>> | undefined;
  for (const mode of Object.keys(modeNames) as RunMode[]) {
    const run = runs?.[mode];
    if (run) {
      result.runs[mode] = {
        deaths: Number.isSafeInteger(run.deaths) && (run.deaths as number) >= 0 ? (run.deaths as number) : 0,
        cleared: run.cleared === true,
      };
    }
  }
  return result;
}
