import React, { useState, useEffect, Fragment } from "react";

//components imports
import Overlay from "./components/Overlay/Overlay";
import GameOver from "./components/GameOver/GameOver";

//screens imports
import GameScreen from "./screens/GameScreen/GameScreen";

function App() {
  //states
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [startTheGame, setStartTheGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [passedWordsArr, setPassedWordsArr] = useState([]);
  const [failedWordsArr, setFailedWordsArr] = useState([]);
  //useEffect
  useEffect(() => {
    const storedHighScore = localStorage.getItem("high-score");
    if (storedHighScore) setHighScore(+storedHighScore);
  }, []);
  return (
    <div className="App">
      {gameOver ? (
        <GameOver
          score={score}
          highScore={highScore}
          setGameOver={setGameOver}
          passedWordsArr={passedWordsArr}
          failedWordsArr={failedWordsArr}
        />
      ) : (
        <Fragment>
          {!startTheGame ? (
            <Overlay
              setLevel={setLevel}
              setStartTheGame={setStartTheGame}
              passedWordsArr={passedWordsArr}
              failedWordsArr={failedWordsArr}
            />
          ) : (
            <GameScreen
              level={level}
              startTheGame={startTheGame}
              passedWordsArr={passedWordsArr}
              failedWordsArr={failedWordsArr}
              setPassedWordsArr={setPassedWordsArr}
              setFailedWordsArr={setFailedWordsArr}
              setStartTheGame={setStartTheGame}
              highScore={highScore}
              setHighScore={setHighScore}
              setGameOver={setGameOver}
              score={score}
              setScore={setScore}
            />
          )}
        </Fragment>
      )}
    </div>
  );
}

export default App;
