import React from "react";
import { Box, TextField } from "@mui/material";
import { eventNameValue } from "../../miscellaneous";

import type { AWS } from "../../types";
import { useAWSValidation } from "./useAWSValidation";

export const AWSForm = ({
  data,
  onChange,
  submitFailed,
  resetForm,
}: {
  data: AWS;
  onChange: (a: Partial<AWS>) => void;
  submitFailed: boolean;
  resetForm: boolean;
}) => {
  const v = useAWSValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  React.useEffect(() => {
    submitFailed && v.validateAll(data);
  }, [submitFailed]);

  React.useEffect(() => {
    resetForm && v.resetValidationState()
  }, [resetForm])

  return (
    <>
      <Box display="flex">
        <TextField
          required
          label="Bucket"
          name="bucket"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          // validationMessage={transformError(v.getError("bucket"))}
          value={data.bucket}
        />
        <TextField
          required
          label="Optional Path"
          name="optional_path"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          // validationMessage={transformError(v.getError("optional_path"))}
          value={data.optional_path}
        />
      </Box>
      <TextField
        required
        label="Access Key"
        name="access_key"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("access_key"))}
        value={data.access_key}
      />
      <TextField
        required
        label="Secret Key"
        name="secret_key"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        // validationMessage={transformError(v.getError("secret_key"))}
        value={data.secret_key}
      />
    </>
  );
};
