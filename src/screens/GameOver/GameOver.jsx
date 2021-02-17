import React, { Fragment, useState } from "react";
import "./GameOver.css";
//components imports
import WordsContainer from "../../components/WordsContainer/WordsContainer";
const GameOver = ({
  score,
  highScore,
  setGameOver,
  passedWordsArr,
  failedWordsArr,
}) => {
  return (
    <div className="GameOver">
      <div className="gameover-items">
        <span className="game-over-word">Game Over</span>
        {score == highScore ? (
          <Fragment>
            <h2 className="congrats">
              Congratulations! You reached a new high score! 🎉🎉
            </h2>
            <div className="new-high-score">
              <span>High Score:</span>
              <span>{highScore}</span>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="message">Good luck next time</h2>
            <h2>Your Score: {score}</h2>
            <h2>High Score: {highScore}</h2>
          </Fragment>
        )}
        <div className="words-containers">
          <WordsContainer passedOrFailed="passed" wordsArr={passedWordsArr} />
          <WordsContainer passedOrFailed="failed" wordsArr={failedWordsArr} />
        </div>
        <button onClick={() => setGameOver(false)}>PLAY AGAIN</button>
      </div>
    </div>
  );
};

export default GameOver;
