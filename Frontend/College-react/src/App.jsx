// import React from 'react';
// import Card from './Component/Card';
// import Navbar from './Component/navBar';


// function App1() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   );
// }

// function Usestate(){
//   function change(){
//     console.log("Hello");
//   }
//   return(
//     <div>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0) setCounter(counter - 1)
  }

  return (
    <>
      <h1>College React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
