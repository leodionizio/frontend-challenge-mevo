import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { usePlaying } from "hooks/usePlaying";
import { ElementsSelect } from "./components/ElementsSelect";
import { PlayingDetails } from "./components/PlayingDetails";
import { Score } from "./components/Score";
import { useContext, useEffect, useState } from "react";
import { PlayContext } from "contexts/playContext";
import { MeContext } from "contexts/meContext";

export const PlayBoard = () => {
  const { play, clearResult } = usePlaying();
  const { players, roomId } = useContext(PlayContext);
  const { me } = useContext(MeContext);
  const [alreadyPlayed, setAlreadyPlayed] = useState(false);

  useEffect(() => {
    const mePlayer = players.find((player) => player.name === me);
    if (mePlayer?.element) {
      setAlreadyPlayed(true);
    } else {
      setAlreadyPlayed(false);
    }
  }, [players]);

  return (
    <>
      <Flex width="full" justifyContent="space-between">
        <Text fontSize={26} fontWeight="bold">
          Room: {roomId}
        </Text>
      </Flex>
      <Spacer marginY={2} />

      <Score />
      <Spacer my={4} />

      <Stack paddingX={4} width="full">
        {!alreadyPlayed && <ElementsSelect play={play} />}

        {alreadyPlayed && <PlayingDetails onPlayAgain={clearResult} />}
      </Stack>
    </>
  );
};
