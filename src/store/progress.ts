import { create } from "zustand";
import type { ProgressState } from "../types";
import { STORAGE_KEY, blankRun, defaultState, validateState } from "../lib/progress-state";
import { readChapter } from "../lib/guide";

interface Loaded {
  data: ProgressState;
  error: boolean;
}

function load(): Loaded {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return { data: raw ? validateState(JSON.parse(raw)) : defaultState(), error: false };
  } catch {
    return { data: defaultState(), error: true };
  }
}

interface ProgressStore {
  data: ProgressState;
  storageError: boolean;
  setCheck: (id: string, checked: boolean) => void;
  /** Check or uncheck many entries at once; returns the ids that actually changed so the caller can undo. */
  setChecks: (ids: string[], checked: boolean) => string[];
  setMode: (mode: ProgressState["mode"]) => void;
  adjustDeaths: (delta: 1 | -1) => void;
  toggleClear: () => void;
  resetRun: () => void;
  visitChapter: (chapter: number) => void;
  reveal: (chapter: number) => void;
  saveSettings: (settings: { spoilers: boolean; ceiling: number }) => void;
  replaceAll: (next: ProgressState) => void;
  reloadFromStorage: () => void;
}

const initial = load();

export const useProgress = create<ProgressStore>((set, get) => {
  const commit = (recipe: (draft: ProgressState) => ProgressState) => {
    const next = recipe(get().data);
    let storageError = false;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      storageError = true;
    }
    set({ data: next, storageError });
  };

  return {
    data: initial.data,
    storageError: initial.error,
    setCheck: (id, checked) =>
      commit((s) => {
        const checks = { ...s.checks };
        if (checked) checks[id] = true;
        else delete checks[id];
        return { ...s, checks };
      }),
    setChecks: (ids, checked) => {
      const before = get().data.checks;
      const changed = ids.filter((id) => (before[id] === true) !== checked);
      if (changed.length) {
        commit((s) => {
          const checks = { ...s.checks };
          for (const id of changed) {
            if (checked) checks[id] = true;
            else delete checks[id];
          }
          return { ...s, checks };
        });
      }
      return changed;
    },
    setMode: (mode) => commit((s) => ({ ...s, mode })),
    adjustDeaths: (delta) =>
      commit((s) => {
        const run = s.runs[s.mode];
        const deaths = delta === 1 ? Math.min(Number.MAX_SAFE_INTEGER, run.deaths + 1) : Math.max(0, run.deaths - 1);
        return { ...s, runs: { ...s.runs, [s.mode]: { ...run, deaths } } };
      }),
    toggleClear: () =>
      commit((s) => ({ ...s, runs: { ...s.runs, [s.mode]: { ...s.runs[s.mode], cleared: !s.runs[s.mode].cleared } } })),
    resetRun: () => commit((s) => ({ ...s, runs: { ...s.runs, [s.mode]: blankRun() } })),
    visitChapter: (chapter) => {
      if (get().data.chapter !== chapter) commit((s) => ({ ...s, chapter }));
    },
    reveal: (chapter) => commit((s) => ({ ...s, ceiling: Math.max(chapter, s.ceiling), chapter })),
    saveSettings: ({ spoilers, ceiling }) =>
      commit((s) => {
        const safe = readChapter(ceiling);
        const open = !spoilers || s.chapter <= safe;
        return { ...s, spoilers, ceiling: safe, chapter: open ? s.chapter : safe };
      }),
    replaceAll: (next) => commit(() => next),
    reloadFromStorage: () => {
      const { data, error } = load();
      set({ data, storageError: error });
    },
  };
});

export const isOpen = (state: ProgressState, chapter: number) => !state.spoilers || chapter <= state.ceiling;
