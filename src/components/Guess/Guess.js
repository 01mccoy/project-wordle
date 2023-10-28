import React from "react";

import { WORD_LENGTH } from "../../constants";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(WORD_LENGTH).map((index) => (
        <span key={index} className="cell">
          {guess ? guess[index] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
