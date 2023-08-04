import { useValidation } from "@de-formed/react-validations";
import { required } from "@de-formed/base";
import { User } from "../../types";

export const useUserValidation = () => {
  return useValidation<User>({
    firstName: [required()],
    lastName: [required()],
    email: [required()],
  })
}
