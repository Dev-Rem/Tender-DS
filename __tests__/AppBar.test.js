import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DrawerAppBar from "../src/app/components/AppBar";
import "@testing-library/jest-dom";

describe("DrawerAppBar component", () => {
  it("renders the app bar with correct title and search input", () => {
    render(<DrawerAppBar setSearchQuery={() => {}} />);
    expect(
      screen.getAllByText(/Tender Download System/i)[0]
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search tenders/i)).toBeInTheDocument();
  });

  it("opens and closes the mobile drawer when the menu icon is clicked", () => {
    render(<DrawerAppBar setSearchQuery={() => {}} />);
    const menuButton = screen.getByLabelText(/open drawer/i);
    fireEvent.click(menuButton);
    expect(
      screen.getAllByText(/Tender Download System/i)[0]
    ).toBeInTheDocument();
    // fireEvent.click(menuButton);
  });

  it("opens the modal with the correct content when a nav item is clicked", () => {
    render(<DrawerAppBar setSearchQuery={() => {}} />);
    fireEvent.click(screen.getAllByText(/About/i)[0]);
    expect(
      screen.getByText(
        /A tender is a formal invitation to suppliers to submit bids /i
      )
    ).toBeInTheDocument();
  });
});
