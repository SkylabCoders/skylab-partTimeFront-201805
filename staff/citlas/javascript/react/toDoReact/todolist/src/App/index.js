import React, { Component } from 'react';

import './index.css';
import ToDoList from '../ToDoList/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="appHeader">My To Do App</p>
        <ToDoList />
      </div>
    );
  }
}

export default App;
