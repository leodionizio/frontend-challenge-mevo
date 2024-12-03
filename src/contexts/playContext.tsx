import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CustomContextProviderProps } from "types/contextProviders";
import { Elements } from "types/elements";
import { PlayingResult } from "types/playing";

export type Player = {
  id: string;
  name: string;
  element?: Elements;
  score: number;
};

export type GameState = "waiting" | "playing" | "gameOver";

export type PlayContextType = {
  result: string | undefined;
  setResult: Dispatch<SetStateAction<string | undefined>>;
  players: Player[];
  setPlayers: Dispatch<SetStateAction<Player[]>>;
  roomId?: string;
  setRoomId: Dispatch<SetStateAction<string | undefined>>;
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
};

export const defaultContextValue: PlayContextType = {
  result: undefined,
  setResult: () => {},
  players: [],
  setPlayers: () => [],
  roomId: undefined,
  setRoomId: () => undefined,
  gameState: "waiting",
  setGameState: () => {},
};

const PlayContext = createContext(defaultContextValue);

const PlayProvider = ({ children }: CustomContextProviderProps) => {
  const [result, setResult] = useState<string>();
  const [players, setPlayers] = useState<Player[]>([]);
  const [roomId, setRoomId] = useState<string | undefined>();
  const [gameState, setGameState] = useState<GameState>("waiting");

  return (
    <PlayContext.Provider
      value={{
        result,
        setResult,
        players,
        setPlayers,
        roomId,
        setRoomId,
        gameState,
        setGameState,
      }}
    >
      {children}
    </PlayContext.Provider>
  );
};

export { PlayProvider, PlayContext };
