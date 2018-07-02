import React, { Component } from 'react';
//import logo from './logo.svg';
import './index.css';
import GetIncognita from '../GetIncognita'   // en i0 recibe incognita, i1 al encontrar un match debe actualizar el estado del GetIncognita


class EvaluateLetter extends Component {
  constructor(props){
    super(props)

    this.state = {
      this.props.incognitaArr   // estado inicial es el 
    }

  }

  $('.letterBox').on('click', function() {

    guess = $('.letterBox').click(function(){
        console.log($(this).attr("data-letter"))   // ???? --> Cómo leer atributo en REACT?
    })



    evaluateLetter(guess);

    function evaluateLetter(x) {
        var cont = 0;

        for (var j=0; j<frutaArr.length; j++){

            if (x === frutaArr[j]){
                incognitaArr[j] = x;
                cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
            };
        };
            
        if (cont!= 0) {    // ---> guess está en la fruta

            if ( incognitaArr.join() === frutaArr.join() ) {

                return $('#board').html('FELICITACIONES HAS GANADO!!!');

            } else {
                $('#board').html('Felicitaciones la letra "' + x + '" está en la palabra.');
                $('.incognita').html(incognitaArr);
                return lifes
            };
        };
        
        if (cont == 0 ) {   // ---> guess NO está a fruta

            lifes = lifes - 1;
            $('.vidas').remove('<i class="fas fa-child"></i>');

            //$('.lifes').html(lifes);
            $('#vidas').html(lifesArr);  

            if (lifes == 0 ){
                
                return $('#board').html('GAME OVER\n\nLa fruta era: ' + fruta);

            } else {
                $('#board').html('La letra "' + x + '" no se encuentra en la palabra');
                return lifes
            };
        };  
     
        return lifes
    };

        


});












  render() {
    return (
      <div className="App">
        
        
        
      </div>
    );
  }
}

export default EvaluateLetter;
