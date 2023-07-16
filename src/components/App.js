import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  let [text,setText]=useState("");
  function showText(){
    setText("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }

  return (
    <div className="App" id="main">
      // Do not alter the main div
      <p id="para" className="hide show">{text}</p>
      <button id="click" onClick={showText}>Show Text</button>
    </div>
  );
}

export default App
