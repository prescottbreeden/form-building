import React from "react";
import { FieldText } from "@looker/components";
import { eventNameValue, transformError } from "../../miscellaneous";
import { User } from "./types";
import { useUserValidation } from "./useUserValidation";

export type FormProps<T> = {
  data: T;
  onChange: (newData: Partial<T>) => void;
  resetForm: boolean;
  submitFailed: boolean;
};

export const UserForm = ({
  data,
  onChange,
  resetForm,
  submitFailed,
}: FormProps<User>) => {
  // validation object
  const v = useUserValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  // --[ side effects ]--
  React.useEffect(() => {
    if (submitFailed) v.validateAll(data);
  }, [submitFailed]);

  React.useEffect(() => {
    if (resetForm) v.resetValidationState();
  }, [resetForm]);

  return (
    <>
      <FieldText
        mb="1rem"
        validationMessage={transformError(v.getError("firstName"))}
        label="First Name"
        name="firstName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        value={data.firstName}
      />
      <FieldText
        mb="1rem"
        validationMessage={transformError(v.getError("lastName"))}
        label="Last Name"
        name="lastName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        value={data.lastName}
      />
      <FieldText
        mb="1rem"
        validationMessage={transformError(v.getError("email"))}
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
