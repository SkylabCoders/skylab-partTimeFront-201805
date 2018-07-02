import React, { Component } from 'react';

import './index.css';


class SelectWord extends Component {

  constructor(props){
    super(props);
    this.state = {
      incognita: []
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

    return incognitaArr

  }
    

  render() {
    return (

      <div className="Incognita">

        <p>{this.newWord()}</p>
       

      </div>

    );
  }
}

export default SelectWord;
