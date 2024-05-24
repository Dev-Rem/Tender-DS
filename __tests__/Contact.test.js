// __tests__/ContactUs.test.js
import "@testing-library/jest-dom";
// __tests__/ContactUs.test.js
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactUs from "../src/app/components/Contact";
import SimpleAlert from "../src/app/components/Alert";

jest.mock("../src/app/components/Alert", () =>
  jest.fn(({ severity, message, setShowAlert }) => (
    <div role="alert" data-severity={severity}>
      {message}
      <button onClick={() => setShowAlert(false)}>Close</button>
    </div>
  ))
);

describe("ContactUs Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders contact information correctly", () => {
    render(<ContactUs />);

    expect(screen.getByText(/Contact Information/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Mercy Corps Tender Download System/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Phone: \(123\) 456-7890/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Email: john.doe@example.com/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Address: 123 Main St, Springfield, IL/i)
    ).toBeInTheDocument();
  });

  test("renders the complaint submission form", () => {
    render(<ContactUs />);

    expect(screen.getByLabelText(/Your Complaint/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("shows success alert when a complaint is submitted", async () => {
    render(<ContactUs />);

    const complaintInput = screen.getByLabelText(/Your Complaint/i);
    fireEvent.change(complaintInput, { target: { value: "Test complaint" } });

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Your complaint has been sent successfully, thank you for your feedback."
    );

    await waitFor(
      () => expect(screen.queryByRole("alert")).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
  });

  test("shows error alert when no complaint is submitted", async () => {
    render(<ContactUs />);

    const submitButton = screen.getByRole("button", { name: /submit/i });
    fireEvent.click(submitButton);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "You have not written any complaint to submit."
    );

    await waitFor(
      () => expect(screen.queryByRole("alert")).not.toBeInTheDocument(),
      { timeout: 3000 }
    );
  });

  test("clears the complaint input after submission", async () => {
    render(<ContactUs />);

    const complaintInput = screen.getByLabelText(/Your Complaint/i);

    fireEvent.change(complaintInput, {
      target: { value: "This is a complaint." },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(complaintInput.value).toBe("");
    });
  });

  test("alerts disappear when the close button is clicked", async () => {
    render(<ContactUs />);

    fireEvent.change(screen.getByLabelText(/Your Complaint/i), {
      target: { value: "This is a complaint." },
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /Close/i }));

    await waitFor(() => {
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });
  });
});
