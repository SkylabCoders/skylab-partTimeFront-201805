import React, { Component } from 'react';

import './index.css';


class ToDo extends Component {
  constructor(props){
    super(props);
   

    this.todoDone = this.todoDone.bind(this)
    this.toUndoDone = this.toUndoDone.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)

  }
    todoDone(){
      //this.setState({done:true})
      this.props.onSetStatus(this.props.id,true)
    }
    toUndoDone(){
      //this.setState({done:false})
      this.props.onSetStatus(this.props.id,false)
    }
    deleteTodo(){
      this.props.onDeleteTodo(this.props.id)
    }
    


  render() {
    /*
    SI QUISIERA CAMBIAR EL this.state.title 
    y poner solo title o done
    para que se vea mas bonito, hacer ESTO:
    const {title} = this.props;
    const {done} = this.props;
    */
   
    return (
      
      <li className="ToDo"  >
        <p 
        className={this.props.done ? 'doneTarea': 'undoneTarea'} 
        onClick={this.toggleClass} 

        >{this.props.id}. {this.props.title}  {this.props.done ? '✔️':'⚠️'}</p>
        
        {this.props.done ? <button className="undoneButton" onClick={this.toUndoDone}>Undone</button>: <button className="doneButton" onClick={this.todoDone}>Done</button> }
        <button className="deleteButton" onClick={this.deleteTodo}>X</button>
      </li>
      
      
    );
  }
}

export default ToDo;