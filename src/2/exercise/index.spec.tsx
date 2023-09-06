import { Exercise } from "./";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SnackbarProvider } from "../../useSnackBar";

describe("Exercise 2: CreateUser", () => {
  beforeEach(() => {
    render(
      <SnackbarProvider>
        <Exercise />
      </SnackbarProvider>,
    );
  });
  describe("filling out form", () => {
    it("renders the necessary fields", () => {
      [
        screen.queryByLabelText(/first name/i),
        screen.queryByLabelText(/last name/i),
        screen.queryByLabelText(/email/i),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
    it("updates fields with user interactions", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });

    it("does not show validation errors while entering data on non-dirty field", () => {
      // first name
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      expect(screen.queryByText(/must be bob/i)).not.toBeInTheDocument()

      // last name
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      expect(screen.queryByText(/must be ross/i)).not.toBeInTheDocument()

      // email
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      expect(screen.queryByText(/must be a valid email/i)).not.toBeInTheDocument()
    });

    it("shows errors when a user blurs an input with invalid data", () => {
      // first name
      userEvent.type(screen.getByLabelText(/first name/i), "dingo");
      userEvent.tab();
      expect(screen.getByText(/must be bob/i)).toBeInTheDocument()

      // last name
      userEvent.type(screen.getByLabelText(/last name/i), "quokka");
      userEvent.tab();
      expect(screen.getByText(/must be ross/i)).toBeInTheDocument()

      // email
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka");
      userEvent.tab();
      expect(screen.getByText(/must be a valid email/i)).toBeInTheDocument()
    });

    it("removes errors when a user provides valid data", () => {
      const firstName = screen.getByLabelText(/first name/i);
      const lastName = screen.getByLabelText(/last name/i);
      const email = screen.getByLabelText(/email/i);

      // first name
      userEvent.type(firstName, "dingo");
      userEvent.tab();
      expect(screen.getByText(/must be bob/i)).toBeInTheDocument()
      userEvent.clear(firstName)
      userEvent.type(firstName, "bob");
      expect(screen.queryByText(/first name is required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be bob/i)).not.toBeInTheDocument()

      // last name
      userEvent.type(lastName, "quokka");
      userEvent.tab();
      expect(screen.getByText(/must be ross/i)).toBeInTheDocument()
      userEvent.clear(lastName)
      userEvent.type(lastName, "ross");
      expect(screen.queryByText(/last name is required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be ross/i)).not.toBeInTheDocument()

      // email
      userEvent.type(email, "dingo@quokka");
      userEvent.tab();
      expect(screen.getByText(/must be a valid email/i)).toBeInTheDocument()
      userEvent.clear(email)
      userEvent.type(email, "bob@bob.com");
      expect(screen.queryByText(/email is required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be a valid email/i)).not.toBeInTheDocument()
    })
    it("shows errors until valid data is entered once state is dirty", () => {
      // dirty all elements
      userEvent.click(screen.getByRole("button", { name: /save/i }));

      const firstName = screen.getByLabelText(/first name/i);
      const lastName = screen.getByLabelText(/last name/i);
      const email = screen.getByLabelText(/email/i);

      // first name
      expect(screen.queryByText(/first name is required/i)).toBeInTheDocument()
      userEvent.type(firstName, "dingo");
      expect(screen.getByText(/must be bob/i)).toBeInTheDocument()
      userEvent.clear(firstName)
      userEvent.type(firstName, "bob");
      expect(screen.queryByText(/first name is required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be bob/i)).not.toBeInTheDocument()

      // // last name
      expect(screen.queryByText(/last name is required/i)).toBeInTheDocument()
      userEvent.type(lastName, "quokka");
      expect(screen.getByText(/must be ross/i)).toBeInTheDocument()
      userEvent.clear(lastName)
      userEvent.type(lastName, "ross");
      expect(screen.queryByText(/last name is required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be ross/i)).not.toBeInTheDocument()

      // email
      expect(screen.queryByText(/email is required/i)).toBeInTheDocument()
      userEvent.type(email, "dingo@quokka");
      expect(screen.getByText(/must be a valid email/i)).toBeInTheDocument()
      userEvent.clear(email)
      userEvent.type(email, "bob@bob.com");
      expect(screen.queryByText(/email required/i)).not.toBeInTheDocument()
      expect(screen.queryByText(/must be a valid email/i)).not.toBeInTheDocument()
    })
  });

  describe("save", () => {
    it("passes validations with a valid object", () => {
      userEvent.type(screen.getByLabelText(/first name/i), "bob");
      userEvent.type(screen.getByLabelText(/last name/i), "ross");
      userEvent.type(screen.getByLabelText(/email/i), "dingo@quokka.com");
      userEvent.click(screen.getByRole("button", { name: /save/i }));
      expect(screen.queryByText("Success!")).toBeInTheDocument();
    });
    it("shows all invalid field errors when clicking save", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      userEvent.click(save_button);
      expect(screen.queryByText("Ruh roh, Shaggy!")).toBeInTheDocument();
      [
        screen.getByText(/first name is required/i),
        screen.getByText(/last name is required/i),
        screen.getByText(/email is required/i),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
  });

  describe("cancel", () => {
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

    it("clears validation errors when cancel is clicked on", () => {
      const save_button = screen.getByRole("button", { name: /save/i });
      const cancel_button = screen.getByRole("button", { name: /cancel/i });
      userEvent.click(save_button);
      userEvent.click(cancel_button);
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => expect(ele).not.toBeInTheDocument());
    });
  });
});

