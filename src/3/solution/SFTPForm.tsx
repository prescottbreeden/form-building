import React from "react";
import { Box, FieldText } from "@looker/components";
import { Select } from '../../components/'
import { eventNameValue, transformError } from "../../miscellaneous";
import type { SFTP } from "../../types";
import { useSFTPValidation } from "./useSFTPValidation";

export const SFTPForm = ({
  data,
  onChange,
  submitFailed,
  resetForm,
}: {
  data: SFTP;
  onChange: (a: Partial<SFTP>) => void;
  submitFailed: boolean;
  resetForm: boolean;
}) => {
  const v = useSFTPValidation();

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
      <FieldText
        label="Address"
        name="address"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        validationMessage={transformError(v.getError("address"))}
        value={data.address}
      />
      <Box display="flex">
        <FieldText
          label="Username"
          name="username"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          required
          validationMessage={transformError(v.getError("username"))}
          value={data.username}
        />
        <FieldText
          label="Password"
          name="password"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          required
          validationMessage={transformError(v.getError("password"))}
          value={data.password}
        />
      </Box>
      <Select
        label="Preferred key exchange algorithm"
        name="key_exchange"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        validationMessage={transformError(v.getError("key_exchange"))}
        value={data.key_exchange}
      />
    </>
  );
};
