import React from "react";
import type { FormProps, Phone, User } from "./types";
import { Box, FieldText } from "@looker/components";
import { FieldDate } from "../../components/FieldDate";
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
      <Box mb="1rem">
        <FieldText
          name="username"
          label="First Name"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleOnChange, data)}
          required
          validationMessage={transformError(v.getError("username"))}
          value={data.username}
        />
      </Box>
      <Box mb="1rem">
        <FieldText
          name="password"
          label="Last Name"
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
      <Box mb="1rem">
        <IncrementalPhoneForm
          phones={data.phones}
          onChange={handlePhoneChange}
          addPhone={addPhone}
          removePhone={removePhone}
          submitFailed={submitFailed}
        />
      </Box>
    </>
  );
};
