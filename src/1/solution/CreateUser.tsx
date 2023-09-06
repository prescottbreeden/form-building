import React from "react";
import { Box, Button } from "@mui/material";
import { User } from "../../types";
import { UserForm } from "./UserForm";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
};

export const CreateUser = () => {
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
