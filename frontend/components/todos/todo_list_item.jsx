import React from "react";

class ToDoListItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.removeTodo(this.props.todo);
    }

    render(){
        return (
            <li>Id: {this.props.todo.id} Title: {this.props.todo.title} Body: {this.props.todo.body}
                <button onClick={this.handleDelete}>Delete Todo</button>
            </li>
        )
    }
}

export default ToDoListItem;