import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import firebase from 'firebase';

import Header from '../Header';
import BeerDetail from '../BeerDetail';
import Home from '../Home';
import Search from '../Search';
import Register from '../Accounts/Register';
import Login from '../Accounts/Login';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null
    }

    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('user: ', user);
        const myUser = {
          email: user.email
        }

        this.setState({user : myUser});
      } else {
        console.log("Bye bye");
      }
    });
  }

  logout(){
    firebase.auth().signOut().then(() => {
      this.setState({user: null});
    }, (error) => {
      console.log("ERROR logout");
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div className="App">
          <Header user={user} onLogout={this.logout}/>
          <h1>My favorite beers <Link to="/beer/2">Go to beeeer</Link></h1>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/beer-list" component={Home}/>
              <Route path="/beer/:b" component={BeerDetail} />
              <Route path="/search/:searchString" component={Search} />
              <Route path="/signup" component={Register}/>
              <Route path="/login" component={Login}/>
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
