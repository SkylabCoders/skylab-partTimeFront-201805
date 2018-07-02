import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowDate from './ShowDate.js';

class App extends Component {
  constructor(props){

    super(props);
    this.state = {
      date: 'yesterday',
      color:'blue',
      font1: '16px',
      font2: '25px'
    }

  }

  dClicked () {
    console.log('Hola, ya me clikaron!')
  }


  render() {

      console.log('STATE: ', this.state);
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" 
            onClick={()=>{

              if (this.state.date==='current'){
                this.setState({date:'yesterday', color:'white'})
              } else if(this.state.date==='yesterday'){
                this.setState({date:'current', color:'blue'})
                }
            }
        }/>
          <h1 className="App-title">Welcome to React</h1><p><ShowDate onDateClicked={this.dClicked} font={this.state.font} color={this.state.color} type={this.state.date}/></p>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

    );

  }

}

export default App;
