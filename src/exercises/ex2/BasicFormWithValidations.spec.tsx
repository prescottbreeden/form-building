import { BasicFormWithValidations } from "./BasicFormWithValidations";
import { screen, render } from "@testing-library/react";

describe("BasicForm", () => {
  it('renders the necessary fields', () => {
    render(<BasicFormWithValidations />);
    screen.findByText('First Name')
  })
});
