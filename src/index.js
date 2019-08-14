import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "../src/store";
import Layout from "../src/components/Layout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
