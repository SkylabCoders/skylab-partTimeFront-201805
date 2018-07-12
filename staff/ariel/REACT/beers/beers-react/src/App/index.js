import React, { Component } from 'react';
import BeerList from '../BeerList/';
import SearchList from '../Search/';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BeerDetail from "../BeerDetail/";
import About from '../About/';
import Navbar from '../NavBar';
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
        
        <Navbar/>
        
        <div className="content">

          <Route path="/About" exact component={About}/> 
          <Route path="/BeerList" exact component={BeerList}/>
          <Route path="/SearchList/:s" exact render = {(props) => {return <SearchList nameSearch={props.match.params.s}/> } }/>
          <Route path="/BeerDetail/:x" exact render = {(props) => {return <BeerDetail beerInfo={props.match.params.x}/> } }/>
          
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
