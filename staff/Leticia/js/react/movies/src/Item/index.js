import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import {  Link } from 'react-router-dom';

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      movie: null
    }
  } 

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=9e6a1fad2a4e7bffcd16924128d1895f&language=en-US`)
      .then(res => {
        this.setState({ movie: res.data });
      })
  }

  render() {
    return (
      this.state.movie === null ? <p> Loading </p>: 
        <div className="Item-info">
          <h2> {this.state.movie.title}</h2>
          <p> {this.state.movie.overview}</p>
          {/* <h2> {props.tagline}</h2>  */}
          {/* <img className="Item-image" src=`https://image.tmdb.org/t/p/w500/`${props.poster_path} /> */}
        </div>
    );
  }
}

export default Item;
