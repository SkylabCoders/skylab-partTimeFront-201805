import React, { Component } from 'react';
import './index.css';
import EvaluateLetter from '../EvaluateLetter'

class Letter extends Component {

  constructor(props){
    super(props);

    this.state = {
      id: '',
      clicked: false,
      exists: false
    }

  }




  render() {
    return (
      
      <button className="LetterBox" onClick={()=>{
        <EvaluateLetter letra={this.props.id} />
        console.log('Letra clickeada: ', this.props.id)
      }}> 

      <h1>{this.props.id}</h1>

      </button>

    )
  }
  
}

export default Letter;


// onClick={console.log('Letra clicada: ', this.props.id)} 