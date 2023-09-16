import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { AWS } from "./types";

export const useAWSValidation = () => {
  return useValidation<AWS>({
    bucket: [required()],
    optional_path: [required()],
    access_key: [required()],
    secret_key: [required()],
  });
}
