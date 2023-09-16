import React from "react";
import { Box, FieldText } from "@looker/components";
import type { FormProps, Phone } from "./types";
import { eventNameValue, transformError } from "../../miscellaneous";
import { usePhoneValidation } from "./usePhoneValidation";

export const PhoneForm = ({
  onChange,
  data,
  submitFailed,
}: FormProps<Phone>) => {
  const v = usePhoneValidation();
  const handleOnChange = (e: any) => onChange(eventNameValue(e));

  React.useEffect(() => {
    if (submitFailed) {
      v.validateAll(data);
    }
  }, [submitFailed, data, v]);

  return (
    <Box width="90%" display="flex" justifyContent="space-between">
      <FieldText
        required
        width="48%"
        name="type"
        label="Type"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        validationMessage={transformError(v.getError("type"))}
        value={data.type}
      />
      <FieldText
        required
        width="48%"
        name="number"
        label="Number"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleOnChange, data)}
        validationMessage={transformError(v.getError("number"))}
        value={data.number}
      />
    </Box>
  );
};
