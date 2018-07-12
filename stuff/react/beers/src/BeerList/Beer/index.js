import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Beer(props){
    return (
      <div className="beer">
        <Link to={`/beer/${props.id}`}><img src={props.image}/></Link>
        <div>
            <h2>{props.name}</h2>
            <h4>{props.tagline}</h4>
        </div>
      </div>
    );
}

export default Beer;
