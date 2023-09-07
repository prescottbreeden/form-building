export type Destination = "EMAIL" | "WEBHOOK" | "AWS" | "SFTP";
export type Format = "CSV" | "PDF" | "PNG";
export type RecurrenceType =
  | "NOW"
  | "MONTHLY"
  | "WEEKLY"
  | "DAILY"
  | "HOURLY"
  | "MINUTES"
  | "SPECIFIC-MONTHS"
  | "SPECIFIC-DAYS";

export type Recurrence = {
}

export type BaseSettings = {
  schedule_name: string; // *

  recurrence: Recurrence;

  destination: {
    type: Destination;
    format: Format;
    aws: AWS;
    sftp: SFTP;
    emails: string[];
  };
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
