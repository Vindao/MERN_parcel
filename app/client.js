import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./styles";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { rehydrateMarks } from "react-imported-component";
import importedComponents from "./imported"; // eslint-disable-line

const element = document.getElementById("app");

const app = (
  <Router>
    <GlobalStyles />
    <App />
  </Router>
);
// In production, we want to hydrate instead of render
// because of the server-rendering
if (process.env.NODE_ENV === "production") {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(app, element);
  });
} else {
  ReactDOM.render(app, element);
}
// Enable Hot Module Reloading
if (module.hot) {
  module.hot.accept();
}
