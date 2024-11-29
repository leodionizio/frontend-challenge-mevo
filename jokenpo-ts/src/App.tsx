import { Provider } from "./components/ui/provider";
import { Wrapper } from "./components/layout/wrapper";
import { PlayBoard } from "./modules/PlayBoard";
import { LoadingProvider } from "contexts/loadingContext";

function App() {
  return (
    <Provider>
      <div className="App">
        <LoadingProvider>
          <Wrapper>
            <PlayBoard />
          </Wrapper>
        </LoadingProvider>
      </div>
    </Provider>
  );
}

export default App;
