import React, { useState } from "react";

const Joke = (props) => {
  const [isShown, setIsShown] = useState(false);

  const toggle = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggle}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <hr />
    </div>
  );
};

export default Joke;
