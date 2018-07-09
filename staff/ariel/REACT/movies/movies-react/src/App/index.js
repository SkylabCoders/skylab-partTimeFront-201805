import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Discovery from '../Discovery/'
import Item from '../Item/'

class App extends Component {
  


  render() {
    return (
      <Router> 
      <div className="App">
        
        <header>
          <h1> BROWSE ONE MOVIE</h1>

          <div>
            <p><Link to="/Discovery">Go to Discovery</Link></p> 
          </div>

        </header>
        
          <div>
            <Route path="/Discovery" exact component={Discovery}/>
            {/*<Route path="/item/:x" exact component={Item}/>  --> en este caso en Item sí necesitaría el props.match.params y el api_key se lo paso en el mismo Item*/}
            <Route path="/item/:x" exact render = {(props) => { return <Item movieId={props.match.params.x}/> } }/> 
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
