import React, { useState, useEffect } from "react";
import "./Overlay.css";

const Overlay = ({ setLevel, setStartTheGame }) => {
  //states
  const [timeToStart, setTimeToStart] = useState(3);
  //functions

  const playHandler = (e) => {
    e.target.disabled = true;
    document.querySelector(".level-selection select").disabled = true;
    document.querySelector("#time-to-start").classList.remove("hide");
    const countToStart = setInterval(() => {
      setTimeToStart((prev) => {
        if (prev <= 0) clearInterval(timeToStart);
        else return prev - 1;
      });
    }, 1000);
  };

  //useEffect
  useEffect(() => {
    if (timeToStart <= 0) {
      setLevel(document.querySelector(".level-selection select").value);
      setStartTheGame(true);
    }
  }, [timeToStart]);
  return (
    <div className="Overlay">
      <div className="overlay-items">
        <div className="description">
          <p>
            In this game you can check how fast you are on the keyboard!. You
            can choose the game level, each level has different time
            calculations, what are you waiting for? choose the level and play!
          </p>
        </div>

        <div className="level-selection">
          <select>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={(e) => playHandler(e)}>PLAY</button>
        </div>
        <span id="time-to-start" className="hide">
          {timeToStart}
        </span>
      </div>
    </div>
  );
};

export default Overlay;
