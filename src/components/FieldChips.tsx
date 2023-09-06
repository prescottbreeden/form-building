import React from 'react';
import flow from "lodash/fp/flow";
import { FieldChips as LFieldChips, FieldChipsProps } from "@looker/components";
import { fakeChangeEvent } from '../miscellaneous';

type CustomSelectProps = Omit<FieldChipsProps, 'onChange'> & {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>, customData: any) => void;
};

export const FieldChips = (
  props: CustomSelectProps
) => {
  const handleOnChange = flow(fakeChangeEvent(props.name), props.onChange);
  return <LFieldChips {...props} onChange={handleOnChange} />;
};
