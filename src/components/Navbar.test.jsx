import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
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
  test("Should url have '/logo' when user click 'logo' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/Logo/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
  test("Should url have '/home' when user click 'home' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/home/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/");
    });
  });
  test("Should url have '/about' when user click 'about' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/about/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/about");
    });
  });
  test("Should url have '/login' when user click 'login' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/login/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/login");
    });
  });
  test("Should url have '/logout' when user click 'logout' menu", async () => {
    render(<App />);
    act(() => {
      userEvent.click(screen.getByText(/logout/));
    });
    await waitFor(() => {
      expect(window.location.pathname).toBe("/logout");
    });
  });
});
