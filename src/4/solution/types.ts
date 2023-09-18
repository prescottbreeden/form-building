export type FormProps<T> = {
  onChange: (newData: Partial<T>) => void;
  data: T;
  submitFailed: boolean;
}

export type Phone = {
  number: string;
  type: string;
}

export type User = {
  username: string;
  password: string;
  dob: string;
  phones: Phone[];
}
