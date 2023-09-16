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
  firstName: string;
  lastName: string;
  email: string;
  phones: Phone[];
}
