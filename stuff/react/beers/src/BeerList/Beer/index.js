import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './index.css';

class Beer extends Component {
  constructor(props){
    super(props);

    this.state = {
      isFav : false,
      loaded: false,
      changingFavourite: false
    }

    const db = firebase.firestore();
    this.collection = db.collection("favourites");

    this.makeFavourite = this.makeFavourite.bind(this);
    this.unmakeFavourite = this.unmakeFavourite.bind(this);
  }

  componentDidMount(){
    this.collection.doc(this.props.id.toString()).get().then((doc) => {
      this.setState({loaded:true, isFav: doc.exists });
    });
  }

  unmakeFavourite(){
    this.setState({changingFavourite: true});
    this.collection.doc(this.props.id.toString()).delete().then(() => {
        this.setState({isFav: false});
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    }).then(()=>{ //Se ejecuta siempre aunque haya error o success
        this.setState({changingFavourite: false});
    });
  }

  makeFavourite(){
    this.setState({changingFavourite: true});
    this.collection.doc(this.props.id.toString()).set({
      beerId: this.props.id,
      date: new Date()
    })
    .then(() => {
        this.setState({isFav: true});
        console.log("Document written");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);

    }).then(()=>{ //Se ejecuta siempre aunque haya error o success
      this.setState({changingFavourite: false});
    });
  }

  render(){
    const { isFav, loaded, changingFavourite } = this.state;

    return (
      loaded && <div className={`beer ${isFav ? 'beer-favourite' : ''}`}>
        <Link to={`/beer/${this.props.id}`}><img src={this.props.image}/></Link>
        <div>
            <h2>{this.props.name}</h2>
            <h4>{this.props.tagline}</h4>
            {!changingFavourite && (isFav ? 
              <a href='#' onClick={this.unmakeFavourite}>Unmake Favourite!</a> :
              <a href='#' onClick={this.makeFavourite}>Make Favourite!</a>
            )}
        </div>
      </div>
    );
  }
}

export default Beer;
