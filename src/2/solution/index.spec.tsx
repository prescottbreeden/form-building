import { Solution } from "./";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("With Validations", () => {
  beforeEach(() => {
    render(<Solution />);
  });
  describe("layout", () => {
    it("renders the necessary fields", () => {
      screen.getByLabelText(/first name/i);
      screen.getByLabelText(/last name/i);
      screen.getByLabelText(/email/i);
    });
    it("updates fields with user interactions", () => {
      userEvent.type(screen.getByLabelText("First Name"), "dingo");
      userEvent.type(screen.getByLabelText("Last Name"), "quokka");
      userEvent.type(screen.getByLabelText("Email"), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach(ele => expect(ele).toBeInTheDocument())
    });
  });
  describe('actions', () => {
    it('clears a form of all data when cancel is clicked on', () => {
      userEvent.type(screen.getByLabelText("First Name"), "dingo");
      userEvent.type(screen.getByLabelText("Last Name"), "quokka");
      userEvent.type(screen.getByLabelText("Email"), "dingo@quokka");
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(screen.queryByDisplayValue("dingo")).not.toBeInTheDocument()
      expect(screen.queryByDisplayValue("quokka")).not.toBeInTheDocument()
      expect(screen.queryByDisplayValue("dingo@quokka")).not.toBeInTheDocument()
    })
  })
  describe("validations", () => {
    it("shows all invalid field errors when clicking save", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      userEvent.click(save_button);
      [
        screen.getByText("First name is required."),
        screen.getByText("Last name is required."),
        screen.getByText("Email is required."),
      ].forEach((ele) => expect(ele).toBeVisible);
    });
  });
});
