import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import { ImgMediaCard } from "../src/app/components/Card";

describe("ImgMediaCard", () => {
  test("renders card with title, description, and download button", () => {
    const mockHandleDownload = jest.fn();
    const mockCardData = {
      title: "Test Title",
      description: "Test Description",
      image: "test-image.jpg",
      file: "TestPDFfile.pdf",
    };

    render(
      <ImgMediaCard
        {...mockCardData}
        handleOpen={() => {}}
        handleDownload={mockHandleDownload}
      />
    );

    expect(screen.getByText(mockCardData.title)).toBeInTheDocument();
    expect(screen.getByText(mockCardData.description)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /download/i })
    ).toBeInTheDocument();
  });

  test("clicking download button calls handleDownload function with correct parameters", () => {
    const mockHandleDownload = jest.fn();
    const mockCardData = {
      title: "Test Title",
      description: "Test Description",
      image: "test-image.jpg",
      file: "TestPDFfile.pdf",
    };

    render(
      <ImgMediaCard
        {...mockCardData}
        handleOpen={() => {}}
        handleDownload={mockHandleDownload}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: /download/i }));

    expect(mockHandleDownload).toHaveBeenCalledWith(mockCardData.file);
  });
});
