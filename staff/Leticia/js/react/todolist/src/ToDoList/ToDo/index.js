import React, { Component } from 'react';
import './index.css';

class ToDo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            done: props.done
        }
        
        this.todoDone = this.todoDone.bind(this); // register this
        this.toUnDone = this.toUnDone.bind(this); // register this
        this.deleteToDo = this.deleteToDo.bind(this); // register this
    }
    
    todoDone() {
        this.props.setStatus(this.props.id, true); 
    }

    toUnDone() {
        this.props.setStatus(this.props.id, false); 
    }
    
    deleteToDo() {
        this.props.onDeleteToDo(this.props.id); // llamamos a la función con estos parámetros
    } 

    render() {
        return (
            <li id={this.props.id}>
                {this.props.id}. {this.props.title}--{this.props.done ? "hecho" : "falta por hacer!"}
                { this.props.done ?
                    <button onClick={this.toUnDone}>undone</button> :
                    <button onClick={this.todoDone}>done</button>
                }
                <button onClick={this.deleteToDo}>x</button>
            </li>
        );
    }
}

export default ToDo;
