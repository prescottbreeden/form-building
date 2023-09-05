import React from 'react';
import { screen, render } from "@testing-library/react";
import { User } from "../src/types";
import { UserForm } from "../src/3/solution/UserForm";
import type { UserFormProps } from "../src/3/solution/UserForm";

const emptyUser: User = {
  firstName: "",
  lastName: "",
  email: "",
};

const validUser: User = {
  firstName: "Bob",
  lastName: "Ross",
  email: "bobross@gmail.com",
};

const mockedUserForm = (overrides: Partial<UserFormProps> = {}) => {
  const defaultProps: UserFormProps = {
    onChange: (_: Partial<User>) => undefined,
    data: emptyUser,
    submitFailed: false,
    resetForm: false,
  };
  const props: UserFormProps = {
    ...defaultProps,
    ...overrides,
  };
  return <UserForm {...props} />;
};

describe("User Form", () => {
  beforeEach(() => {});
  describe("layout", () => {
    it("renders the necessary fields", () => {
      render(mockedUserForm());
      [
        screen.queryByLabelText(/first name/i),
        screen.queryByLabelText(/last name/i),
        screen.queryByLabelText(/email/i),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
    it("renders the values of a user into the fields", () => {
      const { rerender } = render(mockedUserForm());
      expect(screen.queryByDisplayValue("Bob")).not.toBeInTheDocument();
      expect(screen.queryByDisplayValue("Ross")).not.toBeInTheDocument();
      expect(
        screen.queryByDisplayValue("bobross@gmail.com"),
      ).not.toBeInTheDocument();
      rerender(mockedUserForm({ data: validUser }));
      expect(screen.queryByDisplayValue("Bob")).toBeInTheDocument();
      expect(screen.queryByDisplayValue("Ross")).toBeInTheDocument();
      expect(
        screen.queryByDisplayValue("bobross@gmail.com"),
      ).toBeInTheDocument();
    });
  });
  describe("validations", () => {
    it("shows validation errors when submitFailed is true", () => {
      render(mockedUserForm({ submitFailed: true }));
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
    });
    it("removes validation errors when resetForm is true", () => {
      const { rerender } = render(mockedUserForm({submitFailed: true}));
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => expect(ele).toBeInTheDocument());
      rerender(mockedUserForm({resetForm: true}));
      [
        screen.queryByText(/first name is required/i),
        screen.queryByText(/last name is required/i),
        screen.queryByText(/email is required/i),
      ].forEach((ele) => expect(ele).not.toBeInTheDocument());
    })
  });
});
