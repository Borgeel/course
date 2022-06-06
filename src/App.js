import React, { useState } from "react";
import "./styles.css";

import Boxes from "./data/Boxes";

//components
import IdCard from "./components/IdCard";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Body from "./components/Body";
import Jokes from "./components/Jokes";
import Messages from "./components/Messages";

function App(props) {
  const [user, setUser] = useState("Zana");

  return (
    <div className="App">
      <Header user={user} />
      <hr />
      <IdCard />
      <hr />
      <Body user={user} darkMode={true} />
      <hr />
      <Counter />
      <hr />
      <Messages />
      <hr />
      <Jokes />
    </div>
  );
}

export default App;
