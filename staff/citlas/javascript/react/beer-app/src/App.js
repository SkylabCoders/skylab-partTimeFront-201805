import React, { Component } from 'react';
import './App.css';
import BeerList from './BeerList';
import About from './About';
import BeerDetail from './BeerDetail';
import Header from './Header';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      //beers: [
      //]
      id: 0,
      location: ''
    }
    this.setMyLocation = this.setMyLocation.bind(this);

  }

  setMyLocation(location1){
    console.log(location1)
    let location = Object.assign(location1)
    this.setState({location})
    
  }

  render() {
    return (
     //poner name, tagline y foto
     <Router>
       <div className="App">
       <header>
       {//console.log(this.location.pathname + 'de path')
       }
       {//console.log(this)
       }
         {this.state.location !== '/about' ? <Header /> : <p>no hay nada que mostrar</p>}
         
         
         <h3><Link to="/about" >About</Link></h3>
       </header>
        <h1>My favorite beers <br/> <Link className="test" to="/beer" >Go to beeeer</Link></h1>
        
          <div>
            {/*<Route path="/" exact component={BeerList} gettingLocation = {this.setMyLocation} />//path inicial*/}
            <Route  path='/' exact render={(props) => (
                  <BeerList {...props} gettingLocation = {this.setMyLocation} prueba ='asdadas' />
            )}/>

            <Route path="/beer/:id" exact component = {BeerDetail} />
            {/*<BeerDetail id={this.state.id}/>*/}
            <Route path="/about" exact component={About}/>

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
