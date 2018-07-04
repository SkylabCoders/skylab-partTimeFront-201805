import React, { Component } from 'react';
import './index.css';


class SelectWord extends Component {

  constructor(props){
    super(props);

    this.state ={
      incognita: this.props.startWord,

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

    
    this.setState({incognita: incognitaArr})

  }

    

  render() {
    return (

      <div>
        <div className="Button">
          <button onClick={this.newWord}>START</button>
        </div>

        <div className="Incognita">
          <p>{this.state.incognita}</p>
        </div>

      </div>   

    );
  }
}

export default SelectWord;
