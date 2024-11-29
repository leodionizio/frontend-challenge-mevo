import { ReactNode } from "react";
import { Flex, Stack } from "@chakra-ui/react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <Stack alignItems="center" style={{ width: "100vw" }} padding={8}>
      {children}
    </Stack>
  );
};
