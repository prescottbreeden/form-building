import { Exercise } from "./";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SnackbarProvider } from "../../useSnackBar";

describe("Exercise 1", () => {
  beforeEach(() => {
    render(
      <SnackbarProvider>
        <Exercise />
      </SnackbarProvider>,
    );
  });
  describe("layout", () => {
    it("renders the necessary fields", () => {
      [
        screen.queryByLabelText(/first name/i),
        screen.queryByLabelText(/last name/i),
        screen.queryByLabelText(/email/i),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
    it("updates fields with user interactions", () => {
      userEvent.type(screen.getByLabelText("First Name"), "dingo");
      userEvent.type(screen.getByLabelText("Last Name"), "quokka");
      userEvent.type(screen.getByLabelText("Email"), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
  });
  describe("actions", () => {
    it("clears a form of all data when cancel is clicked on", () => {
      userEvent.type(screen.getByLabelText("First Name"), "dingo");
      userEvent.type(screen.getByLabelText("Last Name"), "quokka");
      userEvent.type(screen.getByLabelText("Email"), "dingo@quokka");
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(screen.queryByDisplayValue("dingo")).not.toBeInTheDocument();
      expect(screen.queryByDisplayValue("quokka")).not.toBeInTheDocument();
      expect(
        screen.queryByDisplayValue("dingo@quokka"),
      ).not.toBeInTheDocument();
    });
  });
});
