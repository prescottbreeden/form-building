import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateUser } from "./CreateUser";

describe("Create User tests", () => {
  describe("layout", () => {
    it("updates fields with user interactions", () => {
      render(<CreateUser />);
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
  });
  describe("actions", () => {
    it("clears a form of all data when cancel is clicked on", () => {
      render(<CreateUser />);
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
});
