import React, { Component } from 'react';
import Beer from './Beer';

class BeerList extends Component {
  _renderBeers(){
    return this.props.beers.map((b,i) => {
        return <Beer key={i} id={b.id} name={b.name} image={b.image_url} tagline={b.tagline} />
    })
  }

  render() {
    return (
        <div className="beers-list">
            {this.props.beers.length === 0 ?  <p>Loading</p> : this._renderBeers()}
        </div>
    );
  }
}

export default BeerList;
