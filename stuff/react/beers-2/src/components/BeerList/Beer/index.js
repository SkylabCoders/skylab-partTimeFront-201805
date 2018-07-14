import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import './index.css';

class Beer extends Component {
  constructor(props){
    super(props);

    this.state = {
      isFav : this.props.isFav, //OJO!
      changingFavourite: false
    }

    const db = firebase.firestore();
    this.collection = db.collection("favourites");

    this.makeFavourite = this.makeFavourite.bind(this);
    this.unmakeFavourite = this.unmakeFavourite.bind(this);
  }

  unmakeFavourite(){
    this.setState({changingFavourite: true});
    this.collection.doc(`${this.props.id.toString()}-${firebase.auth().currentUser.uid}`).delete().then(() => {
        // this.setState({isFav: false});
        console.log("Document successfully deleted!");
    }).catch((error) => {
        console.error("Error removing document: ", error);
    }).then(()=>{ //Se ejecuta siempre aunque haya error o success
        this.setState({changingFavourite: false});
    });
  }

  makeFavourite(){
    this.setState({changingFavourite: true});
    this.collection.doc(`${this.props.id.toString()}-${firebase.auth().currentUser.uid}`).set({
      beerId: this.props.id,
      date: new Date(),
      userId: firebase.auth().currentUser.uid
    })
    .then(() => {
        // this.setState({isFav: true});
        console.log("Document written");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);

    }).then(()=>{ //Se ejecuta siempre aunque haya error o success
      this.setState({changingFavourite: false});
    });
  }

  render(){
    // console.log("Beer render");
    const { isFav, loaded, changingFavourite } = this.state;

    return (
      <div className={`beer ${isFav ? 'beer-favourite' : ''}`}>
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

  componentDidUpdate(prevProps, prevState){
    // console.log("Beer componentDidUpdate: ",prevProps.isFav, this.props.isFav);
    if(prevProps.isFav !== this.props.isFav){
      this.setState({isFav: this.props.isFav});
    }
  }
}

export default Beer;
