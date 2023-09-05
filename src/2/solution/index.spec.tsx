import { Solution } from "./";
import { fireEvent, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("With Validations", () => {
  beforeEach(() => {
    render(<Solution />);
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
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach(ele => expect(ele).toBeInTheDocument())
    });
  });
  describe('actions', () => {
    it('clears a form of all data when cancel is clicked on', () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(screen.queryByDisplayValue("dingo")).not.toBeInTheDocument()
      expect(screen.queryByDisplayValue("quokka")).not.toBeInTheDocument()
      expect(screen.queryByDisplayValue("dingo@quokka")).not.toBeInTheDocument()
    })
  })
  describe("validations", () => {
    it("shows all invalid field errors when clicking save", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      fireEvent.click(save_button);
      [
        screen.getByText(/first name is required/i),
        screen.getByText(/last name is required/i),
        screen.getByText(/email is required/i),
      ].forEach((ele) => expect(ele).toBeVisible);
    });
  });
});
