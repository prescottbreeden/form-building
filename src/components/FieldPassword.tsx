import React from "react";
import {
  Box,
  FieldText,
  FieldTextProps,
  FieldCheckbox,
} from "@looker/components";

export const FieldPassword = (props: FieldTextProps) => {
  const [show, setShow] = React.useState(false);
  return (
    <Box display="flex" flexDirection="column" border="1px dashed red">
      <FieldText {...props} type={show ? "text" : "password"} />
      <Box mt=".5rem">
      <FieldCheckbox
        checked={show}
        label="Show Password"
        onChange={() => setShow((prev) => !prev)}
      />
      </Box>
    </Box>
  );
};
