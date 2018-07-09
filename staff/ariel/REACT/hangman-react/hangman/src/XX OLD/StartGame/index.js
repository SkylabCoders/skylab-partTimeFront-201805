import React, { Component } from 'react';
import './index.css';
import Game from '../Game';
import EvaluateLetter from '../EvaluateLetter'

class StartGame extends Component {

  constructor(props){
    super(props);

    this.state ={
      palabraArr: [],
      guessArr: ['P','R','E','S','S',' ','S','T','A','R','T'],
      vidas: 0,

    }

    this.newWord = this.newWord.bind(this);

  }

  newWord(){
    const frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];
    const indice = Math.round(Math.random()*20);
    const fruta = frutas[indice];
    let frutaArr = [];
    let incognitaArr = [];

    for (let k=0; k<fruta.length; k++) {
      frutaArr[k] = fruta[k];
      incognitaArr[k] = " _ ";
    };

    
    this.setState({
      guessArr: incognitaArr,
      vidas: Math.round(incognitaArr.length*1.5),
      palabraArr: frutaArr
    })

    //this.props.onClick(this.state.guessArr, this.state.vidas);


  }



  render() {

    console.log('las props de SelectWord son: ', this.props)

    return (

      <div>
        <div className="Button">
          <button onClick={()=>{ 
            this.newWord();
            <EvaluateLetter palabra={this.state.palabraArr} lifes={this.props.vidas} guessArr={this.state.iguessArr}/>
          }}>START</button>
        </div>

        <div className="Vidas">
          <p>Tienes: {this.state.vidas} vidas</p>
        </div>

        <Game guessArr={this.state.guessArr} palabraArr={this.state.palabraArr} lifes={this.props.vidas}/>

      </div>   

    );
  }
}

export default StartGame;
