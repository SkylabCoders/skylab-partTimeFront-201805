import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.css';
import BeerList from '../BeerList/';
import BeerDetail from '../BeerDetail/';
import About from '../About/';
import Header from '../Header/';

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        // used navLink activeStyle instead
        // currentPage: window.location.pathname
      }
  }

  render() {
    return (
      // para poder usar links en cualquier parte ponemos router
      <Router>  
        <div className="App">
          <Header />
        
          <div>
            <Route path="/beer-list" exact component={BeerList} /> 
            <Route path="/about" exact component={About} />
        
            {/* 
              render={ () => { return ... } para renderizar un componente con parámetros 
              exact -> oara que cumpla exactamente con la url, no solo que contenga
            */}

            {/* :beerId ->indica que es un parámetro dinámico, tomará el valor que le venga
            los props entran como argumento en la función */}
            {/* <Route path="/beer/:beerId" exact render={ (props) => { return <BeerDetail beerId={props.match.params.beerId} /> }} /> */}
            <Route path="/beer/:beerId" exact component={BeerDetail} />
            <Route path="/search-beer/:searchValue" exact component={BeerDetail} />
          </div>

          <footer>Thanks to punkapi.com</footer>
        </div>
      </Router>  
    );
  }
}

export default App;
