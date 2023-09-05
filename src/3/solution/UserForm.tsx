import React from "react";
import { TextField } from "@mui/material";
import { eventNameValue } from "../../miscellaneous";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidation";

export type UserFormProps = {
  data: User;
  onChange: (a: Partial<User>) => void;
  submitFailed: boolean;
  resetForm: boolean;
};

export const UserForm = ({
  data,
  onChange,
  resetForm,
  submitFailed,
}: UserFormProps) => {
  const v = useUserValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  React.useEffect(() => {
    if (submitFailed) v.validateAll(data);
  }, [submitFailed]);

  React.useEffect(() => {
    if (resetForm) v.resetValidationState();
  }, [resetForm]);

  return (
    <>
      <TextField
        sx={{ my: "1rem" }}
        error={!v.getFieldValid("firstName")}
        helperText={v.getError("firstName")}
        label="First Name"
        name="firstName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        value={data.firstName}
      />
      <TextField
        sx={{ my: "1rem" }}
        error={!v.getFieldValid("lastName")}
        helperText={v.getError("lastName")}
        label="Last Name"
        name="lastName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        value={data.lastName}
      />
      <TextField
        sx={{ my: "1rem" }}
        error={!v.getFieldValid("email")}
        helperText={v.getError("email")}
        label="Email"
        name="email"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        value={data.email}
      />
    </>
  );
};
