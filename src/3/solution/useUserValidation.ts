import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { User } from "./types";
import { usePhoneValidation } from "./usePhoneValidation";

export const useUserValidation = () => {
  const phoneValidation = usePhoneValidation();
  return useValidation<User>({
    firstName: [required()],
    lastName: [required()],
    email: [required()],
    phones: [
      {
        error: "All phones must be valid",
        validation: ({ phones }) =>
          phones.every((p) => phoneValidation.validateAll(p)),
      },
    ],
  });
};
