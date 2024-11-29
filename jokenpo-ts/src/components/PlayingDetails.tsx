import { useMemo } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { PlayingResult } from "types/playing";
import { Elements } from "types/elements";
import { ElementButton } from "./ElementButton";
import { Button } from "./ui/button";

type PlayingDetailsProps = {
  onPlayAgain: () => void;
  result?: PlayingResult;
  loading?: boolean;
  selectedElement?: Elements;
  machineSelectedElement?: Elements;
};

export const PlayingDetails = ({
  result,
  loading,
  selectedElement,
  machineSelectedElement,
  onPlayAgain,
}: PlayingDetailsProps) => {
  const resultText = useMemo(() => {
    if (result === "win") return "You win!";
    if (result === "lose") return "You loose!";
    return "Draw!";
  }, [result]);

  return (
    <Stack textAlign="center" gap={4} width="full">
      <Flex gap={6} justifyContent="space-between">
        <ElementButton element={selectedElement} onSelect={() => {}} />
        <ElementButton
          element={!loading ? machineSelectedElement : undefined}
          onSelect={() => {}}
        />
      </Flex>

      <Text textTransform="uppercase" fontWeight="semibold" fontSize={26}>
        {loading ? (
          <>
            Machine is
            <br /> choosing...
          </>
        ) : (
          <>Machine selected {machineSelectedElement}</>
        )}
      </Text>

      {!loading && (
        <Stack textAlign="center">
          <Text textTransform="uppercase" fontWeight="bold" fontSize={36}>
            {resultText}
          </Text>

          <Button width="full" onClick={() => onPlayAgain()}>
            Play Again
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
