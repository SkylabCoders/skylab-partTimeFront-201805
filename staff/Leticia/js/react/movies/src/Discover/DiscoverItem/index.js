import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

function DiscoverItem(props){
  return (

    <Link to={`/item/${props.id}`} className="DiscoverItem">
      
      <img className="DiscoverItem-image" src={`https://image.tmdb.org/t/p/w500/${props.poster_path}`} />
      <div className="DiscoverItem-info">
        <h2> {props.title}</h2>
        <p> {props.overview}</p>
        {/* <h2> {props.tagline}</h2>  */}
      </div>
      
      </ Link>
  );
}

export default DiscoverItem;