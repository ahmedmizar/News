import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../hos/Layout/Layout";
import Home from "./Home/Home";
import AllNews from "./AllNews/AllNews";
import SingleNews from "./SingleNews/SingleNews";

class App extends Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/allNews" component={AllNews} />
          <Route exact path="/singleNews" component={SingleNews} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
