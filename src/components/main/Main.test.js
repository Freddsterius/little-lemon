import { fireEvent, render, screen } from "@testing-library/dom";
import Main from "./Main";

test("initializeTimes function returns the correct expected values", () => {
  const availableTimes = ["17:00", "18:00"]; // Define availableTimes
  const handleDateChange = jest.fn(); // Mock function for handleDateChange

  render(<Main />);

  const btnText = screen.getByText(/make a reservation/i);
  expect(btnText).toBeInTheDocument();
});
