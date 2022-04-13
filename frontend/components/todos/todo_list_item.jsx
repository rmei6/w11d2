import React from "react";

class ToDoListItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.doneClicked = this.doneClicked.bind(this);
    }

    handleDelete(e){
        this.props.removeTodo(this.props.todo);
    }

    doneClicked(e) {
        let temp = this.props.todo;
        temp.done = !temp.done;
        this.props.receiveTodo(temp);
    }

    render(){
        return (
            <li>Id: {this.props.todo.id} Title: {this.props.todo.title} Body: {this.props.todo.body}
                <br />
                <button onClick={this.doneClicked}>{this.props.todo.done ? "Undo" : "Done"}</button>
                <button onClick={this.handleDelete}>Delete Todo</button>
            </li>
        )
    }
}

export default ToDoListItem;