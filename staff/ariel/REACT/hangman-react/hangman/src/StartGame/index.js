import React, { Component } from 'react';
//import logo from './logo.svg';


class StartGame extends Component {
  constructor(props){
    super(props);



  }



  render() {
    return (
      <div className="Start-Game">
        
        <button onClick={()=>{<GenerateABC/> <SelectLetter /> <GetIncognita />}}> New Game</button>
        
      </div>
    );
  }
}

export default StartGame;
