import "@testing-library/jest-dom";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import AuthenticationForm from "../src/app/components/AuthForms";

describe("AuthenticationForm", () => {
  test("renders login form by default", () => {
    render(<AuthenticationForm />);
    expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
  });

  test("can switch between login and register forms", () => {
    render(<AuthenticationForm />);
    fireEvent.click(screen.getByText("Don't have an account? Register"));
    expect(screen.getAllByText("Register")[0]).toBeInTheDocument();
    fireEvent.click(screen.getByText("Already have an account? Login"));
    expect(screen.getAllByText("Login")[0]).toBeInTheDocument();
  });

  test("displays error message when form fields are empty", async () => {
    render(<AuthenticationForm />);
    fireEvent.submit(screen.getByRole("button", { name: /login/i }));
    await waitFor(() =>
      expect(
        screen.getByText("Please fill in all the fields.")
      ).toBeInTheDocument()
    );
  });

  // Add more tests as needed
});
