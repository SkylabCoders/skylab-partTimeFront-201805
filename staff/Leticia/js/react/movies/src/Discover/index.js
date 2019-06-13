import React, { Component } from 'react';
import axios from 'axios';
import './index.css';
import DiscoverItem from './DiscoverItem/';

class Discover extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      movies: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9e6a1fad2a4e7bffcd16924128d1895f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-01-01`)
      
      .then(res => {
        const movies = res.data.results;
        this.setState({ movies });
        
      })

      .catch(function (error) {
        console.log(error);
      })
  }

  _renderMovies(){
    return this.state.movies.map((e,i) => {
      return <DiscoverItem key={i} id={e.id} title={e.title} poster_path={e.poster_path} overview={e.overview}/>
    });
  }

  render() {
    console.log(this.state.movies.results);
    return (
      <div className="discover">
        {this.state.movies.length === 0 ? <p> Loading </p> : this._renderMovies()}
      </div>
    );
  }
}

export default Discover;
