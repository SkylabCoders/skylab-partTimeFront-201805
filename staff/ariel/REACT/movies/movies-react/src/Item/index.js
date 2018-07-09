import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class Item extends Component {
  constructor(props){
    super(props)

    this.state = {
      movie: null
    }
  }


  componentDidMount() {
    console.log("ComponentDidMount START")  // Los params van luego del signo de ? en la URL y se definien como Objeto
    axios.get(`https://api.themoviedb.org/3/movie/${this.props.movieId}`,{
      params: {
        api_key:'1995c1a1d232dd178b70583c0f5a779b',
      }
    })
         
      .then(res => {
          const movie = res.data;
          console.log("Res: ", res)
          this.setState({ movie });
        })
        .catch(function (error) {    // ataja el error: no rompe la app
          // handle error
          console.log(error);
        })
  };
  render() {
    return (


      this.state.movie === null ? <p>LOADING !</p> : 

        <div className="Movie-Detail">

          <div className="MoviePic">
            
            <p>AQUI VA LA PICTURE</p>
          </div>

          <div className="MovieInfo">
            <h2>{this.state.movie.title}</h2>
            <p>{this.state.movie.overview}</p>
          </div>
      
      
      
      </div>

      

    );
  }
}

export default Item;
