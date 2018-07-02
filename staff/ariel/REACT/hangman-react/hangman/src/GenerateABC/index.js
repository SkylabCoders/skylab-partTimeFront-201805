import React, { Component } from 'react';
import App from '../App/';
import Letter from '../Letter/';
import './index.css';

class GenerateABC extends Component {
  constructor(props){
    super(props);
    this.state = {
      letters:[
        {id: "A", clicked: false, exists: false},
        {id: "B", clicked: false, exists: false},
        {id: "C", clicked: false, exists: false},
        {id: "D", clicked: false, exists: false},
        {id: "E", clicked: false, exists: false},
        {id: "F", clicked: false, exists: false},
        {id: "G", clicked: false, exists: false},
        {id: "H", clicked: false, exists: false},
        {id: "I", clicked: false, exists: false},
        {id: "J", clicked: false, exists: false},
        {id: "K", clicked: false, exists: false},
        {id: "L", clicked: false, exists: false},
        {id: "M", clicked: false, exists: false},
        {id: "N", clicked: false, exists: false},
        {id: "O", clicked: false, exists: false},
        {id: "P", clicked: false, exists: false},
        {id: "Q", clicked: false, exists: false},
        {id: "R", clicked: false, exists: false},
        {id: "S", clicked: false, exists: false},
        {id: "T", clicked: false, exists: false},
        {id: "U", clicked: false, exists: false},
        {id: "V", clicked: false, exists: false},
        {id: "W", clicked: false, exists: false},
        {id: "X", clicked: false, exists: false},
        {id: "Y", clicked: false, exists: false},
        {id: "Z", clicked: false, exists: false},
      ]
    }
  };

  evaluateLetter(id){
    
  }

  render() {
    return (
      
      <div className="KeyBoard">

        {this.state.letters.map((e) => {

          return <Letter 
            key={e.id} 
            id={e.id}
            clicked={e.clicked}
            exists={e.exists}
            evaluateLetter= {this.checkClicked}
          />

        })}

      </div>

    )
  }
  
}

export default GenerateABC;


