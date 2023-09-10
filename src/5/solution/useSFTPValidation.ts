import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";
import type { SFTP } from "./types";

export const useSFTPValidation = () => {
  return useValidation<SFTP>({
    address: [required()],
    username: [required()],
    password: [required()],
    key_exchange: [required()],
  });
}
