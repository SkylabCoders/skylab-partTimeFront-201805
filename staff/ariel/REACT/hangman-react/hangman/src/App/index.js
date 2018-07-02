import React, { Component } from 'react';
import './App.css';
import GenerateABC from '../GenerateABC/';
import GetIncognita from '../SelectWord/';
import StartGame from '../StartGame/';

class App extends Component {
  render() {
    return (
      <div className="App">



   
        <div className="Upper">
          <StartGame />
          <GetIncognita />
        </div>

        <div className="lower">
          <GenerateABC />
        </div>
        
      </div>
    );
  }
}

export default App;
