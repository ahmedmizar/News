import React, { Component } from "react";

import { Route, Switch, Router, BrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "../hos/Layout/Layout";
import moment from "moment";
import data from "../data/news.json";
import { history } from "../appRedux/store/index";
import Home from "./Home/Home";
import AllNews from "./AllNews/AllNews";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
          <Route
              exact
              path="/"
              component={Home}
            />
            <Route
              exact
              path="/home"
              component={Home}
            />
            <Route
              exact
              path="/allNews"
              component={AllNews}
            />
          </Layout>
        </Switch>
      </BrowserRouter>

    );
  }
}

export default App;
