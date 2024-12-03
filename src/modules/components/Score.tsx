import { useContext } from "react";
import { Card, Heading, Text } from "@chakra-ui/react";
import { PlayContext } from "contexts/playContext";

export const Score = () => {
  const { score } = useContext(PlayContext);

  return (
    <Card.Root size="sm" width="full" bg="white" color="black">
      <Card.Header textAlign="center">
        <Heading fontSize={26} textTransform="uppercase">
          Score
        </Heading>
      </Card.Header>
      <Card.Body textAlign="center" pt={0}>
        <Text fontSize={36} fontWeight="bold">
          {score}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
