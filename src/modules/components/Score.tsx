import { useContext } from "react";
import { Card, Flex, Heading, Text } from "@chakra-ui/react";
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
        <Flex width="full" justifyContent="space-around">
          {players.map((player) => (
            <Text fontSize={36} fontWeight="bold" key={player.id}>
              {player.name}
              {isMe(player.name) && "(you)"}: {player.score}
            </Text>
          ))}
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};
