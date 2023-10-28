import React from "react";

import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

import { answer } from "../Game";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ guess }) {
  const result = guess ? checkGuess(guess, answer) : undefined;
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <Cell
          key={index}
          letter={result ? result[index].letter : undefined}
          status={result ? result[index].status : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
