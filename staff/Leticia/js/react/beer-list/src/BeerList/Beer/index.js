import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function Beer(props){
  return (
    
      <Link to={`/beer/${props.id}`} >
        
        <div className="beer">
            <div className="beer__img-wrapper">
              <img className="beer__image" alt="{props.name}" src={props.image_url} />
            </div>

            <div className="beer__info">
              <h1> {props.name}</h1>
              <h2> {props.tagline}</h2> 
            </div>

        </div>
        
      </ Link>
  );
}

export default Beer;