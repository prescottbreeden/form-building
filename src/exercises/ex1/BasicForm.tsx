import React from "react";
import { Box, Button, FieldText } from "@looker/components";
import { eventNameValue } from "../../miscellaneous";
import { User } from "../../types";

const initialState: User = {
  firstName: "",
  lastName: "",
  email: "",
}

export const BasicForm = () => {
  const [state, setState] = React.useState(initialState);

  const handleChange = (event: any) => {
    setState((prev) => ({ ...prev, ...eventNameValue(event) }));
  };

  const handleSubmit = () => {
    console.log({ state })
  }

  const handleCancel = () => {
    setState(initialState);
  }

  return (
    <>
      <FieldText
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={state.firstName}
      />
      <FieldText
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={state.lastName}
      />
      <FieldText
        label="Email"
        name="email"
        onChange={handleChange}
        value={state.email}
      />
      <Box mt="1rem" display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} mr="1rem">Cancel</Button>
        <Button onClick={handleSubmit}>Save</Button>
      </Box>
    </>
  );
};
