import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom'

function Header(props){
    return (
        <header>
            <NavLink to="/beer-list" activeStyle={{display: 'none'}}>Beer List</NavLink>
            &nbsp; 
            <NavLink to="/about" activeStyle={{display: 'none'}}>About</NavLink>
        </header>
    )
}

export default Header;