import { Flex } from "@chakra-ui/react";
import { Elements } from "types/elements";
import { ElementButton } from "./ElementButton";

type ElementsSelectProps = {
  play: (element: Elements) => void;
};

export const ElementsSelect = ({ play }: ElementsSelectProps) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <ElementButton element="rock" onSelect={play} />
        <ElementButton element="paper" onSelect={play} />
      </Flex>
      <Flex justifyContent="center">
        <ElementButton element="scizor" onSelect={play} />
      </Flex>
    </>
  );
};
