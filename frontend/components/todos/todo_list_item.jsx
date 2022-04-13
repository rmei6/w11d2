import React from "react";

const ToDoListItem = (props) => {
    return (
        <li>{props.todo.title}</li>
    )
}

export default ToDoListItem;