import { useContext, useMemo } from "react";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { LoadingContext } from "contexts/loadingContext";
import { PlayContext } from "contexts/playContext";
import { ElementButton } from "./ElementButton";
import { Button } from "components/ui/button";
import { MeContext } from "contexts/meContext";

type PlayingDetailsProps = {
  onPlayAgain: () => void;
};

export const PlayingDetails = ({ onPlayAgain }: PlayingDetailsProps) => {
  const { loading } = useContext(LoadingContext);
  const { result, players, gameState } = useContext(PlayContext);
  const { isMe } = useContext(MeContext);

  const resultText = useMemo(() => {
    const playerName = result?.split(" ")[0];
    if (playerName && isMe(playerName)) return "You win!";
    if (playerName && !isMe(playerName)) return "You loose!";
    return "Draw!";
  }, [result]);

  const resultTextColor = useMemo(() => {
    if (resultText.includes("win")) return "green";
    if (resultText.includes("loose")) return "red";
    return "yellow";
  }, [resultText]);

  return (
    <Stack textAlign="center" gap={4} width="full">
      <Flex gap={6} justifyContent="space-between">
        {players?.map((player) => (
          <ElementButton
            key={`element-button-${player.element}`}
            element={player.element}
            onSelect={() => {}}
          />
        ))}
      </Flex>

      <Stack my={4}>
        {loading && (
          <Text textTransform="uppercase" fontWeight="semibold" fontSize={26}>
            Waiting
            <br /> all players play...
          </Text>
        )}

        {!loading &&
          players?.map((player) => (
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              fontSize={18}
              key={player.id}
            >
              {player.name} played {player.element}
            </Text>
          ))}
      </Stack>

      {gameState === "gameOver" && (
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
            fontSize={20}
            mt={2}
          >
            Play Again
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
