import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { Phone } from "./types";

export const usePhoneValidation = () => {
  return useValidation<Phone>({
    type: [required()],
    number: [required()],
  });
}
