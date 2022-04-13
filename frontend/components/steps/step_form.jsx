import React from "react";

export default class StepForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: this.uniqueId(),
            title: "",
            body: "",
            done: false,
            todo_id: this.props.todoId
        }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveStep(this.state);
        this.setState({
            id: this.uniqueId(),
            title: "",
            body: "",
            done: false
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Create New Step</h4>
                <label>Title
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={this.updateTitle}
                    />
                </label>
                <label>Body
                    <input
                        type="text"
                        value={this.state.body}
                        onChange={this.updateBody}
                    />
                </label>
                <input type="submit" value="Add Step" />

            </form>
        )
    }

    uniqueId() {
        return new Date().getTime();
    }
}