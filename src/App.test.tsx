import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { App } from "./App";
import { STORAGE_KEY } from "./lib/progress-state";
import { useProgress } from "./store/progress";
import { defaultState } from "./lib/progress-state";

beforeAll(() => {
  window.matchMedia ??= ((query: string) => ({ matches: false, media: query, addEventListener() {}, removeEventListener() {} })) as typeof window.matchMedia;
  HTMLDialogElement.prototype.showModal ??= function (this: HTMLDialogElement) { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close ??= function (this: HTMLDialogElement) { this.removeAttribute("open"); this.dispatchEvent(new Event("close")); };
  Element.prototype.scrollIntoView ??= () => {};
  window.scrollTo = vi.fn();
});

beforeEach(() => {
  localStorage.clear();
  useProgress.setState({ data: defaultState(), storageError: false });
  history.replaceState(null, "", "/guide/1");
});

describe("App", () => {
  it("renders a walkthrough and keeps its checks in sync with the checklist", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(await screen.findByRole("heading", { level: 1, name: "Tail Cave" })).toBeInTheDocument();
    const walkthrough = screen.getByRole("article", { name: "Tail Cave walkthrough" });
    expect(within(walkthrough).getByRole("heading", { name: "Recover your sword and shield" })).toBeInTheDocument();
    expect(screen.queryByLabelText("Route completion status")).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Expand all" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("link", { name: "Read walkthrough" }));
    expect(screen.getByRole("heading", { name: "Recover your sword and shield" })).toHaveFocus();

    const shield = within(walkthrough).getByRole("checkbox", { name: "Get the Shield from Tarin." });
    const openingSentence = within(walkthrough).getByText("Get the Shield from Tarin.", { selector: "label" });
    expect(openingSentence).toContainElement(shield);
    await user.click(openingSentence);
    expect(shield).toBeChecked();
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks).toEqual({ shield: true });

    await user.click(screen.getByRole("link", { name: "Chapter checklist" }));
    const search = await screen.findByRole("searchbox");
    await user.type(search, "Get the Shield from Tarin");
    const checklistShield = screen.getByRole("checkbox", { name: "Get the Shield from Tarin" });
    expect(checklistShield).toBeChecked();
    await user.click(checklistShield);
    await user.click(screen.getByRole("link", { name: "Open “Get the Shield from Tarin” in chapter 1" }));
    const paragraph = document.getElementById("entry-shield");
    expect(paragraph).toHaveFocus();
    expect(screen.getByRole("checkbox", { name: "Get the Shield from Tarin." })).not.toBeChecked();
  });

  it("hides later chapters until revealed", async () => {
    const user = userEvent.setup();
    history.replaceState(null, "", "/guide/3/section-3-1");
    render(<App />);
    expect(await screen.findByRole("heading", { level: 1, name: "Chapter 3 is hidden" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Reveal chapter" }));
    await user.click(screen.getByRole("button", { name: "Reveal and open" }));
    expect(await screen.findByRole("heading", { level: 1, name: /Key Cavern/ })).toBeInTheDocument();
    expect(useProgress.getState().data.ceiling).toBe(3);
    expect(document.getElementById("section-3-1")).toHaveFocus();
  });
  it("shows an undo toast after checking a step, and undo restores it", async () => {
    const user = userEvent.setup();
    history.replaceState(null, "", "/guide/1");
    render(<App />);
    const nextUp = await screen.findByRole("region", { name: "Next up" });
    const [first] = within(nextUp).getAllByRole("checkbox");
    const title = first.id.replace("next-", "");
    await user.click(first);
    // A ticked step drops off the Next up list; the toast says what happened.
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks[title]).toBe(true);
    expect(screen.queryByRole("checkbox", { name: new RegExp(`^${first.id}$`) })).toBeNull();
    expect(document.getElementById(first.id)).not.toBeInTheDocument();
    const toast = screen.getByRole("group", { name: "Last change" });
    await user.click(within(toast).getByRole("button", { name: "Undo" }));
    expect(within(screen.getByRole("region", { name: "Next up" })).getAllByRole("checkbox")[0].id).toBe(first.id);
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks).toEqual({});
  });

  it("checks a whole section at once and can undo it", async () => {
    const user = userEvent.setup();
    history.replaceState(null, "", "/guide/1");
    render(<App />);
    const section = (await screen.findAllByRole("button", { name: /^Check all \(/ }))[0];
    await user.click(section);
    expect(Object.keys(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks).length).toBeGreaterThan(1);
    await user.click(within(screen.getByRole("group", { name: "Last change" })).getByRole("button", { name: "Undo" }));
    expect(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks).toEqual({});
  });
});
