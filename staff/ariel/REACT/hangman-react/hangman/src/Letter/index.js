import React, { Component } from 'react';
import './index.css';
import ManageGuess from '../ManageGuess'

class Letter extends Component {

  constructor(props){
    super(props);

    this.state = {
      //id: id,
      clicked: false,
      exists: false
    }
  }



  render() {
    return (
      
      <button className="LetterBox" onClick={() =>
      //console.log('Click en la letra: ' + this.props.id);

        <ManageGuess id={this.props.id} />

      }>

      <h1>{this.props.id}</h1>

      </button>

    )
  }
  
}

export default Letter;


