export type FormProps<T> = {
  onChange: (newData: Partial<T>) => void;
  data: T;
  submitFailed: boolean;
}

export type User = {
  /** required, cannot contain symbols */
  username: string;
  
  /** required, 6+ characters long */
  password: string;
  
  /** Date object or unset */
  dob: Date | undefined; 
}
