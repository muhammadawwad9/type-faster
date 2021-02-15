import React, { Fragment } from "react";
import "./WordsContainer.css";

const WordsContainer = ({ passedOrFailed, wordsArr }) => {
  return (
    <div className="WordsContainer">
      {passedOrFailed == "passed" ? (
        <Fragment>
          <span className="main-word">
            {wordsArr.length != 0
              ? passedOrFailed[0].toUpperCase() + passedOrFailed.slice(1) + ":"
              : passedOrFailed[0].toUpperCase() +
                passedOrFailed.slice(1) +
                ": --"}
          </span>
          <div className={"words"}>
            {wordsArr.map((word, i) => (
              <span className="word" key={i}>
                {word}
              </span>
            ))}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <span className="main-word">
            {wordsArr.length != 0
              ? passedOrFailed[0].toUpperCase() + passedOrFailed.slice(1) + ":"
              : passedOrFailed[0].toUpperCase() +
                passedOrFailed.slice(1) +
                ": --"}
          </span>
          <div className={"words"}>
            {wordsArr.map((word, i) => (
              <div className="two-words" key={i}>
                <span className="incorrect-word">{word.incorrect}</span>

                <span className="correct-word">{word.correct}</span>
              </div>
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default WordsContainer;
