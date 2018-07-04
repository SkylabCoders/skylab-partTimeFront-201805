import React, { Component } from 'react';

import './index.css';
import ToDoList from '../ToDoList/'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)
library.add(faTrash)
library.add(faCheck)
library.add(faExclamation)

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
