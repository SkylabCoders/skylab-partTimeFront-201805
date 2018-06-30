import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FunctComp from './FunctComp';
import ShowDate from './ShowDate';

class MyApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      date1: 'current',
      date2: 'yesterday',
      fCompName: '-'
    };

    this.myVar = "my vaaar";

    // Indico que cuando se ejecute esta función (dClicked) se 
    // utilice el "this" que le estoy pasando
    this.dClicked = this.dClicked.bind(this);
  }

  dClicked(type){
    console.log("onDateClicked",type);
    this.setState({fCompName: type, date1:'yesterday', date2:'current'});
  }

  render() {
    console.log("STATE: ",this.state);
    return (
      <div className="App app2">
        <header className="App-header">
          <img 
            src={logo} 
            className="App-logo" 
            alt="logo" 
            onClick={()=>{ 
              console.log("logo clicked");
              this.setState({date1 : 'yesterday'} )
            }}
          />
          <h1 className="App-title">Welcome to {this.props.subject} on <ShowDate type={this.state.date1} color='red' onDateClicked={this.dClicked}/></h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <FunctComp id="fc" id2={this.state.fCompName} id3="fc3"/>
        <p>Yesterday was <ShowDate type={this.state.date2}/></p>
      </div>
    );
  }
}

const name = "my name";

export {
  name,
  MyApp
};
