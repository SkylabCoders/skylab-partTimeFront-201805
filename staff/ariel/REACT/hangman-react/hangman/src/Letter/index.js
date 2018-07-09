import React, { Component } from 'react';
import './index.css';


class Letter extends Component {

  constructor(props){
    super(props);



    this.state = {
      id: '',
      clicked: false,
      exists: false
    }

    this.onClickedLetter = this.onClickedLetter.bind(this)
  }

  onClickedLetter(){

    this.props.evaluateLetter(this.props.id)

  }

  

  render() {
    return (
      <div className="LetterBox">
        <button className="LetterBox" onClick={this.onClickedLetter}> 

        <h1>{this.props.id}</h1>
        <h1>{this.props.fruta}</h1>
        </button>

    

      </div>
    )
  }
  
}

export default Letter;


// onClick={console.log('Letra clicada: ', this.props.id)} 