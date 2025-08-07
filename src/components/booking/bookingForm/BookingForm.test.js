import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const availableTimes = ["10:00 AM", "2:00 PM"]; // Define availableTimes
  const handleDateChange = jest.fn(); // Mock function for handleDateChange
  render(
    <BookingForm
      availableTimes={availableTimes}
      handleDateChange={handleDateChange}
    />
  );

  const txt = screen.getByText("Reservation Form");
  //expect(txt).toBeInTheDocument();
  expect(screen.getByText(/reservation form/i)).toBeInTheDocument();
});
