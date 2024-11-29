import { Card, Heading, Text } from "@chakra-ui/react";

type ScoreProps = {
  score: number;
};

export const Score = ({ score }: ScoreProps) => {
  return (
    <Card.Root size="sm" width="full" bg="white" color="black">
      <Card.Header textAlign="center">
        <Heading fontSize={26}>Score</Heading>
      </Card.Header>
      <Card.Body textAlign="center" pt={0}>
        <Text fontSize={36} fontWeight="bold">
          {String(score)}
        </Text>
      </Card.Body>
    </Card.Root>
  );
};
