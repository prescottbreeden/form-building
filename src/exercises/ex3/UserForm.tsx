import React from 'react'
import { FieldText } from "@looker/components";
import { eventNameValue, transformError } from "../../miscellaneous";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidations";

export const UserForm = ({
  data,
  onChange,
  submitFailed,
}: {
  data: User;
  onChange: (a: Partial<User>) => void;
  submitFailed: boolean,
}) => {
  const v = useUserValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  React.useEffect(() => {
    submitFailed && v.validateAll(data)
  }, [submitFailed])

  return (
    <>
      <FieldText
        label="First Name"
        name="firstName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        validationMessage={transformError(v.getError("firstName"))}
        value={data.firstName}
      />
      <FieldText
        label="Last Name"
        name="lastName"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        validationMessage={transformError(v.getError("lastName"))}
        value={data.lastName}
      />
      <FieldText
        label="Email"
        name="email"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        validationMessage={transformError(v.getError("email"))}
        value={data.email}
      />
    </>
  );
};
