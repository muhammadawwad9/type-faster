import React, { useEffect, useRef, useState } from "react";
import "./GameScreen.css";
//here I import the words array
import { words } from "../../utils";
//functions imports
import { randomWord } from "../../utils";
//components imports
import Header from "../../components/Header/Header";
import WordsContainer from "../../components/WordsContainer/WordsContainer";
import CurrentWord from "../../components/CurrentWord/CurrentWord";
import Input from "../../components/Input/Input";

//sounds
import { gameOver, backgroundMusic } from "../../utils";
backgroundMusic.volume = 0.5;
backgroundMusic.loop = true;
const GameScreen = ({
  level,
  startTheGame,
  setStartTheGame,
  highScores,
  setHighScores,
  setGameOver,
  score,
  setScore,
  passedWordsArr,
  failedWordsArr,
  setPassedWordsArr,
  setFailedWordsArr,
}) => {
  //states
  const [scoreIncrement, setScoreIncrement] = useState(3);
  const [timeIncrement, setTimeIncrement] = useState(2);
  const [timeDecrement, setTimeDecrement] = useState(2);
  const [wordsArr, setWordsArr] = useState(words);
  const [currentWord, setCurrentWord] = useState(randomWord(wordsArr));
  const [time, setTime] = useState(12);

  //functions
  const storeInLocalStorage = () => {
    localStorage.setItem("highScores", JSON.stringify(highScores));
  };

  const countDown = () => {
    const iVal = setInterval(() => {
      setTime((prev) => {
        if (prev <= 0) {
          clearInterval(iVal);
        } else return prev - 1;
      });
    }, 1000);
  };

  //useEffects
  useEffect(() => {
    if (startTheGame) {
      backgroundMusic.play();
      setScore(0);
      setPassedWordsArr([]);
      setFailedWordsArr([]);
      countDown();
    }
    switch (level) {
      case "easy":
        setTime(12);
        setTimeDecrement(3);
        setTimeIncrement(4);
        break;
      case "medium":
        setTime(10);
        setTimeDecrement(5);
        setTimeIncrement(3);

        break;
      case "hard":
        setTime(7);
        setTimeDecrement(7);
        setTimeIncrement(2);
        break;
    }
    const input = document.querySelector(".Input input");
    input.focus();
  }, [startTheGame]);

  useEffect(async () => {
    if (time <= 0) {
      gameOver.play();
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;

      if (highScores[level]) {
        if (score > highScores[level]) {
          await setHighScores({ ...highScores, [level]: score });
        }
      } else {
        await setHighScores({ ...highScores, [level]: score });
      }
      setGameOver(true);
      setStartTheGame(false);
    }
  }, [time]);

  useEffect(() => {
    storeInLocalStorage();
  }, [highScores]);
  return (
    <div className="GameScreen">
      <Header level={level} time={time} score={score} highScores={highScores} />
      <div className="play-area">
        <CurrentWord currentWord={currentWord} />
        <Input
          wordsArr={wordsArr}
          setTime={setTime}
          currentWord={currentWord}
          setCrrentWord={setCurrentWord}
          setPassedWordsArr={setPassedWordsArr}
          setFailedWordsArr={setFailedWordsArr}
          setScore={setScore}
          timeDecrement={timeDecrement}
          timeIncrement={timeIncrement}
          scoreIncrement={scoreIncrement}
          score={score}
          highScores={highScores}
          level={level}
        />
      </div>
      <hr />
      <WordsContainer passedOrFailed="passed" wordsArr={passedWordsArr} />
      <WordsContainer passedOrFailed="failed" wordsArr={failedWordsArr} />
    </div>
  );
};

export default GameScreen;
