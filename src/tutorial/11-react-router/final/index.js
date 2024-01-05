import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Sales from "./Sales";
import Navbar from "./Navbar";
import Manager from "./Manager";
import Departments from "./Departments";
import Accounting from "./Accounting";
import Reception from "./Reception";
import Form from "./Form";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/manager">
        <Manager />
      </Route>
      <Route path="/departments">
        <Departments />
      </Route>
      <Route path="/sales">
        <Sales />
      </Route>
      <Route path="/accounting">
        <Accounting />
      </Route>
      <Route path="/reception">
        <Reception />
      </Route>
      <Route path="/form">
        <Form />
      </Route>
    </Router>
  );
};

export default ReactRouterSetup;
