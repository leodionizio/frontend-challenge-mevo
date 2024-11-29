import { useState } from "react";
import { Elements } from "types/elements";
import { PlayingResult } from "types/playing";

const usePlaying = () => {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [result, setResult] = useState<PlayingResult | undefined>();
  const [loading, setLoading] = useState(false);
  const [machineSelectedElement, setMachineSelectedElement] = useState<
    Elements | undefined
  >();
  const [selectedElement, setSelectedElement] = useState<
    Elements | undefined
  >();

  const selectElement = (element: Elements) => {
    setLoading(true);
    setIsPlaying(true);
    setSelectedElement(element);
    const elementsToSelected: Elements[] = ["paper", "rock", "scizor"];
    const botSelectedElement =
      elementsToSelected[Math.floor(Math.random() * 3)];
    setMachineSelectedElement(botSelectedElement);

    if (
      (element === "paper" && botSelectedElement === "rock") ||
      (element === "rock" && botSelectedElement === "scizor") ||
      (element === "scizor" && botSelectedElement === "paper")
    ) {
      setTimeout(() => {
        setResult("win");
        setLoading(false);
        setScore(score + 1);
      }, 1000);
    }

    if (
      (element === "paper" && botSelectedElement === "paper") ||
      (element === "rock" && botSelectedElement === "rock") ||
      (element === "scizor" && botSelectedElement === "scizor")
    ) {
      setTimeout(() => {
        setResult("draw");
        setLoading(false);
      }, 1000);
    }

    if (
      (element === "paper" && botSelectedElement === "scizor") ||
      (element === "rock" && botSelectedElement === "paper") ||
      (element === "scizor" && botSelectedElement === "rock")
    ) {
      setTimeout(() => {
        setLoading(false);
        setResult("lose");
      }, 1000);
    }
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
    loading,
    isPlaying,
    machineSelectedElement,
    selectedElement,
    score,
  };
};

export { usePlaying };
