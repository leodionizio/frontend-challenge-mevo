import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CustomContextProviderProps } from "types/contextProviders";

export type MeContextType = {
  me: string;
  setMe: Dispatch<SetStateAction<string>>;
  isMe: (aliasName: string) => boolean;
};

export const defaultContextValue: MeContextType = {
  me: "",
  setMe: () => {},
  isMe: (aliasName) => false,
};

const MeContext = createContext(defaultContextValue);

const MeProvider = ({ children }: CustomContextProviderProps) => {
  const [me, setMe] = useState<string>("");

  const isMe = (aliasName: string) => aliasName === me;

  return (
    <MeContext.Provider value={{ me, setMe, isMe }}>
      {children}
    </MeContext.Provider>
  );
};

export { MeProvider, MeContext };
