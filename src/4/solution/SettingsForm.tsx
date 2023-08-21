import React from "react";
import { Select, TextField } from "@mui/material";
import { eventNameValue } from "../../miscellaneous";
import type { AWS, Settings, SFTP } from "../../types";
import { useSettingsValidation } from "./useSettingsValidation";
import { AWSForm } from "./AWSForm";
import { SFTPForm } from "./SFTPForm";

export const SettingsForm = ({
  data,
  onChange,
  submitFailed,
  resetForm,
}: {
  data: Settings;
  onChange: (a: Partial<Settings>) => void;
  submitFailed: boolean;
  resetForm: boolean;
}) => {
  const v = useSettingsValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  const handleAWSChange = (aws: Partial<AWS>) =>
    onChange({ aws: { ...data.aws, ...aws } });

  const handleSFTPChange = (sftp: Partial<SFTP>) =>
    onChange({
      sftp: {
        ...data.sftp,
        ...sftp,
      },
    });

  React.useEffect(() => {
    submitFailed && v.validateAll(data);
  }, [submitFailed]);

  React.useEffect(() => {
    v.resetValidationState();
  }, [resetForm]);

  return (
    <>
      <TextField
        label="Schedule Name"
        name="schedule_name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("schedule_name"))}
        value={data.schedule_name}
      />
      <Select
        label="Recurrence"
        name="recurrence"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("recurrence"))}
        value={data.recurrence}
      />
      <Select
        label="Time"
        name="time"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("time"))}
        value={data.time}
      />
      <Select
        label="Destination"
        name="destination"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // options={[
        //   { label: "Email", value: "EMAIL" },
        //   { label: "Webhook", value: "WEBHOOK" },
        //   { label: "S3 Bucket", value: "AWS" },
        //   { label: "SFTP", value: "SFTP" },
        // ]}
        // validationMessage={transformError(v.getError("destination"))}
        value={data.destination}
      />
      {data.destination === "WEBHOOK" && (
        <TextField
          required
          label="Webhook URL"
          name="webhook_url"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          // validationMessage={transformError(v.getError("webhook_url"))}
          value={data.webhook_url}
        />
      )}
      {data.destination === "AWS" && (
        <AWSForm
          data={data.aws}
          onChange={handleAWSChange}
          submitFailed={submitFailed}
          resetForm={resetForm}
        />
      )}
      {data.destination === "SFTP" && (
        <SFTPForm
          data={data.sftp}
          onChange={handleSFTPChange}
          submitFailed={submitFailed}
          resetForm={resetForm}
        />
      )}
      <Select
        label="Format"
        name="format"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("format"))}
        value={data.format}
      />
    </>
  );
};
// {data.destination === "EMAIL" && (
//   <FieldChips
//     required
//     label="Emails"
//     name="emails"
//     onBlur={v.validateOnBlur(data)}
//     onChange={flow(
//       fakeChangeEvent("emails"),
//       v.validateOnChange(handleChange, data)
//     )}
//     validationMessage={transformError(v.getError("emails"))}
//     values={data.emails}
//   />
// )}