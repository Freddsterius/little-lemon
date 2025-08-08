import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm form's submition button text", () => {
  const availableTimes = ["17:00", "18:00"]; // Define availableTimes
  const handleDateChange = jest.fn(); // Mock function for handleDateChange

  render(
    <BookingForm
      availableTimes={availableTimes}
      handleDateChange={handleDateChange}
    />
  );

  const btnText = screen.getByText(/make a reservation/i);
  expect(btnText).toBeInTheDocument();
});
