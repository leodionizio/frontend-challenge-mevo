import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customTestWrapper } from "utils/testUtils";
import { ElementButton } from "../ElementButton";
import { Elements } from "types/elements";

describe("ElementButton Component", () => {
  const renderComponent = (element?: Elements, onSelect = jest.fn()) =>
    render(<ElementButton element={element} onSelect={onSelect} />, {
      wrapper: ({ children }) =>
        customTestWrapper({
          children,
        }),
    });

  it("should render the button with no element image by default", () => {
    renderComponent();

    const image = screen.getByRole("presentation", { hidden: true });
    expect(image).toHaveAttribute("src", "mock-image-path");
  });

  it("should render the correct image for the 'rock' element", () => {
    renderComponent("rock");

    const image = screen.getByRole("presentation", { hidden: true });
    expect(image).toHaveAttribute("src", "mock-image-path");
  });

  it("should render the correct image for the 'scizor' element", () => {
    renderComponent("scizor");

    const image = screen.getByRole("presentation", { hidden: true });
    expect(image).toHaveAttribute("src", "mock-image-path");
  });

  it("should render the correct image for the 'paper' element", () => {
    renderComponent("paper");

    const image = screen.getByRole("presentation", { hidden: true });
    expect(image).toHaveAttribute("src", "mock-image-path");
  });

  it("should call the onSelect function with the correct element when clicked", async () => {
    const mockOnSelect = jest.fn();
    renderComponent("rock", mockOnSelect);

    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);

    expect(mockOnSelect).toHaveBeenCalledWith("rock");
  });
});
