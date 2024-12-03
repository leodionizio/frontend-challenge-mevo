import { useContext } from "react";
import { Card, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { PlayContext } from "contexts/playContext";
import { MeContext } from "contexts/meContext";

export const Score = () => {
  const { players } = useContext(PlayContext);
  const { isMe } = useContext(MeContext);

  return (
    <Card.Root size="sm" width="full" bg="white" color="black">
      <Card.Header textAlign="center">
        <Heading fontSize={26} textTransform="uppercase">
          Score
        </Heading>
      </Card.Header>
      <Card.Body textAlign="center" pt={0}>
        <Stack width="full" gap={1} mt={2}>
          {players.map((player) => (
            <Text fontSize={24} fontWeight="bold" key={player.id}>
              {player.name}
              {isMe(player.name) && "(you)"}: {player.score}
            </Text>
          ))}
        </Stack>
      </Card.Body>
    </Card.Root>
  );
};
