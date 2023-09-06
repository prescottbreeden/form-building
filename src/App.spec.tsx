import { render, screen } from "@testing-library/react"
import App from "./App"

describe('loads a solution', () => {
  it('renders the solution', () => {
    render(<App />)
    expect(screen.getByText(/form workshop/i)).toBeInTheDocument()
  })
})
