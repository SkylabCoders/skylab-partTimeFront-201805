import React, { Component } from 'react';
import './index.css';
import GenerateABC from '../GenerateABC';
import StartGame from '../StartGame';
import Game from '../Game';

class App1 extends Component {
  constructor(props){
    super(props)

    this.onStart = this.onStart.bind(this)

  }

  onStart(newArr, newVidas){
     this.setState({
       guessArr: newArr,
       vidas: newVidas
     });
  }


  render() {
    return (
     
      <div>

        <div className="Upper">

          <StartGame onChange={this.onStart}/>

        </div>


        <div className="lower">
          
          <GenerateABC />
          
        </div>

      </div>
        
    );
  }
}

export default App1;
