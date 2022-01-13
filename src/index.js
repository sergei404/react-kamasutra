import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redax/redux-store";
import StoreContext from "./StoreContext";
//import Provider from "./StoreContext";

export function rerenderEntrytree(state) {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        {/* <Provider value={state}>
            <App/>
        </Provider> */}
        <StoreContext.Provider value={state}>
          <App />
          {/* <App data={state} dispatch={store.dispatch.bind(store)} /> */}
        </StoreContext.Provider>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
  );
}

rerenderEntrytree(store);
store.subscribe(() => {
  let state = store;
  rerenderEntrytree(state);
});

// {
//   /* <StoreContext.Provider value={store}>
// <App/>
// <App data={state} dispatch={store.dispatch.bind(store)}/>
// </StoreContext.Provider> */
// }
