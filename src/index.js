import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Router from "./Router"
import store from "./Redux/Store";

const root = document.getElementById("root");

//console.log(store.getState())

ReactDOM.render(
    <Provider store = {store}>
        <Router />
    </Provider>,root
);