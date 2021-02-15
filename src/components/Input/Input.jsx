import React, { useEffect, useRef } from "react";
import "./Input.css";

//functions imports
import { randomWord } from "../../utils";

//sounds
import { correct, incorrect, newHighScore, fireWorks } from "../../utils";
const Input = ({
  currentWord,
  setCrrentWord,
  wordsArr,
  setTime,
  setPassedWordsArr,
  setFailedWordsArr,
  score,
  setScore,
  timeDecrement,
  timeIncrement,
  scoreIncrement,
  highScore,
}) => {
  //functions

  const checkWord = async (e) => {
    if (e.target.value.toLowerCase() == currentWord.toLowerCase()) {
      if (score == highScore) {
        newHighScore.play();
        fireWorks.play();
      }
      correct.play();
      setScore((prev) => prev + scoreIncrement);
      setTime((prev) => prev + timeIncrement);
      setPassedWordsArr((prev) => {
        return [...prev, e.target.value];
      });
    } else {
      incorrect.play();
      setTime((prev) => prev - timeDecrement);
      setFailedWordsArr((prev) => {
        return [
          ...prev,
          {
            correct: currentWord.toLowerCase(),
            incorrect: e.target.value.toLowerCase(),
          },
        ];
      });
    }
    await setCrrentWord(randomWord(wordsArr));
    e.target.value = "";
  };

  return (
    <div className="Input">
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value.length == currentWord.length) checkWord(e);
        }}
      />
    </div>
  );
};

export default Input;
