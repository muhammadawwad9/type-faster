import React from "react";
import "./WordsContainer.css";

const WordsContainer = ({ passedOrFailed, wordsArr }) => {
  return (
    <div className="WordsContainer">
      <span
        className={passedOrFailed == "passed" ? "passed-word" : "failed-word"}
      >
        {passedOrFailed[0].toUpperCase() + passedOrFailed.slice(1) + ":"}
      </span>
      <div className={"words"}>
        {wordsArr.length == 0
          ? "--"
          : wordsArr.map((word, i) => (
              <span className="word" key={i}>
                {word}
              </span>
            ))}
      </div>
    </div>
  );
};

export default WordsContainer;
