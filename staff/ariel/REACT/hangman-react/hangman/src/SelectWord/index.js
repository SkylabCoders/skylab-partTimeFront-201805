import React, { Component } from 'react';
import './App.css';

class SelectWord extends Component {
  constructor(props){
    super(props);
    this.SelectWord = this.SelectWord.bind(this)
    this. frutas = ['manzana','banana','pera','fresa','cereza','anana','tomate','naranja','clementina','chirimoya','pomelo','melocoton', 'ciruela', 'lichi','melon', 'sandia', 'mango', 'papaya', 'higos', 'maracuya', 'guanabana' ];

  }

  selectWord(){               

    let indice = Math.round(Math.random()*20);
    let fruta = frutas[indice];
    var frutaArr = [];
    var incognitaArr = [];


    for (let k=0; k<fruta.length; k++){

      frutaArr[k]=x[k];
      incognitaArr = " _ ";

    }

    return incognitaArr
  }; 



  render() {
    return (

      <div className="Palabra">
        <p>{incognitaArr}</p>
      </div>
    );
  }
}

export default SelectWord;
