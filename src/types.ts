export type SideStep = [id: string, tags: string | string[], title: string, text: string];

export interface RawSection {
  title: string;
  location: string;
  steps: SideStep[];
}

export interface RawChapter {
  id: number;
  title: string;
  region: string;
  intro: string;
  sources: [label: string, url: string][];
  sections: RawSection[];
}

export interface SideGroup extends RawSection {
  chapter: number;
  placement: string;
}

export interface Row {
  id: string;
  title: string;
  text: string;
  chapter: number;
  location: string;
  group: string;
  tags: string[];
  /** Can be lost for good if you move on (see src/data/missables.ts). */
  missable?: true;
}

export interface Group {
  key: string;
  title: string;
  location: string;
  icon?: string;
  rows: Row[];
}

export interface Chapter extends Omit<RawChapter, "sections"> {
  groups: Group[];
}

export type RunMode = "normal" | "hero";
export interface Run {
  deaths: number;
  cleared: boolean;
}
export interface ProgressState {
  version: 1;
  checks: Record<string, true>;
  ceiling: number;
  spoilers: boolean;
  chapter: number;
  mode: RunMode;
  runs: Record<RunMode, Run>;
}
