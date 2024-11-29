import { useContext, useMemo } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { LoadingContext } from "contexts/loadingContext";
import { PlayContext } from "contexts/playContext";
import { ElementButton } from "./ElementButton";
import { Button } from "components/ui/button";

type PlayingDetailsProps = {
  onPlayAgain: () => void;
};

export const PlayingDetails = ({ onPlayAgain }: PlayingDetailsProps) => {
  const { loading } = useContext(LoadingContext);
  const { result, playerOneElement, playerTwoElement } =
    useContext(PlayContext);

  const resultText = useMemo(() => {
    if (result === "win") return "You win!";
    if (result === "lose") return "You loose!";
    return "Draw!";
  }, [result]);

  const resultTextColor = useMemo(() => {
    if (result === "win") return "green";
    if (result === "lose") return "red";
    return "yellow";
  }, [result]);

  return (
    <Stack textAlign="center" gap={4} width="full">
      <Flex gap={6} justifyContent="space-between">
        <ElementButton element={playerOneElement} onSelect={() => {}} />
        <ElementButton
          element={!loading ? playerTwoElement : undefined}
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
          <>Machine selected {playerTwoElement}</>
        )}
      </Text>

      {!loading && (
        <Stack textAlign="center">
          <Text
            textTransform="uppercase"
            fontWeight="bold"
            fontSize={36}
            color={resultTextColor}
          >
            {resultText}
          </Text>

          <Button
            width="full"
            onClick={() => onPlayAgain()}
            bg="#2980B9"
            color="white"
            textTransform="uppercase"
          >
            Play Again
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
