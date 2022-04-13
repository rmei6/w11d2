import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import {receiveTodo , receiveTodos, removeTodo} from "./actions/todo_actions";
import {receiveStep , receiveSteps, removeStep} from "./actions/step_actions";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    

    //Add store to the window  (used for testing)
    const store =  configureStore();
    window.store =  store;

    ReactDOM.render(<Root store={store} />, root);

    //Add todo actions to the window (used for testing)
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.removeTodo = removeTodo;

    //Add step actions to the window (used for testing)
    window.receiveStep = receiveStep;
    window.receiveSteps = receiveSteps;
    window.removeStep = removeStep;
})