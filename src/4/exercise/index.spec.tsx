// import React from 'react';
import { Exercise } from "./";
import { screen, render } from "@testing-library/react";

describe("Fun with Composites", () => {
  it('renders the necessary fields', () => {
    render(<Exercise />);
    screen.findByText('First Name')
  })
});
