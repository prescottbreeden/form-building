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
 *   1) CreateUser defines state and submit/cancel
 *   2) UserForm has text inputs for all User fields
 *   3) Submit button that logs the current state
 *   4) Cancel button that clears out the form data
 */
export const Solution = () => {
  return <CreateUser />;
};

type FormProps<T> = {
  data: T;
  onChange: (newData: Partial<T>) => void;
};

const UserForm = ({ data, onChange }: FormProps<User>) => {
  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  return (
    <>
      <TextField
        sx={{ my: "1rem" }}
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={data.firstName}
      />
      <TextField
        sx={{ my: "1rem" }}
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={data.lastName}
      />
      <TextField
        sx={{ my: "1rem" }}
        label="Email"
        name="email"
        onChange={handleChange}
        value={data.email}
      />
    </>
  );
};

const CreateUser = () => {
  const [state, setState] = React.useState(initialState);

  const handleChange = (newData: Partial<User>) => {
    setState((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    // success!
  };

  const handleCancel = () => {
    setState(initialState);
  };

  return (
    <Box display="flex" flexDirection="column">
      <UserForm data={state} onChange={handleChange} />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} sx={{ mr: "1rem" }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </Box>
  );
};
