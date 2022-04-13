import React from "react"
import ToDoForm from "./todo_form";
import ToDoListItem from "./todo_list_item";

export default (props) => {
    return (
        <div>
            <h1>All Todos</h1>
            <ul>
                {
                    props.todos.map(todo => <ToDoListItem key={todo.id} todo={todo}/> )
                }
            </ul>
            <ToDoForm receiveTodo={props.receiveTodo}/>
        </div>
    )
}