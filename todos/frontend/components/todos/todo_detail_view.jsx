import React from "react";
import StepListContainer from "../steps/step_list_container";

export default class TodoDetailView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <StepListContainer todo_id={this.props.todo.id}/>
        )
    }
}