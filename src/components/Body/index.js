import { useState } from "react";
import "./styles.css";

//data
import boxes from "../../data/Boxes.js";

//components
import Box from "./Box";

const Body = (props) => {
  const [squares, setSquares] = useState(boxes);

  const toggle = (id) => {
    setSquares((prevState) => {
      return prevState.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  };

  const squareElements = squares.map((square) => {
    return (
      <Box
        toggle={() => toggle(square.id)}
        key={square.id}
        on={square.on}
        id={square.id}
      />
    );
  });

  return (
    <>
      <h1>Welcome back, {props.user}! </h1>
      <hr />
      <div> {squareElements} </div>
    </>
  );
};

export default Body;
