import { act, render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe("element", () => {
  test("should have logo", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/Logo/)).toBeInTheDocument();
    });
  });
  test("should have  home", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/home/i)).toBeInTheDocument();
    });
  });
  test("should have  about", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
  });
  test("should have  login", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/login/i)).toBeInTheDocument();
    });
  });
  test("should have  logout", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText(/logout/i)).toBeInTheDocument();
    });
  });
});

describe("navigation", () => {
  test("should url have '/' when user click 'logo' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/Logo/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/Logo");
    });
  });
});
