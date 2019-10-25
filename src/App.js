import React from 'react';
import './App.css';

import NavBar from './components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee)

function App() {
  return (
   <div className="App">
      <NavBar />
      <div className="drop-shadow"></div>
      <div className="bgimg-1">
         <h1>JUSTIN WANG</h1>
      </div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>Coming Soon</div>
      <div className="bgimg-2"></div>
      <div style={{height: "200px", backgroundColor: "#FFF", textAlign: "center", lineHeight: "200px", fontSize: "36pt"}}>TBD</div>
      <div className="bgimg-1"></div>
    </div>
  );
}

export default App;
