import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { eventNameValue } from "../../miscellaneous";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidations";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
};

/**
 * Requirements:
 *   1) All fields are required
 *   2) firstName must be "Bob" or "bob"
 *   3) lastName must be "Ross" or "ross"
 *   4) email must be a valid email
 *   5) Validation errors on trigger on blur
 *   6) Once errors have been triggered, users should see active errors until valid
 *   7) Validation errors dissapear as soon as field is valid
 *   8) Submit logs "success!" if form state is valid
 *   9) Cancel clears all data and any validation errors
 */
export const Solution2 = () => {
  const [state, setState] = React.useState(initialState);
  const v = useUserValidation();

  const handleChange = (event: any) => {
    setState((prev) => ({ ...prev, ...eventNameValue(event) }));
  };

  const handleSubmit = () => {
    if (v.validateAll(state)) {
      // success!
    }
  };

  const handleCancel = () => {
    setState(initialState);
    v.resetValidationState();
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        sx={{ my: '1rem' }}
        error={!v.getFieldValid('firstName')}
        helperText={v.getError('firstName')}
        label="First Name"
        name="firstName"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        required
        value={state.firstName}
      />
      <TextField
        sx={{ my: '1rem' }}
        error={!v.getFieldValid('lastName')}
        helperText={v.getError('lastName')}
        label="Last Name"
        name="lastName"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        required
        value={state.lastName}
      />
      <TextField
        sx={{ my: '1rem' }}
        error={!v.getFieldValid('email')}
        helperText={v.getError('email')}
        label="Email"
        name="email"
        onBlur={v.validateOnBlur(state)}
        onChange={v.validateOnChange(handleChange, state)}
        required
        value={state.email}
      />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} sx={{ mr: "1rem" }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </Box>
  );
};
