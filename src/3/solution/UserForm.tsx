import React from "react";
import type { FormProps, Phone, User } from "./types";
import { FieldText } from "@looker/components";
import { IncrementalPhoneForm } from "./IncrementalPhoneForm";
import { eventNameValue, transformError } from "../../miscellaneous";
import { useUserValidation } from "./useUserValidation";

export const UserForm = ({ data, onChange, submitFailed }: FormProps<User>) => {
  const v = useUserValidation();
  const handleOnChange = (e: any) => onChange(eventNameValue(e));

  // --[ Phone logic ]---------------------------------------------------------
  const handlePhoneChange = (idx: number) => (newData: Partial<Phone>) => {
    const phones = data.phones.map((p, i) =>
      i === idx ? { ...p, ...newData } : p,
    );
    onChange({ phones });
  };

  const addPhone = () => {
    onChange({ phones: [...data.phones, { type: "", number: "" }] });
  };

  const removePhone = (idx: number) => () => {
    const phones = data.phones.filter((_p, i) => i !== idx);
    onChange({ phones });
  };

  // --[ Side Effects ]--------------------------------------------------------
  React.useEffect(() => {
    if (submitFailed) {
      v.validateAll(data);
    }
  }, [submitFailed, data, v]);

  return (
    <>
      <FieldText
        name="firstName"
        label="First Name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError("firstName"))}
        value={data.firstName}
      />
      <FieldText
        name="lastName"
        label="Last Name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError("lastName"))}
        value={data.lastName}
      />
      <FieldText
        name="email"
        label="Email"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        required
        validationMessage={transformError(v.getError("email"))}
        value={data.email}
      />
      <IncrementalPhoneForm
        phones={data.phones}
        onChange={handlePhoneChange}
        addPhone={addPhone}
        removePhone={removePhone}
        submitFailed={submitFailed}
      />
    </>
  );
};
