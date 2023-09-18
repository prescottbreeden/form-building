import React from "react";
import flow from "lodash/fp/flow";
import { Select as LSelect, SelectProps } from "@looker/components";
import { fakeChangeEvent } from "../miscellaneous";

type CustomSelectProps = Omit<SelectProps, "onChange"> & {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const FieldSelect = (props: CustomSelectProps) => {
  const handleOnChange = flow(fakeChangeEvent(props.name), props.onChange);
  return <LSelect my="1rem" {...props} onChange={handleOnChange} />;
};
