import React, { Component } from 'react';
import './index.css';

class Letter extends Component {
  

  render() {
    return (
      <div className="letter-list_item" onClick={()=>{ this.props.chooseLetter(this.props.id) }} >
        {this.props.id}
      </div>
    );
  }
}

export default Letter;
