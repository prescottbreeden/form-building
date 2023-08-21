import React from "react";
import { Box, Button } from "@mui/material";
import { User } from "../../types";
import { useUserValidation } from "./useUserValidations";
import { UserForm } from "./UserForm";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
}

export const CreateUser = () => {
  const [state, setState] = React.useState(initialState);
  const [submitFailed, setSubmitFailed] = React.useState(false);
  const [resetForm, setResetForm] = React.useState(false);
  const v = useUserValidation()

  const handleChange = (userData: Partial<User>) => {
    setState((prev) => ({ ...prev, ...userData }));
  };

  const handleSubmit = () => {
    if(v.validateAll(state)) {
      setSubmitFailed(false)
      // success!
    } else {
      setSubmitFailed(true)
    }
  }

  const handleCancel = () => {
    setResetForm(true);
    setState(initialState);
    v.resetValidationState();
  }

  React.useEffect(() => {
    if(resetForm) setResetForm(false);
  }, [resetForm])

  return (
    <>
      <Box display="flex" flexDirection="column">
        <UserForm
          data={state}
          onChange={handleChange}
          resetForm={resetForm}
          submitFailed={submitFailed}
        />
      </Box>
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} sx={{ mr: '1rem' }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </>
  );
};
