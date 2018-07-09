import React, { Component } from 'react';
import './index.css';
import Letter from '../Letter/'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      guessArr: ['P','R','E','S','S',' ','S','T','A','R','T'],
      vidas: null,
      palabraArr: [],
      letters:[
        {id: "A", clicked: false, exists: false},
        {id: "B", clicked: false, exists: false},
        {id: "C", clicked: false, exists: false},
        {id: "D", clicked: false, exists: false},
        {id: "E", clicked: false, exists: false},
        {id: "F", clicked: false, exists: false},
        {id: "G", clicked: false, exists: false},
        {id: "H", clicked: false, exists: false},
        {id: "I", clicked: false, exists: false},
        {id: "J", clicked: false, exists: false},
        {id: "K", clicked: false, exists: false},
        {id: "L", clicked: false, exists: false},
        {id: "M", clicked: false, exists: false},
        {id: "N", clicked: false, exists: false},
        {id: "O", clicked: false, exists: false},
        {id: "P", clicked: false, exists: false},
        {id: "Q", clicked: false, exists: false},
        {id: "R", clicked: false, exists: false},
        {id: "S", clicked: false, exists: false},
        {id: "T", clicked: false, exists: false},
        {id: "U", clicked: false, exists: false},
        {id: "V", clicked: false, exists: false},
        {id: "W", clicked: false, exists: false},
        {id: "X", clicked: false, exists: false},
        {id: "Y", clicked: false, exists: false},
        {id: "Z", clicked: false, exists: false},
      ]
    }

    this.onLetterClick = this.onLetterClick.bind(this);

  }

  newWord(){
    const frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];
    const indice = Math.round(Math.random()*20);
    const fruta = frutas[indice];
    let frutaArr = [];
    let incognitaArr = [];
    let newVidas = null;

    for (let k=0; k<fruta.length; k++) {
      frutaArr[k] = fruta[k];
      incognitaArr[k] = " _ ";
    };
    
    newVidas = Math.round(incognitaArr.length*1.5);

    console.log('Elección de fruta: ' + frutaArr)
    return this.setState({
      guessArr: incognitaArr,
      vidas: newVidas,
      palabraArr: frutaArr
    })

  }

  onLetterClick(letter){             
    let guess = letter;
    let fruta = this.state.palabraArr
    let lifes = this.state.vidas;
    let incognitaArr = this.state.guessArr;
    let cont = 0;

    console.log('la fruta en en la función es: ' + fruta);
    console.log('las vidas en en la función es: ' + lifes);
  
    for (var j=0; j<fruta.length; j++){
  
        if (guess.toLowerCase() === fruta[j].toLowerCase()){
            incognitaArr[j] = guess;
            cont = cont+1;             // ---> indica si se ha acertado (>0) o no (=0). 
        };
    };
        
    if (cont!== 0) {    // ---> guess está en la fruta
  
        if ( incognitaArr.join() === fruta.join() ) {
  
            return console.log('FELICITACIONES HAS GANADO')
        } 
            
        return this.setState({guessArr: incognitaArr})

    };
    
    if (cont === 0 ) {   // ---> guess NO está 
  
      lifes = lifes - 1;
  
        if (lifes === 0 ){
            
          console.log('GAME OVER\n\nLa fruta era: ' + fruta);
    
        } 
        
      return   (
        console.log('Lo siento la letra ' + guess + ' no se encuentra en la palabra'),
        this.setState({vidas: lifes})
      )
  
    }

  };

  render() {
    return (
     
      <div>

        <div className="Upper">

          <div className="Button">
            <button onClick={()=>{ 
              this.newWord();
             }}>START
            </button>
          </div>

          <div className="Vidas">
            <p>Tienes: {this.state.vidas} vidas</p>
          </div>

          <div className="GuessWord">

            <h2>{this.state.guessArr}</h2>

          </div>



        </div>


        <div className="lower">
          
          <div className="KeyBoard">

          <h1>{this.state.frutaArr}</h1>

            {this.state.letters.map((e) => {
              return(
              
                

                <Letter         
                    key={e.id} 
                    id={e.id}
                    clicked={e.clicked}
                    exists={e.exists} 
                    
                    evaluateLetter={this.onLetterClick}
                /> 
          

              
              )

            })}
           
          </div>

        </div>

      </div>
        
    );
  }
}

export default App;
