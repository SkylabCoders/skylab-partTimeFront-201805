import React, { Component } from 'react';
import './index.css';
import GenerateABC from '../GenerateABC';

class App extends Component {
  constructor(props){
    super(props)


  }

  render() {
    return (
     
      <div>
        <div className="Upper">

          <div className="Button">
        
            <button onClick>START</button>

          </div>

          <p>AQUI VA LA INCOGNITA</p>
        
        </div>


        <div className="lower">
          
          <GenerateABC />
          
        </div>

      </div>
        
    );
  }
}

export default App;
