import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redax/redux-store";
//import StoreContext from "./StoreContext";
//import Provider from "./StoreContext";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// export function rerenderEntrytree() {
//   ReactDOM.render(
//     <BrowserRouter>
//       <React.StrictMode>
//         <Provider store={store}>
//             <App/>
//         </Provider>
//         {/* <StoreContext.Provider value={store}>
//           <App />
//           <App data={state} dispatch={store.dispatch.bind(store)} />
//         </StoreContext.Provider> */}
//       </React.StrictMode>
//     </BrowserRouter>,
//     document.getElementById("root")
//   );
// }

// rerenderEntrytree();

// store.subscribe(() => {
//   rerenderEntrytree();
// });

// {
//   /* <StoreContext.Provider value={store}>
// <App/>
// <App data={state} dispatch={store.dispatch.bind(store)}/>
// </StoreContext.Provider> */
// }
