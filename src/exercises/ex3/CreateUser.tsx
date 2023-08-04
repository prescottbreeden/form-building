import React from "react";
import { Box, Button } from "@looker/components";
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
  const v = useUserValidation()

  const handleChange = (userData: Partial<User>) => {
    setState((prev) => ({ ...prev, ...userData }));
  };

  const handleSubmit = () => {
    console.log({ state })
    if(v.validateAll(state)) {
      setSubmitFailed(false)
      console.log('success!')
    } else {
      setSubmitFailed(true)
    }
  }

  const handleCancel = () => {
    setState(initialState);
    v.resetValidationState();
  }

  return (
    <>
      <UserForm
        data={state}
        onChange={handleChange}
        submitFailed={submitFailed}
      />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} mr="1rem">
          Cancel
        </Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </>
  );
};
