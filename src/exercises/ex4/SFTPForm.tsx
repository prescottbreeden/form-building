import React from "react";
import flow from 'lodash/fp/flow';
import { Box, FieldSelect, FieldText } from "@looker/components";
import {
  eventNameValue,
  fakeChangeEvent,
  transformError,
} from "../../miscellaneous";
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
        required
        label="Address"
        name="address"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        validationMessage={transformError(v.getError("address"))}
        value={data.address}
      />
      <Box display="flex">
        <FieldText
          required
          label="Username"
          name="username"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          validationMessage={transformError(v.getError("username"))}
          value={data.username}
        />
        <FieldText
          required
          label="Password"
          name="password"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          validationMessage={transformError(v.getError("password"))}
          value={data.password}
        />
      </Box>
      <FieldSelect
        required
        label="Preferred key exchange algorithm"
        name="key_exchange"
        onBlur={v.validateOnBlur(data)}
        onChange={flow(
          fakeChangeEvent("key_exchange"),
          v.validateOnChange(handleChange, data)
        )}
        options={[
          { label: "Default", value: "default" },
          { label: "rubber", value: "rubber" },
          { label: "baby", value: "baby" },
          { label: "buggy", value: "buggy" },
          { label: "bumpers", value: "bumpers" },
        ]}
        validationMessage={transformError(v.getError("key_exchange"))}
        value={data.key_exchange}
      />
    </>
  );
};
