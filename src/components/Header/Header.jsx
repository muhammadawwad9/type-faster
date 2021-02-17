import React, { useEffect } from "react";
import "./Header.css";
const Header = ({ level, time, score, highScores }) => {
  return (
    <div className="Header">
      <div className="header-elem">
        <span>Level</span>
        <span>{level[0].toUpperCase() + level.slice(1)}</span>
      </div>
      <div className="header-elem">
        {" "}
        <span>Time</span>
        <span>{time > 0 ? time : 0}</span>
      </div>
      <div className="header-elem">
        {" "}
        <span>Score</span>
        <span>{score}</span>
      </div>
      <div className="header-elem">
        {" "}
        <span>High Score</span>
        <span>{highScores[level] || 0}</span>
      </div>
    </div>
  );
};

export default Header;
