import React from "react";
import flow from "lodash/fp/flow";
import { FieldDate as LFieldDate, FieldDateProps } from "@looker/components";
import { fakeChangeEvent } from "../miscellaneous";

type CustomSelectProps = Omit<FieldDateProps, "onChange"> & {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const FieldDate = (props: CustomSelectProps) => {
  const handleOnChange = flow(fakeChangeEvent(props.name), props.onChange);
  return <LFieldDate my="1rem" {...props} onChange={handleOnChange} />;
};
