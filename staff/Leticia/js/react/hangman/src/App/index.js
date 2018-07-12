import React, { Component } from 'react';
import './index.css';
import Letter from '../Letter/';

class App extends Component {
  
  onChooseLetter(letter) {
    console.log(letter)
  }

  render() {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lettersList = letters.split('');

    return (
      <div className="letter-list">
        {lettersList.map(e => <Letter key={e} id={e} chooseLetter={this.onChooseLetter} />)}
      </div>
    );
  }
}

export default App;
