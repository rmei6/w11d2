import React from "react"

export default (props) => {
    return (
        <div>
            <h1>All Todos</h1>
            <ul>
                {
                    props.todos.map(todo => <li key={todo.id}>{todo.title}</li> )
                }
            </ul>
        </div>
    )
}