import React, { Component } from 'react';



class Game extends Component {
  constructor(props){
    super(props);

    this.state = {
      guessArr: this.props.guessArr,
      palabraArr: this.props.palabraArr,
      vidas: this.props.lifes,
      letter: '',
    };

    this.onStart = this.onStart.bind(this);
  } 


  onStart(){

  }

  onLetterClick(id){
      /*              
    let guess = newLetter;
    let palabraArr = this.props.palabraArr;
    let lifes = this.props.vidas;
    let incognitaF = this.props.incognitaArr;
    let cont = 0;

    for (var j=0; j<palabraArr.length; j++){

        if (guess === palabraArr[j]){
            incognitaF[j] = guess;
            cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
        };
    };
        
    if (cont!= 0) {    // ---> guess está en la fruta

        if ( incognitaF.join() === palabraArr.join() ) {

            return this.setState({incognita: palabraArr})
        } else {
            
          return this.setState({incognita: incognitaF})
        };
    };
    
    if (cont == 0 ) {   // ---> guess NO está 

      lifes = lifes - 1;

      if (lifes == 0 ){
          
        console.log('GAME OVER\n\nLa fruta era: ' + palabraArr);

      } 
        
      return   this.setState({vidas: lifes})

    }
    */

    let arrayNuevo=[];

    for ( var i= 0; i<3; i++){
      arrayNuevo[i] = id;
    }

    this.setState({palabraArr : arrayNuevo})
  };




  render() {

    console.log('Las props de Manage son: ', this.props)

    return (
      
      <div className="Incognita">
      <p>{this.props.guessArr}</p>
      </div>
    )
  }
}

export default Game;
