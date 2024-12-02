import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CustomContextProviderProps } from "types/contextProviders";
import { Elements } from "types/elements";
import { PlayingResult } from "types/playing";

interface LoadingContextType {
  score: number;
  setScore: Dispatch<SetStateAction<number>>;
  result: PlayingResult | undefined;
  setResult: Dispatch<SetStateAction<PlayingResult | undefined>>;
  playerOneElement: Elements | undefined;
  setPlayerOneElement: Dispatch<SetStateAction<Elements | undefined>>;
  playerTwoElement: Elements | undefined;
  setPlayerTwoElement: Dispatch<SetStateAction<Elements | undefined>>;
}

const defaultContextValue: LoadingContextType = {
  score: 0,
  setScore: () => {},
  result: undefined,
  setResult: () => {},
  playerOneElement: undefined,
  setPlayerOneElement: () => {},
  playerTwoElement: undefined,
  setPlayerTwoElement: () => {},
};

const PlayContext = createContext(defaultContextValue);

const PlayProvider = ({ children }: CustomContextProviderProps) => {
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<PlayingResult>();
  const [playerOneElement, setPlayerOneElement] = useState<Elements>();
  const [playerTwoElement, setPlayerTwoElement] = useState<Elements>();

  return (
    <PlayContext.Provider
      value={{
        score,
        setScore,
        result,
        setResult,
        playerOneElement,
        setPlayerOneElement,
        playerTwoElement,
        setPlayerTwoElement,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export { PlayProvider, PlayContext };
