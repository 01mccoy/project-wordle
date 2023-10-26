import React from "react";

import { WORD_LENGTH } from "../../constants";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.info({ guess });
    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        pattern="[a-zA-Z]{5,5}"
        title="5개의 글자를 영어로 입력해주세요."
        minLength={WORD_LENGTH}
        maxLength={WORD_LENGTH}
      />
    </form>
  );
}

export default GuessInput;
