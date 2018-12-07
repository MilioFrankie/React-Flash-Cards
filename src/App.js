import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import NoMatch from "./components/NoMatch";
import About from "./components/About";
import Navbar from "./components/Navbar";


const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Main} />;
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;
