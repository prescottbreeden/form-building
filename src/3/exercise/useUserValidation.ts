import { useValidation } from "@de-formed/react-validations";
import { required } from "@de-formed/base";
import { User } from "../../types";

export const useUserValidation = () => {
  return useValidation<User>({
    firstName: [
      required(),
      {
        error: "Must be Bob",
        validation: ({ firstName }) => firstName.toLowerCase() === "bob",
      },
    ],
    lastName: [
      required(),
      {
        error: "Must be Ross",
        validation: ({ lastName }) => lastName.toLowerCase() === "ross",
      },
    ],
    email: [
      required(),
      {
        error: "Must be a valid email.",
        validation: ({email}) => /^\S+@\S+\.\S+$/.test(email),
      },
    ],
  });
};
