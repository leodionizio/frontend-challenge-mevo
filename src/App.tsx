import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Provider as ThemeProvider } from "./components/ui/provider";
import { Wrapper } from "./components/layout/Wrapper";
import { LoadingProvider } from "contexts/loadingContext";
import { PlayProvider } from "contexts/playContext";
import { MeProvider } from "contexts/meContext";
import { EnterRoomPage } from "pages/EnterRoom";
import { PlayBoardPage } from "pages/PlayBoard";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <MeProvider>
          <LoadingProvider>
            <PlayProvider>
              <Wrapper>
                <Router>
                  <Routes>
                    <Route path="/" element={<EnterRoomPage />} />
                    <Route path="/playing" element={<PlayBoardPage />} />
                  </Routes>
                </Router>
              </Wrapper>
            </PlayProvider>
          </LoadingProvider>
        </MeProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
