import React from "react";

export default class ToDoForm extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            id: this.uniqueId(),
            title: "",
            body: "",
            done: false
        }
    }

    render() {
        return (
            <form>
                <h1>Create New Todo</h1>
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
            </form>
        )
    }

    uniqueId() {
        return new Date().getTime();
    }
}