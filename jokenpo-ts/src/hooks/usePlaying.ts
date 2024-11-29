import { LoadingContext } from "contexts/loadingContext";
import { useCallback, useContext, useState } from "react";
import { Elements } from "types/elements";
import { PlayingResult } from "types/playing";

const usePlaying = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState<PlayingResult | undefined>();
  const { setLoading } = useContext(LoadingContext);
  const [machineSelectedElement, setMachineSelectedElement] = useState<
    Elements | undefined
  >();
  const [selectedElement, setSelectedElement] = useState<
    Elements | undefined
  >();

  const checkWinner = useCallback(
    (playerOneElement: Elements, playerTwoElement: Elements) => {
      if (
        (playerOneElement === "paper" && playerTwoElement === "rock") ||
        (playerOneElement === "rock" && playerTwoElement === "scizor") ||
        (playerOneElement === "scizor" && playerTwoElement === "paper")
      ) {
        return playerOneElement;
      }

      if (
        (playerOneElement === "paper" && playerTwoElement === "scizor") ||
        (playerOneElement === "rock" && playerTwoElement === "paper") ||
        (playerOneElement === "scizor" && playerTwoElement === "rock")
      ) {
        return playerTwoElement;
      }

      return "draw" as Elements;
    },
    []
  );

  const playGame = useCallback(
    (userElement: Elements, botElement: Elements) => {
      const winner = checkWinner(userElement, botElement);

      setTimeout(() => {
        if (winner === userElement) {
          setResult("win");
          setScore(score + 1);
        } else if (winner === botElement) {
          setResult("lose");
        } else {
          setResult("draw");
        }
        setLoading(false);
      }, 1000);
    },
    []
  );

  const selectElement = (element: Elements) => {
    setLoading(true);
    setIsPlaying(true);
    setSelectedElement(element);
    const elementsToSelected: Elements[] = ["paper", "rock", "scizor"];
    const botSelectedElement =
      elementsToSelected[Math.floor(Math.random() * 3)];
    setMachineSelectedElement(botSelectedElement);

    playGame(element, botSelectedElement);
  };

  const clearResult = () => {
    setResult(undefined);
    setMachineSelectedElement(undefined);
    setIsPlaying(false);
  };

  return {
    selectElement,
    result,
    clearResult,
    isPlaying,
    machineSelectedElement,
    selectedElement,
    score,
  };
};

export { usePlaying };
