import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctComp from './FunctComp';
import ShowDate from './ShowDate'; 

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      date1: 'current',
      date2: 'yesterday'
    };
  }

  dClicked(type){
    console.log("onDateClicked");
    // this.setState()  
  }

  render() {
    console.log("STATE: ", this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"  
          onClick={() => {
            console.log("logo clicked"); 
            if(this.state.date1 === 'current') {
              this.setState({date1: 'yesterday'})
            }else{
              this.setState({date1: 'current'})
            }
          }}/>
          <h1 className="App-title">Welcome to React<ShowDate type={this.state.date1} onDateClicked={this.dClicked} color="red"/></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FunctComp id="fc"/>
        <p> yesterday as <ShowDate type={this.state.date2} onDateClicked={this.dClicked}/></p> // pasamos la funcion
      </div>
    );
  }
}

export default App;
