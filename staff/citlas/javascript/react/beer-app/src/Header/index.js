import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      beer: null
    }
    
  }

// Hacer el componente header y mostrar/ocultar el 
// link "Go to list" (this.props.location)

  render() {
    return (
    
      <h3><Link to="/" >Beerlist</Link></h3>
    );
  }
}

export default Header;
