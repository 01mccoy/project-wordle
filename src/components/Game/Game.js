import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Components
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameOverBanner from "../GameOverBanner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guessList, setGuessList] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuessList = [...guessList, guess];
    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
    setGuessList(nextGuessList);
  }

  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
      <GameOverBanner
        gameStatus={gameStatus}
        numOfGuesses={guessList.length}
        answer={answer}
      />
    </>
  );
}

export default Game;
