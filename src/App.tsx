import { Provider as ThemeProvider } from "./components/ui/provider";
import { Wrapper } from "./components/layout/Wrapper";
import { PlayBoard } from "./modules/PlayBoard";
import { LoadingProvider } from "contexts/loadingContext";
import { PlayProvider } from "contexts/playContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <LoadingProvider>
          <PlayProvider>
            <Wrapper>
              <PlayBoard />
            </Wrapper>
          </PlayProvider>
        </LoadingProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
