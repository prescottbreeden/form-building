import React from 'react';
import { CreateSettings } from "./CreateSettings";
import { screen, render } from "@testing-library/react";

describe("BasicForm", () => {
  it('renders the necessary fields', () => {
    render(<CreateSettings />);
    screen.findByText('First Name')
  })
});
