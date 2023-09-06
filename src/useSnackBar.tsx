import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type Color = "info" | "error" | "success" | "warning";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: Color
};

type OpenSnackbar = (message: string, severity?: Color) => void;

const SnackbarContext = React.createContext<OpenSnackbar | undefined>(undefined);

type SnackbarProviderProps = {
  children: React.ReactNode;
};

export const SnackbarProvider: React.FunctionComponent<SnackbarProviderProps> = ({ children }) => {
  const [snackbarState, setSnackbarState] = React.useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'info',
  });

  const openSnackbar: OpenSnackbar = (message, severity = 'info') => {
    setSnackbarState({
      open: true,
      message,
      severity,
    });
  };

  const closeSnackbar = () => {
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  };

  return (
    <SnackbarContext.Provider value={openSnackbar}>
      {children}
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert onClose={closeSnackbar} severity={snackbarState.severity}>
          {snackbarState.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = (): OpenSnackbar => {
  const openSnackbar = React.useContext(SnackbarContext);
  if (!openSnackbar) {
    throw new Error(
      'useSnackbar must be used within a SnackbarProvider'
    );
  }
  return openSnackbar;
};

