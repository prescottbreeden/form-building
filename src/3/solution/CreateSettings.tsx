import React from "react";
import { Box, Button } from "@looker/components";
import { Settings } from "./types";
import { useSettingsValidation } from "./useSettingsValidation";
import { SettingsForm } from "./SettingsForm";
import { useSnackbar } from "../../useSnackBar";

const initialState: Settings = {
  destination: "EMAIL",
  emails: [],
  format: "PDF",
  recurrence: '',
  schedule_name: '',
  time: '',
  webhook_url: '',
  aws: {
    access_key: '',
    bucket: '',
    optional_path: '',
    region: '',
    secret_key: '',
  },
  sftp: {
    address: '',
    key_exchange: 'default',
    password: '',
    username: '',
  }
}

export const CreateSettings = () => {
  const toaster = useSnackbar();
  const [state, setState] = React.useState(initialState);
  const [submitFailed, setSubmitFailed] = React.useState(false);
  const [resetForm, setResetForm] = React.useState(false);
  const v = useSettingsValidation()

  const handleChange = (userData: Partial<Settings>) => {
    setState(prev => ({ ...prev, ...userData }));
  };

  const handleSubmit = () => {
    if(v.validateAll(state)) {
      toaster('Success!', 'success');
      setSubmitFailed(false)
    } else {
      toaster('Ruh roh, Shaggy!', 'error');
      setSubmitFailed(true)
    }
  }

  const handleCancel = () => {
    setResetForm(true);
    setSubmitFailed(false);
    v.resetValidationState();
    setState(initialState);
  }

  React.useEffect(() => {
    resetForm && setResetForm(false)
  }, [resetForm])

  return (
    <>
      <SettingsForm
        data={state}
        onChange={handleChange}
        submitFailed={submitFailed}
        resetForm={resetForm}
      />
      <Box mt="1rem" display="flex" justifyContent="space-between">
        <Button mr="1rem" disabled={!v.isValid} onClick={() => null}>
          Test now
        </Button>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleCancel} sx={{mr:"1rem"}}>
          Cancel
        </Button>
        <Button disabled={!v.isValid} onClick={handleSubmit}>Save</Button>
      </Box>
      </Box>
    </>
  );
};
