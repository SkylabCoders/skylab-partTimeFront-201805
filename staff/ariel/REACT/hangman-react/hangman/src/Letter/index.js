import React, { Component } from 'react';
import './index.css';
//import GenerateABC form '../GenerateABC';

class Letter extends Component {

  constructor(props){
    super(props);

    this.state = {
      clicked: props.clicked
    }

    this.checkLetter = this.checkLetter.bind(this)
   
  }
  
  checkLetter(){
    this.props.checkClicked(this.props.id)
  }

  render() {
    return (
      
      <button className="LetterBox" onClick={this.checkLetter}>

        {this.props.id}
  
      </button>

    )
  }
  
}

export default Letter;


