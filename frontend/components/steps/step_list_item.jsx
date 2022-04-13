import React from "react";

export default class StepListItem extends React.Component {
    constructor(props) {
        super(props);
        this.doneClicked = this.doneClicked.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            done:this.props.step.done
        }
    }

    doneClicked(e){
        // debugger;
        if(e.target.tagName === 'BUTTON') {
            let temp = this.props.step;
            temp.done = !temp.done;
            // debugger;
            this.props.receiveStep(temp);
            this.setState({done:temp.done});    //force state to rerender
        }
    }

    handleDelete(e){
        e.stopPropagation();
        this.props.removeStep(this.props.step);
    }

    render(){
        return (
            <li>Title: {this.props.step.title} Body: {this.props.step.body} Done: {this.props.step.done.toString()}
                <button onClick={this.doneClicked}>{this.props.step.done ? "Undo" : "Done"}</button>
                <button onClick={this.handleDelete}>Delete Step</button>
            </li>
        )
    }
}