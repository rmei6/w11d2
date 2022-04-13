import React from "react";
import StepListItemContainer from "./step_list_item_container";

export default class StepList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // debugger;
        return (
            <ul>
                {this.props.steps.map((step) => <StepListItemContainer key={step.id} step={step} />)}
            </ul>
        )
    }
}