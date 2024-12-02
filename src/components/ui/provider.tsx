"use client";

import {
  ChakraProvider,
  createSystem,
  defaultSystem,
  defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: {
          value: "#2C3E50",
          // dark: "#2C3E50",
        },
      },
      // colors: {
      //   black: "#cecece",
      // },
    },
  },
});

const system = createSystem(config);

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider
      value={{
        ...defaultSystem,
        // ...system,
      }}
    >
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
