import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import './index.css';

function Header (props){
// Hacer el componente header y mostrar/ocultar el 
// link "Go to list" (props.location)
  const { location } = props;

  return (
    <header>
      {location.pathname !== '/' ? <h3><Link to="/" >Beerlist</Link></h3> : null}
      {location.pathname !== '/about' && <h3><Link to="/about" >About</Link></h3>}
    </header>
  );
}

export default withRouter(Header);
