import { createContext, Dispatch, SetStateAction, useState } from "react";
import { CustomContextProviderProps } from "types/contextProviders";

export type LoadingContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const defaultContextValue: LoadingContextType = {
  loading: false,
  setLoading: () => {},
};

const LoadingContext = createContext(defaultContextValue);

const LoadingProvider = ({ children }: CustomContextProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext };
