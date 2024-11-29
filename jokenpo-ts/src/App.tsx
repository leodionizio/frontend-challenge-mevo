import { Provider } from "./components/ui/provider";
import { Wrapper } from "./components/layout/wrapper";
import { PlayBoard } from "./modules/PlayBoard";
import { LoadingProvider } from "contexts/loadingContext";
import { PlayProvider } from "contexts/playContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <LoadingProvider>
          <PlayProvider>
            <Wrapper>
              <PlayBoard />
            </Wrapper>
          </PlayProvider>
        </LoadingProvider>
      </div>
    </Provider>
  );
}

export default App;
