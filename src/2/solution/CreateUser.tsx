import React from "react";
import { Box, Button } from "@looker/components";
import { User } from "./types";
import { useUserValidation } from "./useUserValidation";
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
  const [resetForm, setResetForm] = React.useState(false);
  const [submitFailed, setSubmitFailed] = React.useState(false);
  const v = useUserValidation();

  const handleChange = (newData: Partial<User>) => {
    setState((prev) => ({ ...prev, ...newData }));
  };


  const handleSubmit = () => {
    if (v.validateAll(state)) {
      toaster('Success!', 'success');
    } else {
      toaster('Ruh roh, Shaggy!', 'error');
      setSubmitFailed(true);
    }
  };

  const handleCancel = () => {
    setState(initialState);
    setResetForm(true);
    v.resetValidationState();
  };

  // toggle flags back to false when they're toggled true
  React.useEffect(() => {
    if (resetForm) setResetForm(false);
    if (submitFailed) setSubmitFailed(false);
  }, [resetForm, submitFailed]);

  return (
    <>
      <Box display="flex" flexDirection="column">
        <UserForm
          data={state}
          onChange={handleChange}
          resetForm={resetForm}
          submitFailed={submitFailed}
        />
        <Box mt="1rem" display="flex" justifyContent="flex-end">
          <Button onClick={handleCancel} sx={{ mr: "1rem" }}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Save</Button>
        </Box>
      </Box>
    </>
  );
};
