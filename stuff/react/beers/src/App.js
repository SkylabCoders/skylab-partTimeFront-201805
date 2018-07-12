import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import Home from './Home';
import Search from './Search';

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
            <Link to="/beer-list">Back to list</Link>
          </header>
          <h1>My favorite beers <Link to="/beer/2">Go to beeeer</Link></h1>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/beer-list" component={BeerList}/>
              <Route path="/beer/:b" component={BeerDetail} />
              <Route path="/search/:searchString" component={Search} />
              <Route path="*" component={Home}/>
            </Switch>
          <footer>
            <p>this is my footer</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
