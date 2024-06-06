// Multi Line food for thought
// import React from "react";
// import { useState } from "react";

// Inline/Single Line
import React, { useState } from "react";
import './App.css'

function App(){
  // Setting what number the counter starts at
  let [ counter, changeCounter] = useState(1)
  window.changeCounter = changeCounter

  const handleIncrement = () => {
    // ability to add to counter
    changeCounter (counter + 1)
  }

  const handleDecrement = () => {
    // ability to decrease the counter number
    changeCounter (counter - 1)
  }

  // Rendering to the web page
  return (
    <div className="App">
      <h1>The Current Number is</h1>
      <h2>{counter}</h2>

      <button onClick={handleIncrement}>+1</button>
      
      {/* ability to stop decreasing the counter number */}
      <button onClick={handleDecrement} disabled={counter <= 0} >-1</button>
    </div>
  )
}

// exporting the function
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
