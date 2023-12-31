import { act, screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreateUser } from "./CreateUser";
import { Providers } from "../../Providers";

describe("Create User tests", () => {
  beforeEach(() => {
    render(
      <Providers>
        <CreateUser />
      </Providers>,
    );
  });
  describe("filling out fields", () => {
    it("updates fields with user interactions", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
  });
  describe("save", () => {
    it("toasts a success message when user clicks save", () => {
      userEvent.click(screen.getByRole("button", { name: /save/i }));
      expect(screen.queryByText("Success!")).toBeInTheDocument();
    });
  });
  describe("cancel", () => {
    it("clears a form of all data when user clicks cancel", () => {
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
