import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBNmjDdwiWmi3N-IfSBCbOZdPR1tga8lN8",
    authDomain: "skylabbeers.firebaseapp.com",
    databaseURL: "https://skylabbeers.firebaseio.com",
    projectId: "skylabbeers",
    storageBucket: "skylabbeers.appspot.com",
    messagingSenderId: "1015076628891"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
