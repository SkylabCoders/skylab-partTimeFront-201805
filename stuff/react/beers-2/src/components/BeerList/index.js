import React, { Component } from 'react';
import Beer from './Beer';
import firebase from 'firebase';

class BeerList extends Component {
  constructor(props){
    super(props);

    this.state = {
      favourites: []
    }

    const db = firebase.firestore();
    this.collection = db.collection("favourites");

    this.snapshotHandler = null;
  }

  componentWillUnmount(){
    this.snapshotHandler();
    console.log('snapshotHandler unmount!');

  }

  componentDidMount(){
    // console.log("Beer List componentDidMount");
    this.snapshotHandler = this.collection.onSnapshot((querySnapshot) => {
      console.log('querySnapshot: ', querySnapshot);
      let favouritesList = [];
      const userId = firebase.auth().currentUser.uid;

      querySnapshot.forEach((doc) => {
        if(doc.data().userId === userId){
          let fav = doc.data();
          fav.id = doc.id;
          favouritesList.push(fav);
        }
      });

      this.setState({ favourites: favouritesList });
    });
  }

  _renderBeers(){
    return this.props.beers.map((b,i) => {
      /*
      Si dentro de mis favoritos existe un objeto (element) cuyo 'id'
      es igual al 'id' de la beer (b) que estoy mostrando
      en esta vuelta del map, entonces isFav=true
      */
        const isFav = this.state.favourites.some((element) => {
          return element.beerId == b.id;
        });

        return <Beer isFav={isFav} key={i} id={b.id} name={b.name} image={b.image_url} tagline={b.tagline} />
    })
  }

  render() {
    // console.log("Beer List render. Firebase loaded?", this.state.favourites.length>0);
    console.log("FAVS: ",this.state.favourites);
    return (
        <div className="beers-list">
            {this.props.beers.length === 0 ?  <p>Loading</p> : this._renderBeers()}
        </div>
    );
  }
}

export default BeerList;
