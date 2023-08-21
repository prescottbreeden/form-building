import { required } from "@de-formed/base";
import { useValidation } from "@de-formed/react-validations";

import type { Settings } from "../../types";
import { useAWSValidation } from "./useAWSValidation";
import { useSFTPValidation } from "./useSFTPValidation";

const isEmail = (obj: Settings) => obj.destination === "EMAIL";
const isWebHook = (obj: Settings) => obj.destination === "WEBHOOK";
const isAWS = (obj: Settings) => obj.destination === "AWS";
const isSFTP = (obj: Settings) => obj.destination === "SFTP";

const when =
  (
    predicate: (obj: Settings) => boolean,
    validate: (obj: Settings) => boolean
  ) =>
  (obj: Settings) =>
    predicate(obj) ? validate(obj) : true;

export const useSettingsValidation = () => {
  const awsValidation = useAWSValidation();
  const sftpValidation = useSFTPValidation();
  return useValidation<Settings>({
    schedule_name: [required()],
    emails: [
      {
        error: "Please provide at least one email",
        validation: when(isEmail, ({ emails }) => emails.length > 0),
      },
    ],
    webhook_url: [
      {
        error: "Webhook url is required.",
        validation: when(isWebHook, ({ webhook_url }) => !!webhook_url),
      },
    ],
    aws: [
      {
        error: "AWS values are invalid.",
        validation: when(isAWS, ({ aws }) => awsValidation.validateAll(aws)),
      },
    ],
    sftp: [
      {
        error: "moops",
        validation: when(isSFTP, ({ sftp }) =>
          sftpValidation.validateAll(sftp)
        ),
      },
    ],
  });
};
