import React from 'react';
import Card from './Component/Card';
import Navbar from './Component/navBar';

function App1() {
  return (
    <div>
      <Navbar/>
      <br />
      <Card name="Adarsh" age='19'/>
      <br />
      <Card name="Raj" age='20'/>
      <br />
      <Card name="Vaibhav" age='10'/>
    </div>
  );
}

export default App1;
