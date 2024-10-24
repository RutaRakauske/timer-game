import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  //const [submitted, setSubmitted] = useState(false);

  //Handle change of input field - take value from input and output to input value prop
  /*function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }*/

  //Handle button click - when clicked we need to set boolean to true, so we know what we should display in H2
  /*function handleClick() {
    setSubmitted(true);
  }*/

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>
        Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}
      </h2>
      <p>
        <input
          ref={playerName}
          type="text"
          //onChange={handleChange}
          //value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
