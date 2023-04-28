import NewGameButton from "./NewGameButton";
import Champion from "./Champion";
import Challenger from "./Challenger";

function App() {
  
  return (
    <div className="score-board">
      <NewGameButton />
      <div className="button-area">
        <Champion />
        <Challenger />
      </div>
    </div>
  );
}

export default App;
