import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { chapters, missablesLeft } from "../lib/guide";
import { MissablesStrip } from "./MissablesStrip";

describe("MissablesStrip with nothing flagged", () => {
  it("says so and lists the sources behind the claim", () => {
    render(
      <MemoryRouter>
        <MissablesStrip chapter={chapters[0]} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Nothing is flagged as permanently missable/)).toBeInTheDocument();
    expect(screen.getAllByRole("link").length).toBeGreaterThanOrEqual(2);
    for (const link of screen.getAllByRole("link")) expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
  });

  it("has no unchecked missable rows in any chapter", () => {
    for (const chapter of chapters) expect(missablesLeft(chapter, {})).toEqual([]);
  });
});
