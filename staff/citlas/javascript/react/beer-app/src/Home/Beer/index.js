import React from 'react';
import './index.css';

function Beer(props){

    return (
      
      <div className="Beer">
      
        <img className='image' src= {props.image} />
        <div className='beers-info'>
            <p className='name'>{props.name}  </p>
            <p className='tagline'> {props.tagline}  </p>
        </div>
        <hr/>
      </div>
      
    );

}

export default Beer;
