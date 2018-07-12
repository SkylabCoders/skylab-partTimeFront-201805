import React, { Component } from 'react';
import './index.css';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoTitle: ' '
        }
    
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addToDoItem = this.addToDoItem.bind(this)
    }

    changeInputValue(e) {
        this.setState({todoTitle: e.target.value})
    }
    
    addToDoItem = (e) => {
        e.preventDefault();
        this.props.onAddToDoItem(this.state.todoTitle); 
        this.setState({todoTitle: ''})
        console.log(this.state.todoTitle);
    }

    render() {
        return (
            <form onSubmit={this.addToDoItem}>
                <input 
                    type="text"
                    name="toDoItem" 
                    placeholder="Crea una tarea"
                    onChange={this.changeInputValue}
                    value={this.state.todoTitle}
                    required
                    />
                <button type="submit">Crear</button>
            </form>    
        );
    }
}

export default Form;
