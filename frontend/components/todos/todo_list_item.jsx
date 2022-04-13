import React from "react";
import TodoDetailView from "./todo_detail_view";

class ToDoListItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            detail: false
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.doneClicked = this.doneClicked.bind(this);
        this.detailClicked = this.detailClicked.bind(this);
    }

    handleDelete(e){
        e.stopPropagation();
        this.props.removeTodo(this.props.todo);
    }

    doneClicked(e) {
        e.stopPropagation();
        let temp = this.props.todo;
        temp.done = !temp.done;
        this.props.receiveTodo(temp);
    }

    detailClicked(e){
        // debugger;
        if(e.target.tagName === 'LI'){
            this.setState({
                detail: !this.state.detail
            })
        }
    }

    render(){
        return (
            <li onClick={this.detailClicked}>Title: {this.props.todo.title}
                <button onClick={this.doneClicked}>{this.props.todo.done ? "Undo" : "Done"}</button>
                <button onClick={this.handleDelete}>Delete Todo</button>
                <br />
                <ul>
                    {this.state.detail ? <TodoDetailView todo={this.props.todo}/> : ""}
                </ul>
            </li>
        )
    }
}

export default ToDoListItem;