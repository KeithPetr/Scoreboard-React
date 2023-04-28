import React, { useState } from 'react'

export default function Challenger() {
    const [challengerScore, setChallengerScore] = useState(0) 
    const [randNumFour, setRandNumFour] = useState(0)
    const [randNumFive, setRandNumFive] = useState(0)
    const [randNumSix, setRandNumSix] = useState(0)

    function challengerGenerateRandomNumber() {
        setRandNumFour(Math.ceil(Math.random() * 10));
        setRandNumFive(Math.ceil(Math.random() * 10));
        setRandNumSix(Math.ceil(Math.random() * 10));
      }

    function challengerAddOne() {
        setChallengerScore(prevScore => prevScore + randNumFour)
    }
    function challengerAddTwo() {
        setChallengerScore(prevScore => prevScore + randNumFive)
    }
    function challengerAddThree() {
        setChallengerScore(prevScore => prevScore + randNumSix)
    }


  return (
    <div className="challenger-side">
      <h1 className="title">Challenger</h1>
      <div className="score-display">
        {challengerScore}
      </div>
      <div className="score-inputs">
        <button onClick={challengerAddOne} className="score-btn">
          +{randNumFour}
        </button>
        <button onClick={challengerAddTwo} className="score-btn">
          +{randNumFive}
        </button>
        <button onClick={challengerAddThree} className="score-btn">
          +{randNumSix}
        </button>
      </div>
      <button onClick={challengerGenerateRandomNumber} className="normal-button" id="challenger-generate-btn">
        Generate
      </button>
    </div>
  );
}
