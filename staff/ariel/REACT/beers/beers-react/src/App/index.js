import React, { Component } from 'react';
import BeerList from '../BeerList/';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BeerDetail from "../BeerDetail/";
import About from '../About/';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
    
  }


  render() {
    return (

    <Router> 
      <div className="App">
        
        <header>
          <div className="title">
             <h1> This is my header </h1>
          </div>
          <div className="About">
            <p><Link to="/About">Go to About</Link></p> 
          </div>
          <div className="List">
            <p><Link to="/BeerList">Go to Beer List</Link></p>
          </div>

        </header>
        
          <div>
            <Route path="/About" exact component={About}/> 
            <Route path="/BeerList" exact component={BeerList}/>
            <Route path="/BeerDetail/:x" exact render ={(props) => {return <BeerDetail beerInfo={props.match.params.x}/> } }/>
           

          </div>

        
        
        <footer>
          <p>This is my Footer</p>
        </footer>

      </div>

    </Router>
    );
  }
}

export default App;
