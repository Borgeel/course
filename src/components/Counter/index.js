import React, { useState } from "react";
import "./styles.css";

//components
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prevState) => prevState + 1);
  };

  const subtract = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="counter">
      <button onClick={add} className="add">
        +
      </button>
      <Count number={count} />
      <button onClick={subtract} className="subtract">
        -
      </button>
    </div>
  );
};

export default Counter;
