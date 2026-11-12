import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { vi } from "vitest";
import { allRows, chapters } from "../lib/guide";
import { defaultState } from "../lib/progress-state";
import { useProgress } from "../store/progress";
import { MissablesStrip } from "./MissablesStrip";

const flagged = allRows.find((row) => row.chapter === 1)!;

vi.mock("../data/missables", () => ({
  missables: [{ id: "shield", why: "Test condition for losing it.", sources: ["https://a.example/x", "https://b.example/y"] }],
  reassurance: { text: "unused", sources: [] },
}));

beforeEach(() => {
  localStorage.clear();
  useProgress.setState({ data: defaultState(), storageError: false });
});

const strip = () =>
  render(
    <MemoryRouter>
      <MissablesStrip chapter={chapters[0]} />
    </MemoryRouter>,
  );

describe("MissablesStrip with a flagged entry", () => {
  it("lists it with its condition and drops it once checked", async () => {
    expect(flagged).toBeTruthy();
    const user = userEvent.setup();
    strip();
    const region = screen.getByRole("complementary", { name: /Don’t miss/ });
    expect(within(region).getByText("Test condition for losing it.")).toBeInTheDocument();
    await user.click(within(region).getByRole("checkbox"));
    expect(useProgress.getState().data.checks.shield).toBe(true);
  });

  it("renders nothing for a chapter with no flagged entries left", () => {
    useProgress.setState({ data: { ...defaultState(), checks: { shield: true } } });
    const { container } = strip();
    expect(container).toBeEmptyDOMElement();
  });
});
