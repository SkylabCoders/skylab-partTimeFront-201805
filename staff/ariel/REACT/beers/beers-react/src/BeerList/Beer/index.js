import React, { Component } from 'react';
import './index.css';

function Beer(props){
  

    return (

      <div className="BeerList">
        <div>
          <img src={props.image_url}/>
        </div>

        <div className="BeerInfo">
          <div>
            <h2>{props.name}</h2> 
          </div>
          <div>
           <h4>{props.tagline}</h4>
           </div>
        </div>
      </div>
      
      
    );

}

export default Beer;
