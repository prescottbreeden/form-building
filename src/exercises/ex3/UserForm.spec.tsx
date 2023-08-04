import React from 'react';
import { CreateUser } from "./CreateUser";
import { screen, render } from "@testing-library/react";

describe("BasicForm", () => {
  it('renders the necessary fields', () => {
    render(<CreateUser />);
    screen.findByText('First Name')
  })
});
