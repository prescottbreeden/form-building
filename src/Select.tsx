import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MSelect,
} from "@mui/material";

export const Select = ({ name, onChange, value }: any) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={name}>Age</InputLabel>
      <MSelect labelId={name} value={value} label="Age" onChange={onChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </MSelect>
    </FormControl>
  );
};
