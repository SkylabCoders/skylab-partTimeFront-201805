import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Discover from './Discover';
import Item from './Item';

class App extends Component {
 

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Movie app</h1>
        </header>
        {/*discover y item*/}
        <p className="App-intro">
          
          
         
        </p>
        <div>
          <Route path="/" exact component={Discover}/>{/*//path inicial*/}
          <Route path="/item/:id" exact component={Item}/>{/*//mete un componente props.match.params.id dentro de item*/}
          </div>
        <div>{/*
         <Route path="/" exact component={BeerList}/>
            <Route path="/beer/:id" exact render={(props)=>{return <BeerDetail id={props.match.params.id}/>}}/>
          
            <Route path="/about" exact component={About}/>
        */}
           

          </div>
      </div>
      </Router>
    );
  }
}

export default App;
