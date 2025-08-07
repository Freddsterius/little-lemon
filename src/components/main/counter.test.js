import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increment by 1 if the increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    const countValueBefore = Number(getByTestId("count").textContent);
    expect(countValueBefore).toEqual(0);

    fireEvent.click(incrementBtn);
    const countValueAfter = Number(getByTestId("count").textContent);
    expect(countValueAfter).toEqual(1);
  });
});
