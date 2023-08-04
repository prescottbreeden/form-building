import React from 'react';
import { BasicForm } from "./BasicForm";
import { screen, render } from "@testing-library/react";

describe("BasicForm", () => {
  it('renders the necessary fields', () => {
    render(<BasicForm />);
    screen.findByText('First Name')
  })
});
