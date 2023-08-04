export type User = {
  firstName: string;
  lastName: string;
  email: string;
}

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
