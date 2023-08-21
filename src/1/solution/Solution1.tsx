import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { eventNameValue } from "../../miscellaneous";
import { User } from "../../types";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
};

/**
 * Requirements:
 *   1) Text inputs for all User fields
 *   2) Submit button that logs the current state
 *   3) Cancel button that clears out the form data
 */
export const Solution1 = () => {
  const [state, setState] = React.useState(initialState);

  const handleChange = (event: any) => {
    setState((prev) => ({ ...prev, ...eventNameValue(event) }));
  };

  const handleSubmit = () => {
    // success!
  };

  const handleCancel = () => {
    setState(initialState);
  };

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        sx={{ my: '1rem' }}
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={state.firstName}
      />
      <TextField
        sx={{ my: '1rem' }}
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={state.lastName}
      />
      <TextField
        sx={{ my: '1rem' }}
        label="Email"
        name="email"
        onChange={handleChange}
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
