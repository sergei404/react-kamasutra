import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redax/store";

export function rerenderEntrytree(state) {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App data={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

rerenderEntrytree(store.getState())
store.subscribe(rerenderEntrytree)