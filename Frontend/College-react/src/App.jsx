// // import React from 'react';
// // import Card from './Component/Card';
// // import Navbar from './Component/navBar';


// // function App1() {
// //   return (
// //     <div>
// //       <Navbar/>
// //     </div>
// //   );
// // }

// // function Usestate(){
// //   function change(){
// //     console.log("Hello");
// //   }
// //   return(
// //     <div>
// //       <button onClick={change}>Click</button>
// //     </div>
// //   )
// // }

// import { useState } from 'react'
// import './App.css'

// function App() {
//   const [counter, setCounter] = useState(0)

//   const addValue = () => {
//     if (counter < 20) setCounter(counter + 1)
//   }

//   const removeValue = () => {
//     if (counter > 0) setCounter(counter - 1)
//   }

//   return (
//     <>
//       <h1>College React</h1>
//       <h2>Counter Value: {counter}</h2>
//       <button onClick={addValue} style={{
//           backgroundColor: "red",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}>Add Value</button><br />
//       <button onClick={removeValue} style={{
//           backgroundColor: "green",
//           color: "white",
//           padding: "10px 20px",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}>Remove Value</button>
//     </>
//   )
// }

// export default App


// import React from 'react'
// import Book from "./Component menu/Book";



// function App() {
//   return (
//     <div>
//       <Book />
//       <Book />
//       <Book />
//     </div>
//   )
// }

// export default App



// import React from "react";
// import "./App.css";
// import Book from "./component/Book/index.jsx";

// function App() {
//   return (
//     <div>
//       <nav className="navbar">
//         <h1>📚 Book Haven</h1>
//         <ul>
//           <li>Home</li>
//           <li>Subjects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>

//       <div className="book-section">
//         <Book
//           title="Physics for Beginners"
//           subject="Physics"
//           image="https://m.media-amazon.com/images/I/51eQW7F7N8L.jpg"
//         />
//         <Book
//           title="Mathematics Simplified"
//           subject="Maths"
//           image="https://m.media-amazon.com/images/I/61Nf2bRjSDL.jpg"
//         />
//         <Book
//           title="World History Essentials"
//           subject="History"
//           image="https://m.media-amazon.com/images/I/51z+5MB1pDL.jpg"
//         />
//         <Book
//           title="Introduction to Programming"
//           subject="Computer Science"
//           image="https://m.media-amazon.com/images/I/51FjK9bKwbL.jpg"
//         />
//       </div>
//     </div>
//   );
// }

// export default App;


import React from "react";
import "./App.css";
import Link1 from "./Component menu/Link1";

function App() {
  return (
    <div>
      <nav className="navbar">
        <h1>📚 Book Haven</h1>
        <ul>
          <li>Home</li>
          <li>Subjects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Link1></Link1>

     
   
    </div>
  );
}

export default App;