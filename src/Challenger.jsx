import React from "react";

export default function Challenger(props) {
    const {
        challengerScore,
        randNumFour,
        randNumFive,
        randNumSix,
        onGenerateRandomNumber,
        onAddOne,
        onAddTwo,
        onAddThree,
      } = props;

  return (
    <div className="challenger-side">
      <h1 className="title">Challenger</h1>
      <div className="score-display">{challengerScore}</div>
      <div className="score-inputs">
        <button onClick={onAddOne} className="score-btn">
          +{randNumFour}
        </button>
        <button onClick={onAddTwo} className="score-btn">
          +{randNumFive}
        </button>
        <button onClick={onAddThree} className="score-btn">
          +{randNumSix}
        </button>
      </div>
      <button
        onClick={onGenerateRandomNumber}
        className="normal-button"
        id="challenger-generate-btn"
      >
        Generate
      </button>
    </div>
  );
}
