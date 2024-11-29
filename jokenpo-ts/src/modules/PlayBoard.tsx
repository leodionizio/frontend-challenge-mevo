import { Spacer, Stack } from "@chakra-ui/react";
import { ElementsSelect } from "components/ElementsSelect";
import { PlayingDetails } from "components/PlayingDetails";
import { Score } from "components/Score";
import { usePlaying } from "hooks/usePlaying";

export const PlayBoard = () => {
  const { isPlaying, selectElement, clearResult } = usePlaying();

  return (
    <>
      <Score />
      <Spacer marginY={8} />

      <Stack paddingX={4} width="full">
        {!isPlaying ? (
          <ElementsSelect selectElement={selectElement} />
        ) : (
          <PlayingDetails onPlayAgain={clearResult} />
        )}
      </Stack>
    </>
  );
};
