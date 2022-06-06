import { useState } from "react";
import "./styles.css";

//components
import SwitchButton from "./SwitchButton";

const Header = (props) => {
  return (
    <header>
      <div>Current user: {props.user} </div>
      <SwitchButton />
    </header>
  );
};

export default Header;
