import React, { Component } from 'react';
import './index.css';


class Letter extends Component {

  constructor(props){
    super(props);

    console.log("LEtters Props: " + props)

    this.state = {
      id: '',
      clicked: false,
      nr: null,
      exists: false
    }

    this.onClickedLetter = this.onClickedLetter.bind(this)
  };

  onClickedLetter(){

    this.props.evaluateLetter(this.props.id, this.props.nr)
    
  };

 
  

  render() {
    return (
      

        <button className="LetterBox" onClick={
          this.onClickedLetter}> 

        <h1>{this.props.id}</h1>
        </button>

    

    )
  }
  
}

export default Letter;


// onClick={console.log('Letra clicada: ', this.props.id)} 