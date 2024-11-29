import { Flex } from "@chakra-ui/react";
import { Elements } from "types/elements";
import { ElementButton } from "./ElementButton";

type ElementsSelectProps = {
  selectElement: (element: Elements) => void;
};

export const ElementsSelect = ({ selectElement }: ElementsSelectProps) => {
  return (
    <>
      <Flex justifyContent="space-between">
        <ElementButton element="rock" onSelect={selectElement} />
        <ElementButton element="paper" onSelect={selectElement} />
      </Flex>
      <Flex justifyContent="center">
        <ElementButton element="scizor" onSelect={selectElement} />
      </Flex>
    </>
  );
};
