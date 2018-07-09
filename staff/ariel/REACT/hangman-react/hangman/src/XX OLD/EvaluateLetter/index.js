import React, { Component } from 'react';
import './index.css';



class EvaluateLetter extends Component {
    constructor(props){
        super(props);   
        
        this.state = {
            id: '',
            incognita: [],
            palabra: this.props.palabra,
            clicked: false,
            exists : false
        }


        this.evaluateLetter =this.evaluateLetter.bind(this)

    }





    render() {


        
        return (
        
        <p>{this.state.incognita}</p>

                  
        )
    }
    
};

export default EvaluateLetter;

