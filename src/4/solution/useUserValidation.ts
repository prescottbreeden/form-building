import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { User } from "./types";
import { usePhoneValidation } from "./usePhoneValidation";

export const useUserValidation = () => {
  const phoneValidation = usePhoneValidation();
  return useValidation<User>({
    username: [required()],
    password: [required()],
    dob: [required(), {
      error: 'Date of Birth must be in the past',
      validation: ({ dob }) => {
        const currentDate = new Date(Date.now());
        const asDate = new Date(dob);
        return asDate < currentDate;
      }
    }],
    phones: [
      {
        error: "All phones must be valid",
        validation: ({ phones }) =>
          phones.every((p) => phoneValidation.validateAll(p)),
      },
    ],
  });
};
