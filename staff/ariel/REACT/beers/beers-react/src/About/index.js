import React, { Component } from 'react';
import BeerList from '../BeerList/';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import BeerDetail from "../BeerDetail/";
import './index.css';

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
    
  }


  render() {
    return (

    <h1>THIS IS ABOUT'S PAGE</h1>


    );
  }
}

export default About;
