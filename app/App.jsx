import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import importComponent from "react-imported-component";
import Header from "./Components/Header";
import Loading from "./Pages/Loading";
import Error from "./Pages/Error";
import Home from "./Pages/Home";

const About = importComponent(() => import("./Pages/About"), {
  Loading,
  Error,
});
const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" render={() => <About />} />
      <Redirect to="/" />
    </Switch>
  </React.Fragment>
);

export default App;
