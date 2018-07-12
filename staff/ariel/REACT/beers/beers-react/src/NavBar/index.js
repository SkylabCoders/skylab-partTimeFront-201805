import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Search from '../Search';
import './index.css';

class Navbar extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
    
  }


  render() {
    return (

    <Router> 

      <header>

        <div className="headerLeft">

          <div className="title">
              <h1> SkyLab <br />BeeR</h1>
          </div>

          <div className="navegacion">

            <div className="about">
              <p><Link to="/About">About</Link></p> 
            </div>

            <div className="navlist">
              <p><Link to="/BeerList">Beer List</Link></p>
            </div>

          </div>

        </div>

        <div className="headerRight">
          <div>
            <Search />
          </div>
        </div>

      </header>
        


    </Router>
    );
  }
}

export default Navbar;
