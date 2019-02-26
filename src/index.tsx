import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./styles/index.scss";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById("root"));

// Enable Hot Module Reloading
if ((module as any).hot) {
  (module as any).hot.accept("./App", () => {
    const NewApp = require("./App").default;
    render(<NewApp />, document.getElementById("root"));
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
