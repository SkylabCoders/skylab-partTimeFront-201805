import React, { Component } from 'react';
import './index.css';



class EvaluateLetter extends Component {
    constructor(props){
        super(props);   // incognitaArr, frutaArr, Letter(id)
        
        this.state = {
            id: '',
            incognita: this.props.incognitaArr,
            clicked: false,
            exists : false
        }

    }

    render() {


        
        return 
        
        <p>{this.props.id}</p>

                  
      }
    
};

export default EvaluateLetter;

