import React from "react";
import { Box, Button, FieldText } from "@looker/components";
import { eventNameValue, transformError } from "../../miscellaneous";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidations";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
}

export const BasicFormWithValidations = () => {
  const [state, setState] = React.useState(initialState);
  const v = useUserValidation()

  const handleChange = (event: any) => {
    setState((prev) => ({ ...prev, ...eventNameValue(event) }));
  };

  const handleSubmit = () => {
    console.log({ state })
    if(v.validateAll(state)) {
      console.log('success!')
    }
  }

  const handleCancel = () => {
    setState(initialState);
    v.resetValidationState();
  }

  return (
    <>
      <FieldText
        label="First Name"
        name="firstName"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        validationMessage={transformError(v.getError('firstName'))}
        value={state.firstName}
      />
      <FieldText
        label="Last Name"
        name="lastName"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        validationMessage={transformError(v.getError('lastName'))}
        value={state.lastName}
      />
      <FieldText
        label="Email"
        name="email"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        validationMessage={transformError(v.getError('email'))}
        value={state.email}
      />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} mr="1rem">Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </>
  );
};
