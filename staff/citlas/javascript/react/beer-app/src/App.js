import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import BeerDetail from './BeerDetail';
import SearchBeer from './SearchBeer';
import Header from './Header';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: 0,
      location: ''
    }
  }

  render() {

    return (
     //poner name, tagline y foto
    <Router>
      <div className="App">
        <Header />
        <h1>My favorite beers <br/> <Link className="test" to="/beer" >Go to beeeer</Link></h1>
        <div>
          <Switch>
            <Route path="/beer/:id" component = {BeerDetail} />
            <Route path="/search-beer/:searchString" component = {SearchBeer} />
            <Route path="/about" component={About}/>
            <Route path='/' exact render={(props) => 
                <Home {...props} />
            }/>
            <Route path="*" render={()=>{ return <div>ERROR 404 - Aquí no hay nada</div>}} />
          </Switch>
        </div>
        <footer>
          <p>this is my footer </p>
        </footer>
      </div>
    </Router>
    );
  }
}

export default App;
