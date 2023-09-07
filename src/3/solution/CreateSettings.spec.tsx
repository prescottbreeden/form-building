// import React from 'react';
import { CreateSettings } from "./CreateSettings";
import { screen, render } from "@testing-library/react";
import { Providers } from "../../Providers";

describe("BasicForm", () => {
  it("renders the necessary fields", () => {
    render(
      <Providers>
        <CreateSettings />
      </Providers>,
    );
    screen.findByText("First Name");
  });
});
