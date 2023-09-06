import { render, screen } from "@testing-library/react";
import { Solution } from ".";
import { Providers } from "../../Providers";

describe("loads a solution", () => {
  it("renders the solution", () => {
    render(
      <Providers>
        <Solution />
      </Providers>,
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
