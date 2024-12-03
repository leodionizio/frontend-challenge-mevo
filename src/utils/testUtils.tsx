import {
  defaultContextValue as defaultPlayContext,
  PlayContext,
  PlayContextType,
} from "contexts/playContext";
import { Provider as ThemeProvider } from "../components/ui/provider";
import { ReactNode } from "react";
import {
  defaultContextValue as defaultLoadingContext,
  LoadingContext,
  LoadingContextType,
} from "contexts/loadingContext";

type CustomTestWrapperProps = {
  children: ReactNode;
  playContextValues?: Partial<PlayContextType>;
  loadingContextvalues?: Partial<LoadingContextType>;
};

export const customTestWrapper = ({
  children,
  playContextValues,
  loadingContextvalues,
}: CustomTestWrapperProps) => (
  <ThemeProvider>
    <PlayContext.Provider
      value={{ ...defaultPlayContext, ...playContextValues }}
    >
      <LoadingContext.Provider
        value={{ ...defaultLoadingContext, ...loadingContextvalues }}
      >
        {children}
      </LoadingContext.Provider>
    </PlayContext.Provider>
  </ThemeProvider>
);
