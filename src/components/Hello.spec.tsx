import { render, screen } from "@testing-library/react"
import { Hello } from "./Hello"

it("renders hELLO WORLD", () => {
  render(<Hello />)
  const myElement = screen.getByText("Hello world")
  expect(myElement).toBeInTheDocument()
})
