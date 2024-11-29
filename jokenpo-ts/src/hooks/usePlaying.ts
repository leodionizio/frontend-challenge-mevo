import { LoadingContext } from "contexts/loadingContext";
import { PlayContext } from "contexts/playContext";
import { useCallback, useContext, useState } from "react";
import { Elements } from "types/elements";

const usePlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { setLoading } = useContext(LoadingContext);
  const {
    setPlayerOneElement,
    setPlayerTwoElement,
    setResult,
    setScore,
    score,
  } = useContext(PlayContext);

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
    [checkWinner, score, setLoading, setResult, setScore]
  );

  const selectElement = useCallback(
    (element: Elements) => {
      const elementsToSelected: Elements[] = ["paper", "rock", "scizor"];
      const botElement = elementsToSelected[Math.floor(Math.random() * 3)];
      setLoading(true);
      setIsPlaying(true);
      setPlayerOneElement(element);
      setPlayerTwoElement(botElement);
      playGame(element, botElement);
    },
    [playGame, setLoading, setPlayerOneElement, setPlayerTwoElement]
  );

  const clearResult = () => {
    setResult(undefined);
    setPlayerOneElement(undefined);
    setPlayerTwoElement(undefined);
    setIsPlaying(false);
  };

  return {
    selectElement,
    clearResult,
    isPlaying,
  };
};

export { usePlaying };
