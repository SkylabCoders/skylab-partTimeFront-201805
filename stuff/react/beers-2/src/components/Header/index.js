import React, { Component } from 'react'
import {Link} from 'react-router-dom';

const Header = function(props){
    return (
        <header>
            <Link to="/beer-list">Back to list</Link>
            {!props.user && <Link to="/signup">Register</Link>}
            {!props.user && <Link to="/login">Login</Link>}
            {props.user && (<span><span>{props.user.email}</span> - <span onClick={props.onLogout}>Logout</span></span>)}
        </header>
    );
}
export default Header;