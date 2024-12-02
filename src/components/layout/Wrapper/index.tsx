import { ReactNode } from "react";
import { Stack } from "@chakra-ui/react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Stack alignItems="center" padding={8} width="full" maxW={600} margin="auto">
      {children}
    </Stack>
  );
};
