import { SettingsForm } from "./SettingsForm";
import { screen, render } from "@testing-library/react";
import { Providers } from "../../Providers";

describe("SettingsForm", () => {
  it("renders the necessary fields", () => {
    render(
      <Providers>
        <SettingsForm
          data={{} as any}
          onChange={() => null}
          submitFailed={false}
          resetForm={false}
        />
      </Providers>,
    );
    screen.findByText("First Name");
  });
});
