import { Spacer, Stack } from "@chakra-ui/react";
import { ElementsSelect } from "components/ElementsSelect";
import { PlayingDetails } from "components/PlayingDetails";
import { Score } from "components/score";
import { usePlaying } from "hooks/usePlaying";

export const PlayBoard = () => {
  const {
    result,
    loading,
    isPlaying,
    selectElement,
    machineSelectedElement,
    selectedElement,
    clearResult,
    score,
  } = usePlaying();

  return (
    <>
      <Score score={score} />
      <Spacer marginY={8} />

      <Stack paddingX={4} width="full">
        {!isPlaying && !loading ? (
          <ElementsSelect selectElement={selectElement} />
        ) : (
          <PlayingDetails
            result={result}
            loading={loading}
            selectedElement={selectedElement}
            machineSelectedElement={machineSelectedElement}
            onPlayAgain={clearResult}
          />
        )}
      </Stack>
    </>
  );
};
