import { render, screen, waitFor } from "@testing-library/react";
import TestimonialsSlice from "../TestimonialsSlice";
import { fetchTestimonials } from "../../../services/api";

jest.mock("../../../services/api");

describe("TestimonialsSlice", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shows loading state initially", async () => {
    fetchTestimonials.mockImplementation(() => new Promise(() => {}));

    render(<TestimonialsSlice />);

    expect(screen.getByText("Testimonials")).toBeInTheDocument();
    expect(
      screen.getByText("Hear what our feathered customers have to say.")
    ).toBeInTheDocument();
    const skeletons = screen.getAllByTestId("testimonial-skeleton");
    expect(skeletons).toHaveLength(3);
  });

  test("displays testimonials when API call succeeds", async () => {
    const mockTestimonials = [
      {
        id: 1,
        name: "Test Chicken",
        breed: "Light Sussex",
        content: "Great sailing experience!",
        date: "2024-03-20",
        verified: true,
      },
      {
        id: 2,
        name: "Another Chicken",
        breed: "Brahma",
        content: "Love my new boat!",
        date: "2024-03-19",
        verified: false,
      },
      {
        id: 3,
        name: "Third Chicken",
        breed: "Rhode Island Red",
        content: "Amazing egg transport!",
        date: "2024-03-18",
        verified: true,
      },
    ];

    fetchTestimonials.mockResolvedValueOnce(mockTestimonials);

    render(<TestimonialsSlice />);

    await waitFor(() => {
      const testimonialCards = screen.getAllByRole("article");
      expect(testimonialCards).toHaveLength(3);

      expect(screen.getByText("Light Sussex")).toBeInTheDocument();
      expect(
        screen.getByText('"Great sailing experience!"')
      ).toBeInTheDocument();
      expect(screen.getByText("20 March 2024")).toBeInTheDocument();

      expect(screen.getByText("Another Chicken")).toBeInTheDocument();
      expect(screen.getByText("Brahma")).toBeInTheDocument();
      expect(screen.getByText('"Love my new boat!"')).toBeInTheDocument();
      expect(screen.getByText("19 March 2024")).toBeInTheDocument();

      expect(screen.getByText("Third Chicken")).toBeInTheDocument();
      expect(screen.getByText("Rhode Island Red")).toBeInTheDocument();
      expect(screen.getByText('"Amazing egg transport!"')).toBeInTheDocument();
      expect(screen.getByText("18 March 2024")).toBeInTheDocument();

      expect(
        screen.getByText("Test Chicken").closest("[role='article']")
      ).toHaveClass("bg-amber-50", "border-amber-200");
      expect(
        screen.getByText("Another Chicken").closest("[role='article']")
      ).toHaveClass("bg-gray-50", "border-gray-200");
      expect(
        screen.getByText("Third Chicken").closest("[role='article']")
      ).toHaveClass("bg-red-50", "border-red-200");
    });
  });

  test("shows error message when API call fails", async () => {
    fetchTestimonials.mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<TestimonialsSlice />);

    await waitFor(() => {
      expect(screen.getByText("Error: Failed to fetch")).toBeInTheDocument();
      expect(screen.getByText("Try again")).toBeInTheDocument();
    });
  });
});
