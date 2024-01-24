import { act, render, screen } from "@testing-library/react";
import App from "../App";

describe("element", () => {
  test("Should have title count", () => {
    act(() => {
      render(<App />);
    });
    expect(screen.getByText(/count/i)).toBeInTheDocument();
  });

  test("Should have button increment", () => {
    act(() => {
      render(<App />);
    });
    expect(screen.getByText(`+1`)).toBeInTheDocument();
  });

  test("Should have button decrement", () => {
    act(() => {
      render(<App />);
    });
    expect(screen.getByText(`-1`)).toBeInTheDocument();
  });
});
