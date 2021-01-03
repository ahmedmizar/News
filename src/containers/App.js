import React, { Component } from "react";

import { Route, Switch, Router, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "../hos/Layout/Layout";

import { history } from "../appRedux/store/index";



class App extends Component {
  render() {

    return (
      <Router history={history}>
        <Switch>
          <Layout>

          </Layout>
        </Switch>
      </Router>
    );
  }
}

export default App;
