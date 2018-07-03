import React, { Component } from 'react';
import './index.css';
import EvaluateLetter from '../EvaluateLetter/';

class Letter extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: props.id,
      clicked: false,
      exists: false
    }

    this.clickedLetter = this.clickedLetter.bind(this)
   
  }
  
  clickedLetter(t){
    this.props.clicked = true


  }

  render() {
    return (
      
      <button className="LetterBox" onClick={() =>
        console.log('Click en la letra: ' + this.props.id)
      
      
        /*<EvaluateLetter 

          onClickLetter={this.checkLetter}
          id={this.props.id}
          clicked={this.props.clicked}
          exists={this.props.exists}
        /> */
        }> 

      <p>{this.props.id}</p>

      </button>

    )
  }
  
}

export default Letter;


