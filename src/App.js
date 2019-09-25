import React from 'react';
import './App.css';

import NavBar from './components/NavBar';

function App() {
  return (
   <div className="App">
      <NavBar />
      // <div className="drop-shadow"></div>
      <div className="bgimg-1">
         <span>JUSTIN WANG</span>
      </div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>Hello</div>
      <div className="bgimg-2"></div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>Goodbye</div>
      <div className="bgimg-1"></div>
    </div>
  );
}

export default App;
