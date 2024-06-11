import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";

function App() {
  let [counter, changeCounter] = useState(1);
  window.changeCounter = changeCounter;

  const handleIncrement = () => {
    changeCounter(counter + 1);
  };

  const handleDecrement = () => {
    changeCounter(counter - 1);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1 className="header">The Current Number is</h1>
        <h2 className="header">{counter}</h2>

        <button className="button-increment" onClick={handleIncrement}>
          +1
        </button>
        <button
          className="button-decrement"
          onClick={handleDecrement}
          disabled={counter <= 0}
        >
          -1
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
