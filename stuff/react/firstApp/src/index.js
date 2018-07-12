import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MyApp } from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MyApp subject="Skylab"/>, document.getElementById('root'));

registerServiceWorker();
