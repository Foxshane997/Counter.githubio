// Multi Line
// import React from "react";
// import { useState } from "react";

// Inline/Single Line
import React, { useState } from "react";
import './App.css'

function App(){
  let [ counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter

  const handleIncrement = () => {
    changeCounter (counter + 1)
  }

  const handleDecrement = () => {
    changeCounter (counter - 1)
  }

  return (
    <div className="App">
      <h1>The Current Number is</h1>
      <h2>{counter}</h2>

      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement} disabled={counter <= 0} >-1</button>
    </div>
  )
}

export default App;

// Original Code -
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn More About React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
