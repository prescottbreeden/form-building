// TODO move this type to each exercise
/**
 * Type used in exercises 1-3
 */
export type User = {
  firstName: string;
  lastName: string;
  email: string;
}

// --------------------------
// Types used in exercise 4 -- TODO move to exercise 4
// --------------------------
export type Destination = "EMAIL" | "WEBHOOK" | "AWS" | "SFTP";
export type Format = "CSV" | "PDF" | "PNG"

export type BaseSettings = {
  schedule_name: string;
  recurrence: string;
  time: string;
  destination: Destination;
  format: Format;
  aws: AWS;
  sftp: SFTP;
}

export type Email = {
  emails: string[]; // *
}

export type Webhook = {
  webhook_url: string; // *
}

export type AWS = {
  bucket: string; // *
  optional_path: string;
  access_key: string; // *
  secret_key: string; // *
  region: string;
}

export type SFTP = {
  address: string; // *
  username: string; // *
  password: string; // *
  key_exchange: string; // *
}

export type Settings = BaseSettings & Email & Webhook;
