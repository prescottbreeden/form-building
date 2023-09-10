export type Destination = "EMAIL" | "WEBHOOK" | "AWS" | "SFTP";
export type Format = "CSV" | "PDF" | "PNG";
export type Recurrence =
  | "NOW"
  | "MONTHLY"
  | "WEEKLY"
  | "DAILY"
  | "HOURLY"
  | "MINUTES"
  | "SPECIFIC-MONTHS"
  | "SPECIFIC-DAYS";

export type BaseSettings = {
  schedule_name: string; // *
  recurrence: Recurrence;
  start: string;
  stop: string;
  day: string;
  month: string;
  time: string;
  end: string;
  sendEvery: string;
  destination: Destination;
  format: Format;
  aws: AWS;
  sftp: SFTP;
  emails: string[];
};

export type Webhook = {
  webhook_url: string; // *
};

export type AWS = {
  bucket: string; // *
  optional_path: string;
  access_key: string; // *
  secret_key: string; // *
  region: string;
};

export type SFTP = {
  address: string; // *
  username: string; // *
  password: string; // *
  key_exchange: string; // *
};

export type Settings = BaseSettings & Webhook;
