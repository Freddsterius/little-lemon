import { render, screen } from "@testing-library/react";
import About from "./About";

test("Renders the BookingForm heading", () => {
  render(<About />);
  const headingElement = screen.getByText("Little Plum");
  expect(headingElement).toBeInTheDocument();
});
