import { ValidationObject } from "@de-formed/base";
import { renderHook, act } from "@testing-library/react";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidation";

const user = (props: Partial<User> = {}): User => ({
  firstName: "",
  lastName: "",
  email: "",
  ...props,
});

const validUser: User = user({
  firstName: "bob",
  lastName: "ross",
  email: "bob@ross.com",
});

const emptyUser: User = user();

describe("useUserValidation", () => {
  let result: { current: ValidationObject<User> };
  beforeEach(() => {
    result = renderHook(useUserValidation).result;
  });
  describe("entity", () => {
    test("it generates no errors for a valid object", () => {
      act(() => {
        expect(result.current.validateAll(validUser)).toBe(true);
      });
      expect(result.current.validationErrors).toStrictEqual([]);
    });
    test("it contains all errors for an invalid object", () => {
      act(() => {
        expect(result.current.validateAll(emptyUser)).toBe(false);
      });
      expect(result.current.validationErrors).toStrictEqual([
        "First Name is required.",
        "Last Name is required.",
        "Email is required.",
      ]);
    });
  });
  describe("properties", () => {
    test("firstName is required and must be bob", () => {
      act(() => {
        expect(result.current.validate("firstName", emptyUser)).toBe(false);
        expect(result.current.validate("firstName", validUser)).toBe(true);
        expect(
          result.current.validate("firstName", user({ firstName: "dingo" })),
        ).toBe(false);
      });
      expect(result.current.getError("firstName")).toBe("Must be Bob");
    });
    test('lastName is required and must be ross', () => {
      act(() => {
        expect(result.current.validate("lastName", emptyUser)).toBe(false);
        expect(result.current.validate("lastName", validUser)).toBe(true);
        expect(
          result.current.validate("lastName", user({ lastName: "dingo" })),
        ).toBe(false);
      });
      expect(result.current.getError("lastName")).toBe("Must be Ross");
    });
    test('email is required and must be valid', () => {
      act(() => {
        expect(result.current.validate("email", emptyUser)).toBe(false);
        expect(result.current.validate("email", validUser)).toBe(true);
        expect(
          result.current.validate("email", user({ email: "dingo@dingo" })),
        ).toBe(false);
      });
      expect(result.current.getError("email")).toBe("Must be a valid email.");
    });
  });
});
