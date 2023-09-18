import { longerThan, required, shorterThan } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { User } from "./types";

export const useUserValidation = () => {
  return useValidation<User>({
    username: [
      required(),
      {
        error: "Cannot contain symbols.",
        validation: ({ username }) => /^[a-zA-Z0-9]+$/.test(username),
      },
    ],
    password: [required(), longerThan(5)],
    dob: [
      required(),
      {
        error: "Date of Birth must be in the past",
        validation: ({ dob }) => {
          return dob ? dob < new Date(Date.now()) : true;
        },
      },
    ],
  });
};
