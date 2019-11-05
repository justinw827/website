import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import Canvas from './components/Canvas';
import logo from './images/logo.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab )

function App() {
  return (
   <div className="App">
      <NavBar />
      <div className="bgimg-1">
         <img src={logo} alt="JUSTIN WANG" height="250" width="250"/>
      </div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>Coming Soon</div>
      <div className="bgimg-2"></div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>TBD</div>
      <Canvas />
    </div>
  );
}

export default App;
