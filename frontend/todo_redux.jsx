import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const header = <h1>Todos App</h1>;
    ReactDOM.render(header, root);

    //Remove this after done developing
    const store =  configureStore();
    window.store =  store;
    
})