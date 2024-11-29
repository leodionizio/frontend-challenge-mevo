import React, { useEffect, useState } from "react";
// import "./App.css";
import { Provider } from "./components/ui/provider";
import { ElementsSelect } from "./components/elements-select";
import { Wrapper } from "./components/layout/wrapper";
import { Score } from "./components/score";
import { PlayingDetails } from "./components/playing-details";
import { Spacer } from "@chakra-ui/react";
import { usePlaying } from "./hooks/use-playing";

function App() {
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
    <Provider>
      <div className="App">
        <Wrapper>
          <Score score={score} />
          <Spacer marginY={8} />
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
        </Wrapper>
      </div>
    </Provider>
  );
}

export default App;
