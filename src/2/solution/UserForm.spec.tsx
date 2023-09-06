import { FormProps, UserForm } from "./UserForm";
import { screen, render, fireEvent } from "@testing-library/react";
import { User } from "../../types";
import { SnackbarProvider } from "../../useSnackBar";

const emptyUser: User = {
  firstName: "",
  lastName: "",
  email: "",
};

const mockUser: User = {
  firstName: "dingo",
  lastName: "quokka",
  email: "dingo@quokka",
};

const mockUserForm = (overrides: Partial<FormProps<User>> = {}) => {
  const props: FormProps<User> = {
    onChange: (_: Partial<User>) => undefined,
    data: emptyUser,
    resetForm: false,
    submitFailed: false,
    ...overrides,
  };
  return (
    <SnackbarProvider>
      <UserForm {...props} />
    </SnackbarProvider>
  );
};

describe("Exercise 2: UserForm", () => {
  describe("layout", () => {
    it("renders the necessary fields", () => {
      render(mockUserForm());
      [
        screen.queryByLabelText(/first name/i),
        screen.queryByLabelText(/last name/i),
        screen.queryByLabelText(/email/i),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
    it("renders data to each field", () => {
      const { rerender } = render(mockUserForm());
      [
        screen.queryByDisplayValue("dingo"),
        screen.queryByDisplayValue("quokka"),
        screen.queryByDisplayValue("dingo@quokka"),
      ].forEach((ele) => {
        expect(ele).not.toBeInTheDocument();
      });
      rerender(mockUserForm({ data: mockUser }));
      [
        screen.getByDisplayValue("dingo"),
        screen.getByDisplayValue("quokka"),
        screen.getByDisplayValue("dingo@quokka"),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
  });
  describe("validations", () => {
    it("shows validation errors on blur", () => {
      render(mockUserForm());
      [
        screen.getByLabelText(/first name/i),
        screen.getByLabelText(/last name/i),
        screen.getByLabelText(/email/i),
      ].forEach(fireEvent.blur);
      [
        screen.getByText(/first name is required/i),
        screen.getByText(/last name is required/i),
        screen.getByText(/email is required/i),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
    it("shows validation errors when submitFailed is true", () => {
      const { rerender } = render(mockUserForm());
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => {
        expect(ele).not.toBeInTheDocument();
      });
      rerender(mockUserForm({ submitFailed: true }));
      [
        screen.getByText(/first name is required/i),
        screen.getByText(/last name is required/i),
        screen.getByText(/email is required/i),
      ].forEach((ele) => {
        expect(ele).toBeInTheDocument();
      });
    });
    it("clears a form of all validation errors when resetForm is true", () => {
      const { rerender } = render(mockUserForm());
      [
        screen.getByLabelText(/first name/i),
        screen.getByLabelText(/last name/i),
        screen.getByLabelText(/email/i),
      ].forEach(fireEvent.blur);
      rerender(
        mockUserForm({
          data: emptyUser,
          resetForm: true,
        }),
      );
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => {
        expect(ele).not.toBeInTheDocument();
      });
    });
  });
});
