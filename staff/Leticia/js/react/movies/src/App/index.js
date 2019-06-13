import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import Discover from '../Discover/';
import Item from '../Item/';

class App extends Component {
  render() {
    return (

      <Router>  
        <div className="App">
          <h1>Movie discovery</h1>
            <Route path="/" exact component={Discover} /> 
            <Route path="/item/:movieId" component={Item} />
        </div>
      </Router>  
    );
  }
}

export default App;
