import React, { Component } from 'react';
import './App.css';

class GetIncognita extends Component {
  constructor(props){
    super(props);
    this.state = {
      incognita:[],
    };
    this.getIncognita = this.getIncognita.bind(this)
   
  }

  getIncognita(fruta){               

    for (let k=0; k<fruta.length; k++){

      incognitaArr = " _ ";

    }

    return this.setState({incognita: incognitaArr})

  }; 



  render() {
    return (

      <div className="Palabra">
        <p>{this.state.incognita}</p>
      </div>
      
    );
  }
}

export default GetIncognita;
