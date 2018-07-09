import React, { Component } from 'react';
import './index.css';
import Letter from '../Letter/'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      guessArr: ['P','R','E','S','S',' ','S','T','A','R','T'],
      fruit: '',
      vidas: null,
      palabraArr: [],
      consola:'',
      letters:[
        {id: "A", nr:0, clicked: false, exists: false},
        {id: "B", nr:1, clicked: false, exists: false},
        {id: "C", nr:2, clicked: false, exists: false},
        {id: "D", nr:3, clicked: false, exists: false},
        {id: "E", nr:4, clicked: false, exists: false},
        {id: "F", nr:5, clicked: false, exists: false},
        {id: "G", nr:6, clicked: false, exists: false},
        {id: "H", nr:7, clicked: false, exists: false},
        {id: "I", nr:8, clicked: false, exists: false},
        {id: "J", nr:9, clicked: false, exists: false},
        {id: "K", nr:10, clicked: false, exists: false},
        {id: "L", nr:11, clicked: false, exists: false},
        {id: "M", nr:12, clicked: false, exists: false},
        {id: "N", nr:13, clicked: false, exists: false},
        {id: "O", nr:14, clicked: false, exists: false},
        {id: "P", nr:15, clicked: false, exists: false},
        {id: "Q", nr:16, clicked: false, exists: false},
        {id: "R", nr:17, clicked: false, exists: false},
        {id: "S", nr:18, clicked: false, exists: false},
        {id: "T", nr:19, clicked: false, exists: false},
        {id: "U", nr:20, clicked: false, exists: false},
        {id: "V", nr:21, clicked: false, exists: false},
        {id: "W", nr:22, clicked: false, exists: false},
        {id: "X", nr:23, clicked: false, exists: false},
        {id: "Y", nr:24, clicked: false, exists: false},
        {id: "Z", nr:25, clicked: false, exists: false},
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

    return this.setState({
      guessArr: incognitaArr,
      vidas: newVidas,
      palabraArr: frutaArr,
      fruit: fruta
    })

  }

  onLetterClick(letter,nr){             
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
        
    if (cont!== 0 && incognitaArr.join().toLowerCase() === fruta.join().toLowerCase() ) {    // ---> guess está en la fruta
  

      console.log("IncognitaARR: ", incognitaArr.join().toLowerCase())
      console.log("FrutaARr: ", fruta.join().toLowerCase())

      return this.setState({consola:"FELICITACIONES HAS GANADO"})
    } 
    
    if (cont!== 0 && incognitaArr.join().toLowerCase() !== fruta.join().toLowerCase() ) { 

        return this.setState({
          guessArr: incognitaArr, 
          consola:'BRAVO LA LETRA "'+ guess +'" ESTÁ EN LA PALABRA',
          //letters[nr].clicked: true,
          //letters[nr].exists: true,
          })

    };
    
    if (cont === 0 ) {   // ---> guess NO está 
  
      lifes = lifes - 1;
  
        if (lifes === 0 ){
            
          console.log('GAME OVER\n\nLa fruta era: ' + fruta);
           return this.setState({consola: "GAME OVER\n\nLa fruta era: '" + this.state.fruit.toUpperCase()+"'." })
    
        } 
        
      return   (
        console.log('Lo siento la letra ' + guess + ' no se encuentra en la palabra'),
        this.setState({vidas: lifes, consola: 'Lo siento la letra ' + guess + ' no se encuentra en la palabra'})
      )
  
    }

  };

  render() {
    return (
     
      <div>

        <div className="Upper">

          <div className="Upper-up">
            <div className="Button">
              <button onClick={()=>{ 
                this.newWord();
              }}>START
              </button>
            </div>

            <div className="Vidas">
              <p>Tienes: {this.state.vidas} vidas</p>
            </div>
          </div>
          <div className="Upper-low">

            <div className="GuessWord">
              <h2>{this.state.guessArr}</h2>
            </div>

            <div className="Console">
              <h4>{this.state.consola}</h4>
            </div>

          </div>



        </div>


        <div className="lower">
          
          <div className="KeyBoard">

            {this.state.letters.map((e) => {
              return(
              
                

                <Letter         
                    key={e.id} 
                    id={e.id}
                    nr={e.nr}
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
