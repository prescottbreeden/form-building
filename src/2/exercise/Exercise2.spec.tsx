import { Exercise2 } from "./Exercise2";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("BasicFormWithValidation", () => {
  beforeEach(() => {
    render(<Exercise2 />);
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
        screen.queryByDisplayValue("dingo"),
        screen.queryByDisplayValue("quokka"),
        screen.queryByDisplayValue("dingo@quokka"),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
  });
  describe("actions", () => {
    it("clears a form of all data when cancel is clicked on", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      expect(screen.queryByDisplayValue("dingo")).not.toBeInTheDocument();
      expect(screen.queryByDisplayValue("quokka")).not.toBeInTheDocument();
      expect(
        screen.queryByDisplayValue("dingo@quokka"),
      ).not.toBeInTheDocument();
    });
  });
  describe("validations", () => {
    it("shows all invalid field errors when clicking save", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      userEvent.click(save_button);
      [
        screen.queryByText(/first name is required./i),
        screen.queryByText(/last name is required./i),
        screen.queryByText(/email is required./i),
      ].forEach((ele) => expect(ele).toBeVisible);
    });
    it("does not show a validation error before a blur event", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      expect(screen.queryByText(/must be bob/i)).not.toBeInTheDocument()
    })
    it("shows error messages on blur", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      fireEvent.blur(screen.getByLabelText(/first name/i));
      expect(screen.getByText(/must be bob/i)).toBeInTheDocument();
    });
    it("removes error messages when valid", () => {
      fireEvent.blur(screen.getByLabelText(/first name/i));
      expect(
        screen.queryByText(/first name is required./i),
      ).toBeInTheDocument();
      userEvent.type(screen.getByLabelText(/first name/i), "bob");
      expect(
        screen.queryByText(/first name is required./i),
      ).not.toBeInTheDocument();
    });
    it("clears all validation errors on cancel", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      userEvent.click(save_button);
      [
        screen.queryByText(/first name is required./i),
        screen.queryByText(/last name is required./i),
        screen.queryByText(/email is required./i),
      ].forEach((ele) => expect(ele).toBeVisible);
      userEvent.click(screen.getByRole("button", { name: /cancel/i }));
      [
        screen.queryByText(/first name is required./i),
        screen.queryByText(/last name is required./i),
        screen.queryByText(/email is required./i),
      ].forEach((ele) => expect(ele).not.toBeVisible);
    });
  });
});
