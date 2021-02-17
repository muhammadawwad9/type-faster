import React, { useState, useEffect, Fragment } from "react";

//screens imports
import GameOver from "./screens/GameOver/GameOver";
import Overlay from "./screens/Overlay/Overlay";
import GameScreen from "./screens/GameScreen/GameScreen";

function App() {
  //states
  const [level, setLevel] = useState("easy");
  const [score, setScore] = useState(0);
  const [startTheGame, setStartTheGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [highScores, setHighScores] = useState({});
  const [passedWordsArr, setPassedWordsArr] = useState([]);
  const [failedWordsArr, setFailedWordsArr] = useState([]);
  //useEffect
  useEffect(() => {
    let localHighScores = localStorage.getItem("highScores");
    console.log("bom ", localHighScores);
    if (localHighScores) setHighScores(JSON.parse(localHighScores));
    else {
      setHighScores({ easy: null, medium: null, hard: null });
    }
  }, []);
  return (
    <div className="App">
      {gameOver ? (
        <GameOver
          score={score}
          highScores={highScores}
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
              highScores={highScores}
              setHighScores={setHighScores}
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
