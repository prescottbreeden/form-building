import React from "react";
import { FieldText } from "@looker/components";
import { FieldChips, FieldSelect } from "../../components/";
import { eventNameValue, transformError } from "../../miscellaneous";
import type { AWS, Settings, SFTP } from "./types";
import { AWSForm } from "./AWSForm";
import { SFTPForm } from "./SFTPForm";
import { useSettingsValidation } from "./useSettingsValidation";

export const SettingsForm = ({
  data,
  onChange,
  submitFailed,
  resetForm,
}: {
  data: Settings;
  onChange: (newData: Partial<Settings>) => void;
  submitFailed: boolean;
  resetForm: boolean;
}) => {
  const v = useSettingsValidation();

  const handleChange = (event: any) => {
    onChange(eventNameValue(event));
  };

  const handleAWSChange = (aws: Partial<AWS>) =>
    onChange({ aws: { ...data.aws, ...aws } });

  const handleSFTPChange = (sftp: Partial<SFTP>) =>
    onChange({
      sftp: {
        ...data.sftp,
        ...sftp,
      },
    });

  React.useEffect(() => {
    submitFailed && v.validateAll(data);
  }, [submitFailed]);

  React.useEffect(() => {
    v.resetValidationState();
  }, [resetForm]);

  return (
    <>
      <FieldText
        label="Schedule Name"
        name="schedule_name"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        required
        validationMessage={transformError(v.getError("schedule_name"))}
        value={data.schedule_name}
      />
      <FieldSelect
        placeholder="Recurrence"
        name="recurrence"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        options={[
          { label: "Send now", value: "now" },
          { label: "Monthly", value: "monthly" },
          { label: "Weekly", value: "weekly" },
          { label: "Daily", value: "daily" },
          { label: "Hourly", value: "hourly" },
          { label: "Minutes", value: "minutes" },
          { label: "Specific Months", value: "specific-months" },
          { label: "Specific Days", value: "specific-days" },
        ]}
        validationMessage={transformError(v.getError("recurrence"))}
        value={data.recurrence}
      />
      {data.recurrence === "MONTHLY" && (
        <>
          <FieldSelect
            placeholder="Day"
            name="day"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("day"))}
            value={data.time}
            options={[
              { label: "1st", value: "1" },
              { label: "2nd", value: "2" },
              { label: "3rd", value: "3" },
              { label: "4th", value: "4" },
              { label: "5th", value: "5" },
              { label: "6th", value: "6" },
              { label: "7th", value: "7" },
            ]}
          />
          <FieldSelect
            placeholder="Time"
            name="time"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("time"))}
            value={data.time}
            options={[
              { label: "00:00", value: "0000" },
              { label: "01:00", value: "0100" },
              { label: "02:00", value: "0200" },
              { label: "03:00", value: "0300" },
              { label: "04:00", value: "0400" },
              { label: "05:00", value: "0500" },
              { label: "06:00", value: "0600" },
            ]}
          />
        </>
      )}
      {data.recurrence === "WEEKLY" && (
        <>
          <FieldSelect
            placeholder="Day"
            name="day"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("day"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
          <FieldSelect
            placeholder="Time"
            name="time"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("time"))}
            value={data.time}
            options={[
              { label: "00:00", value: "0000" },
              { label: "01:00", value: "0100" },
              { label: "02:00", value: "0200" },
              { label: "03:00", value: "0300" },
              { label: "04:00", value: "0400" },
              { label: "05:00", value: "0500" },
              { label: "06:00", value: "0600" },
            ]}
          />
        </>
      )}
      {data.recurrence === "DAILY" && (
        <>
          <FieldSelect
            placeholder="Day"
            name="day"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("day"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
        </>
      )}
      {data.recurrence === "HOURLY" && (
        <>
          <FieldSelect
            placeholder="Send every"
            name="sendEvery"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("sendEvery"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
          <FieldSelect
            placeholder="Start"
            name="start"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("start"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
          <FieldSelect
            placeholder="End"
            name="end"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("end"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
        </>
      )}
      {data.recurrence === "MINUTES" && (
        <>
          <FieldSelect
            placeholder="Send every"
            name="sendEvery"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("sendEvery"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
          <FieldSelect
            placeholder="Start"
            name="start"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("start"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
          <FieldSelect
            placeholder="End"
            name="end"
            onBlur={v.validateOnBlur(data)}
            onChange={v.validateOnChange(handleChange, data)}
            validationMessage={transformError(v.getError("end"))}
            value={data.time}
            options={[
              { label: "Monday", value: "monday" },
              { label: "Tuesday", value: "tuesday" },
              { label: "Wednesday", value: "wednesday" },
              { label: "Thursday", value: "thursday" },
              { label: "Friday", value: "friday" },
              { label: "Saturday", value: "saturday" },
              { label: "Sunday", value: "sunday" },
            ]}
          />
        </>
      )}
      <FieldSelect
        placeholder="Destination"
        name="destination"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        options={[
          { label: "Email", value: "EMAIL" },
          { label: "Webhook", value: "WEBHOOK" },
          { label: "S3 Bucket", value: "AWS" },
          { label: "SFTP", value: "SFTP" },
        ]}
        validationMessage={transformError(v.getError("destination"))}
        value={data.destination}
      />
      {data.destination === "EMAIL" && (
        <FieldChips
          required
          label="Emails"
          name="emails"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          validationMessage={transformError(v.getError("emails"))}
          values={data.emails}
        />
      )}
      {data.destination === "WEBHOOK" && (
        <FieldText
          required
          label="Webhook URL"
          name="webhook_url"
          onBlur={v.validateOnBlur(data)}
          onChange={v.validateOnChange(handleChange, data)}
          validationMessage={transformError(v.getError("webhook_url"))}
          value={data.webhook_url}
        />
      )}
      {data.destination === "AWS" && (
        <AWSForm
          data={data.aws}
          onChange={handleAWSChange}
          submitFailed={submitFailed}
          resetForm={resetForm}
        />
      )}
      {data.destination === "SFTP" && (
        <SFTPForm
          data={data.sftp}
          onChange={handleSFTPChange}
          submitFailed={submitFailed}
          resetForm={resetForm}
        />
      )}
      <FieldSelect
        label="Format"
        name="format"
        onBlur={v.validateOnBlur(data)}
        onChange={v.validateOnChange(handleChange, data)}
        options={[]}
        validationMessage={transformError(v.getError("format"))}
        value={data.format}
      />
    </>
  );
};
