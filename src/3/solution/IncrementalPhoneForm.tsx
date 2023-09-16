import DeleteIcon from "@mui/icons-material/Delete";
import type { Phone } from "./types";
import { Box, Button, IconButton } from "@looker/components";
import { PhoneForm } from "./PhoneForm";

export type IncrementalPhoneFormProps = {
  submitFailed: boolean;
  onChange: (idx: number) => (newData: Partial<Phone>) => void;
  addPhone: () => void;
  removePhone: (idx: number) => () => void;
  phones: Phone[];
};

export const IncrementalPhoneForm = ({
  addPhone,
  onChange,
  phones,
  removePhone,
  submitFailed,
}: IncrementalPhoneFormProps) => {
  return (
    <>
      <Box display="flex" flexDirection="column" mt="1rem">
        <p>Phones</p>

        <Box>
          {phones.map((phone, idx) => (
            <Box
              alignItems="center"
              display="flex"
              justifyContent="space-between"
              key={idx}
              mb="2rem"
            >
              <PhoneForm
                data={phone}
                onChange={onChange(idx)}
                submitFailed={submitFailed}
              />
              <IconButton icon={<DeleteIcon />} onClick={removePhone(idx)} />
            </Box>
          ))}
        </Box>
        <Button onClick={addPhone}>Add Phone</Button>
      </Box>
    </>
  );
};
