import { allRows } from "../lib/guide";
import { defaultState } from "../lib/progress-state";
import { useProgress } from "./progress";

beforeEach(() => {
  localStorage.clear();
  useProgress.setState({ data: defaultState(), storageError: false });
});

describe("setChecks", () => {
  const ids = allRows.slice(0, 4).map((r) => r.id);

  it("checks many at once and returns only what changed", () => {
    useProgress.getState().setCheck(ids[0], true);
    const changed = useProgress.getState().setChecks(ids, true);
    expect(changed).toEqual(ids.slice(1));
    expect(Object.keys(useProgress.getState().data.checks).sort()).toEqual([...ids].sort());
  });

  it("is undoable by passing the returned ids back inverted", () => {
    const changed = useProgress.getState().setChecks(ids, true);
    useProgress.getState().setChecks(changed, false);
    expect(useProgress.getState().data.checks).toEqual({});
  });

  it("persists to storage and changes nothing when there is nothing to change", () => {
    useProgress.getState().setChecks(ids, true);
    expect(Object.keys(JSON.parse(localStorage.getItem("koholint-field-guide.v1")!).checks)).toHaveLength(4);
    expect(useProgress.getState().setChecks(ids, true)).toEqual([]);
  });
});
