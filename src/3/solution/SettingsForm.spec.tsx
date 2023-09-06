import React from 'react';
import { SettingsForm } from "./SettingsForm";
import { screen, render } from "@testing-library/react";

describe("BasicForm", () => {
  it("renders the necessary fields", () => {
    render(
      <SettingsForm
        data={{} as any}
        onChange={() => null}
        submitFailed={false}
        resetForm={false}
      />
    );
    screen.findByText("First Name");
  });
});
