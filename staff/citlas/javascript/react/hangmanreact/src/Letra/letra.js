import React, { Component } from 'react';

import './letra.css';


class Letra extends Component {

  createAbc(){
    var abecedario = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    for(var i=0 ; i<abecedario.length ; i++){
      var letter = abecedario[i];
     // document.getElementsByClassName('container').appendChild('<div id="letter-'+letter+'" class="letter"><p>'+letter+'</p></div>')
    }
    console.log('hola')
  }

  render() {
    this.createAbc()
    return (
      <div className="letra container">
        <p>aqui van las letras</p>
       
      </div>
    );
  }
}

export default Letra;
