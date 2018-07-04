import React, { Component } from 'react';
import './index.css';
import GenerateABC from '../GenerateABC';
import ManageGuess from '../ManageGuess';
import SelectWord from '../SelectWord'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      incognita: ['P','R','E','S','S',' ','S','T','A','R','T'],
      vidas: 0
    }

  }



  render() {
    return (
     
      <div>

        <div className="Upper">

          <SelectWord startWord={this.state.incognita}/>

        </div>


        <div className="lower">
          
          <GenerateABC />
          
        </div>

      </div>
        
    );
  }
}

export default App;
