import React, { Component } from 'react';
import './index.css';



class EvaluateLetter extends Component {
    constructor(props){
        super(props);   // incognitaArr, frutaArr, Letter(id)
        
        this.state = {
            id: '',
            incognita: [],
            palabra: this.props.palabra,
            clicked: false,
            exists : false
        }

    }


  onLetterClick(){             
  let guess = this.props.id;
  let palabraArr = this.props.palabraArr;
  let lifes = this.props.vidas;
  let incognitaF = this.props.incognitaArr;
  let cont = 0;
/*
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
    arrayNuevo[i] = guess;
  }

  

  this.setState({incognita : arrayNuevo})
};




    render() {


        
        return (
        
        <p>{this.state.incognita}</p>

                  
        )
    }
    
};

export default EvaluateLetter;

