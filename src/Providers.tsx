import { SnackbarProvider } from "./useSnackBar";
import { ComponentsProvider } from "@looker/components";

export const Providers = ({ children }: any) => (
  <ComponentsProvider>
    <SnackbarProvider>{children}</SnackbarProvider>
  </ComponentsProvider>
);
