import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import firebase from 'firebase';

import BeerList from './BeerList';
import BeerDetail from './BeerDetail';
import Home from './Home';
import Search from './Search';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
     
    }

    const config = {
      apiKey: "AIzaSyBNmjDdwiWmi3N-IfSBCbOZdPR1tga8lN8",
      authDomain: "skylabbeers.firebaseapp.com",
      databaseURL: "https://skylabbeers.firebaseio.com",
      projectId: "skylabbeers",
      storageBucket: "skylabbeers.appspot.com",
      messagingSenderId: "1015076628891"
    };
    firebase.initializeApp(config);
    const db = firebase.firestore();

    // db.collection("favourites").add({
    //     beerId: 3,
    //     date: new Date()
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });

    // db.collection("favourites").get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //       console.log(`${doc.id} => }`,doc.data());
    //   });
    // });
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
