// import "./App.css";
import { Provider } from "./components/ui/provider";
import { Wrapper } from "./components/layout/wrapper";
import { PlayBoard } from "./modules/PlayBoard";

function App() {
  return (
    <Provider>
      <div className="App">
        <Wrapper>
          <PlayBoard />
        </Wrapper>
      </div>
    </Provider>
  );
}

export default App;
