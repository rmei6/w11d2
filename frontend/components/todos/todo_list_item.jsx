import React from "react";

const ToDoListItem = (props) => {
    return (
        <li>Id: {props.todo.id} Title: {props.todo.title} Body: {props.todo.body}</li>
    )
}

export default ToDoListItem;