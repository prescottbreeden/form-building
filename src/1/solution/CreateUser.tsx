import React from "react";
import { Box, Button } from "@looker/components";
import { User } from "./types";
import { UserForm } from "./UserForm";
import { useSnackbar } from "../../useSnackBar";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
};

export const CreateUser = () => {
  const toaster = useSnackbar()
  const [state, setState] = React.useState(initialState);

  const handleChange = (newData: Partial<User>) => {
    setState((prev) => ({ ...prev, ...newData }));
  };

  const handleSubmit = () => {
    toaster('Success!', 'success');
  };

  const handleCancel = () => {
    setState(initialState);
  };

  return (
    <Box display="flex" flexDirection="column">
      <UserForm data={state} onChange={handleChange} />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} mr="1rem">
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </Box>
  );
};
