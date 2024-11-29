import { Elements } from "@/types/elements";
import { usePlaying } from "../hooks/use-playing";
import { ElementButton } from "./element-button";
import { Flex } from "@chakra-ui/react";

type ElementsSelectProps = {
  selectElement: (element: Elements) => void;
};

export const ElementsSelect = ({ selectElement }: ElementsSelectProps) => {
  return (
    <>
      <Flex justifyContent="space-between" position="relative" width="full">
        <ElementButton element="rock" onSelect={selectElement} />
        <ElementButton element="paper" onSelect={selectElement} />
      </Flex>
      <Flex>
        <ElementButton element="scizor" onSelect={selectElement} />
      </Flex>
    </>
  );
};
