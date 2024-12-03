import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customTestWrapper } from "utils/testUtils";
import { PlayingDetails } from "../PlayingDetails";
import { LoadingContext } from "contexts/loadingContext";
import { PlayContext } from "contexts/playContext";
import { PlayingResult } from "types/playing";
import { Elements } from "types/elements";

type RenderComponentProps = {
  loading?: boolean;
  result?: PlayingResult;
  playerOneElement?: Elements;
  playerTwoElement?: Elements;
  onPlayAgain: () => void;
};

describe("PlayingDetails Component", () => {
  const renderComponent = ({
    loading,
    result,
    playerOneElement,
    playerTwoElement,
    onPlayAgain,
  }: RenderComponentProps) =>
    render(<PlayingDetails onPlayAgain={onPlayAgain} />, {
      wrapper: ({ children }) =>
        customTestWrapper({
          children,
          playContextValues: {
            result,
            playerOneElement,
            playerTwoElement,
          },
          loadingContextvalues: { loading },
        }),
    });

  it("should render the player's element and the loading state for the machine", () => {
    renderComponent({
      loading: true,
      playerOneElement: "rock",
      onPlayAgain: jest.fn(),
    });

    const playerOneImage = screen.getAllByRole("presentation")[0];
    expect(playerOneImage).toHaveAttribute("src", "mock-image-path");

    const loadingText = screen.getByText(/machine is choosing/i);
    expect(loadingText).toBeInTheDocument();
  });

  it("should render the player's and machine's elements when loading is false", () => {
    renderComponent({
      loading: false,
      playerOneElement: "rock",
      playerTwoElement: "scizor",
      onPlayAgain: jest.fn(),
    });

    const [playerOneImage, playerTwoImage] =
      screen.getAllByRole("presentation");

    expect(playerOneImage).toHaveAttribute("src", "mock-image-path");
    expect(playerTwoImage).toHaveAttribute("src", "mock-image-path");

    const machineText = screen.getByText(/machine selected scizor/i);
    expect(machineText).toBeInTheDocument();
  });

  it("should display the correct result text and color when the player wins", () => {
    renderComponent({ result: "win", loading: false, onPlayAgain: jest.fn() });

    const resultText = screen.getByText(/you win!/i);
    expect(resultText).toBeInTheDocument();
    expect(resultText).toHaveStyle("color: green");
  });

  it("should display the correct result text and color when the player loses", () => {
    renderComponent({ result: "lose", loading: false, onPlayAgain: jest.fn() });

    const resultText = screen.getByText(/you loose!/i);
    expect(resultText).toBeInTheDocument();
    expect(resultText).toHaveStyle("color: red");
  });

  it("should display the correct result text and color when it is a draw", () => {
    renderComponent({ result: "draw", loading: false, onPlayAgain: jest.fn() });

    const resultText = screen.getByText(/draw!/i);
    expect(resultText).toBeInTheDocument();
    expect(resultText).toHaveStyle("color: yellow");
  });

  it("should call the onPlayAgain function when the 'Play Again' button is clicked", async () => {
    const mockOnPlayAgain = jest.fn();
    renderComponent({ loading: false, onPlayAgain: mockOnPlayAgain });

    const playAgainButton = screen.getByRole("button", { name: /play again/i });
    const user = userEvent.setup();
    await user.click(playAgainButton);

    expect(mockOnPlayAgain).toHaveBeenCalled();
  });

  it("should not display the result or 'Play Again' button when loading is true", () => {
    renderComponent({ loading: true, onPlayAgain: jest.fn() });

    expect(screen.queryByText(/you win!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/play again/i)).not.toBeInTheDocument();
  });
});
