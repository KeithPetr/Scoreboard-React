import React, { useState } from 'react'
import NewGameButton from './NewGameButton';
import Champion from './Champion';
import Challenger from './Challenger';

function App() {
  const [challengerScore, setChallengerScore] = useState(0);
  const [championScore, setChampionScore] = useState(0);
  const [randNumOne, setRandNumOne] = useState(0);
  const [randNumTwo, setRandNumTwo] = useState(0);
  const [randNumThree, setRandNumThree] = useState(0);
  const [randNumFour, setRandNumFour] = useState(0);
  const [randNumFive, setRandNumFive] = useState(0);
  const [randNumSix, setRandNumSix] = useState(0);

  function reset() {
    setChallengerScore(0);
    setChampionScore(0);
    setRandNumOne(0);
    setRandNumTwo(0);
    setRandNumThree(0);
    setRandNumFour(0);
    setRandNumFive(0);
    setRandNumSix(0);
  }

  return (
    <div className="score-board">
      <NewGameButton onClick={reset} />
      <div className="button-area">
        <Champion
          championScore={championScore}
          randNumOne={randNumOne}
          randNumTwo={randNumTwo}
          randNumThree={randNumThree}
          onGenerateRandomNumber={() => {
            setRandNumOne(Math.ceil(Math.random() * 10));
            setRandNumTwo(Math.ceil(Math.random() * 10));
            setRandNumThree(Math.ceil(Math.random() * 10));
          }}
          onAddOne={() => setChampionScore(championScore + randNumOne)}
          onAddTwo={() => setChampionScore(championScore + randNumTwo)}
          onAddThree={() => setChampionScore(championScore + randNumThree)}
        />
        <Challenger
          challengerScore={challengerScore}
          randNumFour={randNumFour}
          randNumFive={randNumFive}
          randNumSix={randNumSix}
          onGenerateRandomNumber={() => {
            setRandNumFour(Math.ceil(Math.random() * 10));
            setRandNumFive(Math.ceil(Math.random() * 10));
            setRandNumSix(Math.ceil(Math.random() * 10));
          }}
          onAddOne={() => setChallengerScore(challengerScore + randNumFour)}
          onAddTwo={() => setChallengerScore(challengerScore + randNumFive)}
          onAddThree={() => setChallengerScore(challengerScore + randNumSix)}
        />
      </div>
    </div>
  );
}

export default App;

