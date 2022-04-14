import React from "react";
import StepListItemContainer from "./step_list_item_container";
import StepForm from "./step_form";

export default class StepList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Steps: </h3>
                <ul>
                    {this.props.steps.map((step) => <StepListItemContainer key={step.id} step={step} />)}
                </ul>
                <StepForm todoId = {this.props.todo_id} receiveStep={this.props.receiveStep}/>
            </div>
        )
    }
}