/**
 * Some initial suggested types are provided to get the ball rolling. Note that
 * these types are not intended to be the correct or best possible version of
 * types that can be created to build this form. It is encouraged to try and
 * change the types around in any ways that might help improve the quality of
 * the form design. Being able to organize a mock into a series of types that
 * will promote the best implementation is just as important as understanding
 * how to handle implementing different kinds of composites.
 */


// some suggestions to get the ball rolling
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
