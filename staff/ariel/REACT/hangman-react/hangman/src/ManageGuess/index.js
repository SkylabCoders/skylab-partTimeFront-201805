import React, { Component } from 'react';
import Letter from '../Letter';
import SelectWord from '../SelectWord';
// Método para seleccionar una palabra al inicio del juego

class ManageGuess extends Component {
  constructor(props){
    super(props);
    this.state = {
      //incognita: this.props.incongitaArr,
      incognita: <SelectWord />
    };

  } 

  getIncognita(fruta){      
           
    let incognitaArr = [];
    for (let k=0; k<fruta.length; k++){

      incognitaArr = " _ ";

    }

    return this.setState({incognita: incognitaArr})

  }; 



  render() {

    console.log(this.props)

    return (

      <div classname="Incognita">
        {this.state.incognitaArr}
      </div>

    )
  }
}

export default ManageGuess;
