import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MSelect,
} from "@mui/material";
import { ValidationMessageProps } from "../types/components";

type SelectProps = {
  name: string;
  label: string;
  onBlur?: (e: any) => void;
  onChange: (e: any) => void;
  value: string | number;
  options: Array<{ label: string; value: string | number }>;
  validationMessage?: ValidationMessageProps;
};

export const Select = ({
  name,
  label,
  onBlur,
  onChange,
  value,
  options,
  validationMessage,
}: SelectProps) => (
  <FormControl fullWidth>
    <InputLabel id={name}>{label}</InputLabel>
    <MSelect
      labelId={name}
      value={value}
      label={label}
      onBlur={onBlur}
      onChange={onChange}
      error={!!validationMessage?.message}
    >
      {options.map((o: any) => (
        <MenuItem key={o.label} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </MSelect>
  </FormControl>
);
