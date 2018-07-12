import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {
      movie: [
        
      ]
    }
    
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=9e6a1fad2a4e7bffcd16924128d1895f&language=en-US
    `)
      .then(res => {
        const movie = res.data;
        this.setState({ movie });
      })
      .catch(function (error) {
        // handle error - si falla
        console.log(error);
      })
  }

  render() {
    console.log(this.state.movie)
    return (
        //poner name, tagline y foto
        <div className="App">
        <Link to="/" >Go to Movie list</Link>
        <div key={this.state.movie.id} >
        <img className='image' src={`https://image.tmdb.org/t/p/w92/${this.state.movie.poster_path}`} />
        <p>{this.state.movie.title}</p> 
        <p>{this.state.movie.overview}</p>
         </div>
        {/*
         this.state.movies.results ? 
         this.state.movies.results.map((e)=>{
          return <div key={e.id} > {e.title} </div> }) :   
          'Loading' 
          */
        }
        </div>

        
    
    );
  }
}

export default Item;
