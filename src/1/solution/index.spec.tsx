import { render, screen } from "@testing-library/react";
import { Solution } from ".";
import { SnackbarProvider } from "../../useSnackBar";

describe("loads a solution", () => {
  it("renders the solution", () => {
    render(
      <SnackbarProvider>
        <Solution />
      </SnackbarProvider>,
    );
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
