import React, { useState } from "react";

export default function Champion() {
  const [championScore, setChampionScore] = useState(0);
  const [randNumOne, setRandNumOne] = useState(0);
  const [randNumTwo, setRandNumTwo] = useState(0);
  const [randNumThree, setRandNumThree] = useState(0);

  function championGenerateRandomNumber() {
    setRandNumOne(Math.ceil(Math.random() * 10));
    setRandNumTwo(Math.ceil(Math.random() * 10));
    setRandNumThree(Math.ceil(Math.random() * 10));
  }

  function championAddOne() {
    setChampionScore(prevScore => prevScore + randNumOne)
}
function championAddTwo() {
    setChampionScore(prevScore => prevScore + randNumTwo)
}
function championAddThree() {
    setChampionScore(prevScore => prevScore + randNumThree)
}

  return (
    <div className="champion-side">
      <h1 className="title">Champion</h1>
      <div className="score-display">
        {championScore}
      </div>
      <div className="score-inputs">
        <button onClick={championAddOne} className="score-btn">
          +{randNumOne}
        </button>
        <button onClick={championAddTwo} className="score-btn">
          +{randNumTwo}
        </button>
        <button onClick={championAddThree} className="score-btn">
          +{randNumThree}
        </button>
      </div>
      <button
        onClick={championGenerateRandomNumber}
        className="normal-button"
        id="champion-generate-btn"
      >
        Generate
      </button>
    </div>
  );
}
