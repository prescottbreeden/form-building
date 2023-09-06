import { FieldText } from "@looker/components";
import { eventNameValue } from "../../miscellaneous";
import { User } from "../../types";

export type FormProps<T> = {
  data: T;
  onChange: (newData: Partial<T>) => void;
};

export const UserForm = ({ data, onChange }: FormProps<User>) => {
  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  return (
    <>
      <FieldText
        mb="1rem"
        label="First Name"
        name="firstName"
        onChange={handleChange}
        value={data.firstName}
      />
      <FieldText
        mb="1rem"
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        value={data.lastName}
      />
      <FieldText
        mb="1rem"
        label="Email"
        name="email"
        onChange={handleChange}
        value={data.email}
      />
    </>
  );
};
