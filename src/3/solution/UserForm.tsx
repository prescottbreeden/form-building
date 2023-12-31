import React from "react";
import type { FormProps, User } from "./types";
import { Box, FieldText } from "@looker/components";
import { FieldDate, FieldPassword } from "../../components";
import { eventNameValue, transformError } from "../../miscellaneous";
import { useUserValidation } from "./useUserValidation";

export const UserForm = ({ data, onChange, submitFailed }: FormProps<User>) => {
  const v = useUserValidation();
  const handleOnChange = (e: any) => onChange(eventNameValue(e));

  React.useEffect(() => {
    if (submitFailed) {
      v.validateAll(data);
    }
  }, [submitFailed, data, v]);

  return (
    <>
      <Box mb="1rem">
        <FieldText
          name="username"
          label="Username"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleOnChange, data)}
          required
          validationMessage={transformError(v.getError("username"))}
          value={data.username}
        />
      </Box>
      <Box mb="1rem">
        <FieldPassword
          name="password"
          label="Password"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleOnChange, data)}
          required
          validationMessage={transformError(v.getError("password"))}
          value={data.password}
        />
      </Box>
      <Box mb="1rem">
        <FieldDate
          name="dob"
          label="Date of Birth"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleOnChange, data)}
          required
          validationMessage={transformError(v.getError("dob"))}
          value={data.dob}
        />
      </Box>
    </>
  );
};
