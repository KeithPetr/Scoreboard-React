import React from "react";

export default function Champion(props) {
  const {
    championScore,
    randNumOne,
    randNumTwo,
    randNumThree,
    onGenerateRandomNumber,
    onAddOne,
    onAddTwo,
    onAddThree,
    leader
  } = props;

  return (
    <div className="champion-side">
      <h1 className="title">Champion</h1>
      <div className={`score-display ${leader ? 'leader' : ''}`}>{championScore}</div>
      <div className="score-inputs">
        <button onClick={onAddOne} className="score-btn">
          +{randNumOne}
        </button>
        <button onClick={onAddTwo} className="score-btn">
          +{randNumTwo}
        </button>
        <button onClick={onAddThree} className="score-btn">
          +{randNumThree}
        </button>
      </div>
      <button
        onClick={onGenerateRandomNumber}
        className="normal-button"
        id="champion-generate-btn"
      >
        Generate
      </button>
    </div>
  );
}
