import React, { Component } from "react";

import { Route, Switch, Router, Redirect } from "react-router-dom";
import "./App.css";
import Layout from "../hos/Layout/Layout";
import moment from "moment";
import data from "../data/news.json";
import { history } from "../appRedux/store/index";

class App extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.setState({ data: data.articles });
  }
  render() {
    console.log(this.state.data);
    return (
      // <div>
      //   {this.state.data.map((post, key) => (
      //     <div key={key} className="post-detail">
      //       <p>{moment(post.publishedAt).format('MMMM Do YYYY, h:mm a')}</p>
      //     </div>
      //   ))}
      // </div>
      <Layout>
        
      </Layout>
    );
  }
}

export default App;
