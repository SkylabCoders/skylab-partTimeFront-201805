import React, { Component } from 'react';
import './index.css';


class SelectWord extends Component {

  constructor(props){
    super(props);

    this.state ={
      incognita: this.props.startWord,
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
      incognita: incognitaArr,
      vidas: Math.round(incognitaArr.length*1.5)
    })

  }

    

  render() {



    return (

      <div>
        <div className="Button">
          <button onClick={this.newWord}>START</button>
        </div>
        <div className="Vidas">
          <p>Tienes: {this.state.vidas} vidas</p>
        </div>

        <div className="Incognita">
          <p>{this.state.incognita}</p>
        </div>

      </div>   

    );
  }
}

export default SelectWord;
