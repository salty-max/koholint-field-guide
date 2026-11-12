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
    await user.click(screen.getByRole("link", { name: "Chapter 1" }));
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
});
