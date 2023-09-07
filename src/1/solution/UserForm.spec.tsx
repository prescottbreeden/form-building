import { FormProps, UserForm } from "./UserForm";
import { screen, render } from "@testing-library/react";
import { User } from "./types";
import { Providers } from "../../Providers";

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
    ...overrides,
  };
  return (
    <Providers>
      <UserForm {...props} />
    </Providers>
  );
};

describe("Excercise 1", () => {
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
});
