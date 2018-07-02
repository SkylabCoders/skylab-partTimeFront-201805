import React, { Component } from 'react';
import './App.css';

class GenerateABC extends Component {
  constructor(props){
    super(props);
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.generateABC = this.generateABC.bind(this);

  };

  generateABC(){

    for(var i=0 ; i<this.letters.length; i++){
      <div className="LetterBox" data-letter={this.letters[i]}>
        <p>{this.letters[i]}</p>
      </div>
    }

  }


  render() {
    return (
      <div className="Abc">

        {generateABC()}    
      
      </div>

    );
  }
  
}

export default GenerateABC;


