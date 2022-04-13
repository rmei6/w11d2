import React from "react";

export default class TodoDetailView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <li>Id: {this.props.todo.id} Body: {this.props.todo.body}</li>
        )
    }
}