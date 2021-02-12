export const words = require("an-array-of-english-words");

//randomWord(), this function takes an array and returns a random value from it
export const randomWord = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

export const correct = new Audio("sounds/correct.mp3");
export const incorrect = new Audio("sounds/incorrect.mp3");
export const newHighScore = new Audio("sounds/newHighScore.mp3");
export const backgroundMusic = new Audio("sounds/backgroundMusic.mp3");
export const gameOver = new Audio("sounds/gameOver.mp3");
export const fireWorks = new Audio("sounds/fireWorks.mp3");
