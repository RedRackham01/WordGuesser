/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AppContext } from "../App";

function GameOver() {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  const winner = gameOver.guessedWord;
  const winStyle = winner ? { color: "green" } : { color: "red" };
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="gameOver">
      <h3 style={winStyle}>{winner ? "You Correctly Guessed the Word" : "You Failed to Guess the Word"}</h3>
      <h2>Correct Word: {correctWord.toUpperCase()}</h2>
      {gameOver.guessedWord && <h3>You guessed in {currAttempt.attempt} attempts</h3>}
      <button className="reloadBtn" onClick={refreshPage}>
        <span>Play Again! ⟳</span>
      </button>
    </div>
  );
}

export default GameOver;
