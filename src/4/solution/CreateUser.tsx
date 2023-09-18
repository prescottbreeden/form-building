import React from "react";
import { UserForm } from "./UserForm";
import type { User } from "./types";
import { useUserValidation } from "./useUserValidation";
import { Box, Button } from "@looker/components";
import { useSnackbar } from "../../useSnackBar";

export const CreateUser = () => {
  const toaster = useSnackbar();
  const [submitFailed, setSubmitFailed] = React.useState(false);
  const [formState, setFormState] = React.useState<User>({
    username: "",
    password: "",
    dob: "",
    phones: [{ type: "", number: "" }],
  });

  const v = useUserValidation();

  const handleSubmit = () => {
    if (v.validateAll(formState)) {
      toaster("Success!", "success");
    } else {
      toaster("Ruh roh, Shaggy!", "error");
      setSubmitFailed(true);
    }
  };

  const handleChange = (newData: Partial<User>) => {
    setFormState((prev) => ({ ...prev, ...newData }));
  };

  // --[ Side Effects ]--------------------------------------------------------
  React.useEffect(() => {
    if (submitFailed) {
      setSubmitFailed(false);
    }
  }, [submitFailed]);

  return (
    <>
      <UserForm
        data={formState}
        onChange={handleChange}
        submitFailed={submitFailed}
      />
      <Box display="flex" justifyContent="flex-end">
        <Button mt="2rem" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </>
  );
};
