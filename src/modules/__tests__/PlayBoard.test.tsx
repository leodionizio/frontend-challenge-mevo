import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { customTestWrapper } from "utils/testUtils";
import { PlayBoard } from "../PlayBoard";
import { usePlaying } from "hooks/usePlaying";
import { PlayingResult } from "types/playing";
import { Elements } from "types/elements";

jest.mock("hooks/usePlaying");

type RenderComponentProps = {
  loading?: boolean;
  result?: PlayingResult;
  playerOneElement?: Elements;
  playerTwoElement?: Elements;
};

describe("PlayBoard Integration Test", () => {
  const mockSelectElement = jest.fn();
  const mockClearResult = jest.fn();

  const renderComponent = ({
    loading = false,
    result = "draw",
    playerOneElement = undefined,
    playerTwoElement = undefined,
  }: RenderComponentProps) =>
    render(<PlayBoard />, {
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

  beforeEach(() => {
    jest.resetAllMocks();

    (usePlaying as jest.Mock).mockReturnValue({
      isPlaying: false,
      selectElement: mockSelectElement,
      clearResult: mockClearResult,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("should simulate a full game flow and win", async () => {
    const user = userEvent.setup();

    renderComponent({});

    expect(screen.getAllByRole("button")).toHaveLength(3);

    const rockButton = screen.getAllByRole("button")[0];
    await user.click(rockButton);
    expect(mockSelectElement).toHaveBeenCalledWith("rock");

    (usePlaying as jest.Mock).mockReturnValue({
      isPlaying: true,
      selectElement: mockSelectElement,
      clearResult: mockClearResult,
    });

    renderComponent({
      playerOneElement: "rock",
      playerTwoElement: "scizor",
      result: "win",
      loading: false,
    });

    waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument();
    });
    expect(screen.getByText(/machine selected scizor/i)).toBeInTheDocument();
    expect(screen.getByText(/you win!/i)).toBeInTheDocument();

    const playAgainButton = screen.getByRole("button", { name: /play again/i });
    await user.click(playAgainButton);
    expect(mockClearResult).toHaveBeenCalled();
  });

  it("should simulate a full game flow and lose", async () => {
    const user = userEvent.setup();

    renderComponent({});

    expect(screen.getAllByRole("button")).toHaveLength(3);

    const scizorButton = screen.getAllByRole("button")[2];
    await user.click(scizorButton);
    expect(mockSelectElement).toHaveBeenCalledWith("scizor");

    (usePlaying as jest.Mock).mockReturnValue({
      isPlaying: true,
      selectElement: mockSelectElement,
      clearResult: mockClearResult,
    });

    renderComponent({
      playerOneElement: "scizor",
      playerTwoElement: "rock",
      result: "lose",
      loading: false,
    });

    expect(screen.getByText(/machine selected rock/i)).toBeInTheDocument();
    expect(screen.getByText(/you loose!/i)).toBeInTheDocument();

    const playAgainButton = screen.getByRole("button", { name: /play again/i });
    await user.click(playAgainButton);
    expect(mockClearResult).toHaveBeenCalled();
  });

  it("should simulate a full game flow and draw", async () => {
    const user = userEvent.setup();

    renderComponent({});

    expect(screen.getAllByRole("button")).toHaveLength(3);

    const paperButton = screen.getAllByRole("button")[1];
    await user.click(paperButton);
    expect(mockSelectElement).toHaveBeenCalledWith("paper");

    (usePlaying as jest.Mock).mockReturnValue({
      isPlaying: true,
      selectElement: mockSelectElement,
      clearResult: mockClearResult,
    });

    renderComponent({
      playerOneElement: "paper",
      playerTwoElement: "paper",
      result: "draw",
      loading: false,
    });

    expect(screen.getByText(/machine selected paper/i)).toBeInTheDocument();
    expect(screen.getByText(/draw!/i)).toBeInTheDocument();

    const playAgainButton = screen.getByRole("button", { name: /play again/i });
    await user.click(playAgainButton);
    expect(mockClearResult).toHaveBeenCalled();
  });
});
