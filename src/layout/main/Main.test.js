import { BrowserRouter } from "react-router";
import { fireEvent, render, screen } from "@testing-library/dom";
import { initializeTimes, updateTimes } from "./Main";

jest.mock("../homepage/HomePage", () => () => <div>HomePage mock</div>);

describe("initializeTimes", () => {
  test("should return default available times as array", () => {
    const times = initializeTimes();
    expect(Array.isArray(times)).toBe(true);
    expect(times.length).toBeGreaterThan(0);
    // Optionally check specific values:
    // expect(times).toContain('17:00');
  });
});

describe("updateTimes", () => {
  test("should return provided availableTimes unchanged", () => {
    const current = ["17:00", "18:00"];
    const action = {
      type: "update_times",
      availableTimes: ["19:00"],
      date: "2025-08-10",
    };
    expect(updateTimes(current, action)).toEqual(["19:00"]);
  });

  test("should return previous state if action type not recognized", () => {
    const current = ["17:00"];
    const action = { type: "unknown", availableTimes: [] };
    expect(updateTimes(current, action)).toBe(current);
  });
});
