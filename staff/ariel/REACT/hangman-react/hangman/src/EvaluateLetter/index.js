import React, { Component } from 'react';
import './index.css';
//import SelectWord from '../SelectWord';


class EvaluateLetter extends Component {
    constructor(props){
        super(props);   // newWord(), incognitaArr, frutaArr, Letter(id)
        this.state = {
            incognita: this.props.incognitaArr,
            clicked: false,
            exists : false
        }

        //this.newWord() = this.newWord().bind(this);
        //this.checkLetter = this.checkLetter.bind(this);

    }

    checkLetter(letter){
        letter = this.props.id.toString().toLowerCase()
        let cont = 0;

        for (let j=0; j<this.props.frutaArr.length; j++){

            if (letter === this.props.frutaArr[j]){
                this.props.incognitaArr[j] = letter;
                cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
            };
        };
                
        if (cont!= 0) {    // ---> guess está en la fruta

            //if ( incognitaArr.join() === frutaArr.join() ) {

              //  return 'FELICITACIONES HAS GANADO!!!'

            //} else {

            this.setState({
                incognita: this.props.incognitaArr,
                clicked: true,
                exists: true
            })
    
            //};
        };
            
        if (cont == 0 ) {   // ---> guess NO está a fruta

            //lifes = lifes - 1;
            //$('.vidas').remove('<i class="fas fa-child"></i>');

            //$('.lifes').html(lifes);
            //$('#vidas').html(lifesArr);  

            //if (lifes == 0 ){
                
                //return $('#board').html('GAME OVER\n\nLa fruta era: ' + fruta);

            //} else {
            //console.log('La letra "' + x + '" no se encuentra en la palabra');
            this.setState.State({
                incognita: this.props.incognitaArr,
                clicked: true,
                exists: false
            })
                
        };
    };  
    

    render() {
        return (
          <div className="Incognita">
            
            {this.incognita}
            
          </div>
        );
    }
    
};

export default EvaluateLetter;

