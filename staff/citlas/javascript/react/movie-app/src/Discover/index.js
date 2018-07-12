import React, { Component } from 'react';
import axios from 'axios';
import Item from '../Item';
import { Link } from 'react-router-dom';

class Discover extends Component {
  constructor(props){
    super(props);
    this.state = {
      movies: [
        
      ]
    }
    
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=9e6a1fad2a4e7bffcd16924128d1895f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`)
      .then(res => {
        const movies = res.data;
        this.setState({ movies });
      })
      .catch(function (error) {
        // handle error - si falla
        console.log(error);
      })
  }

  

  render() {
    console.log(this.state.movies.results)
    return (
        //poner name, tagline y foto
        <div className="App">
        <p>Movie list</p>
        {
         this.state.movies.results ? 
         this.state.movies.results.map((e)=>{
          return <div>< Link to= {`item/${e.id}`} key={e.id} > {e.title}         
          <img className='image' src={`https://image.tmdb.org/t/p/w92/${e.poster_path}`} />
          </Link></div> }) :   
          'Loading'   
        }
        </div>

        
    
    );
  }
}

export default Discover;
