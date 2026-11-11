import { render, screen } from "@testing-library/react";
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
});

beforeEach(() => {
  localStorage.clear();
  useProgress.setState({ data: defaultState(), storageError: false });
  history.replaceState(null, "", "/guide/1");
});

describe("App", () => {
  it("opens at Tail Cave and persists a ticked step", async () => {
    const user = userEvent.setup();
    render(<App />);
    expect(await screen.findByRole("heading", { level: 1, name: "Tail Cave" })).toBeInTheDocument();
    const [first] = screen.getAllByRole("checkbox");
    await user.click(first);
    expect(first).toBeChecked();
    expect(Object.keys(JSON.parse(localStorage.getItem(STORAGE_KEY)!).checks)).toHaveLength(1);
  });

  it("hides later chapters until revealed", async () => {
    const user = userEvent.setup();
    history.replaceState(null, "", "/guide/3");
    render(<App />);
    expect(await screen.findByRole("heading", { level: 1, name: "Chapter 3 is hidden" })).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Reveal chapter" }));
    await user.click(screen.getByRole("button", { name: "Reveal and open" }));
    expect(await screen.findByRole("heading", { level: 1, name: /Key Cavern/ })).toBeInTheDocument();
    expect(useProgress.getState().data.ceiling).toBe(3);
  });
});
