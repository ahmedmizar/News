import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import "./Home.scss";
import moment from "moment";
import data from "../../data/news.json";
import Card from "../../components/Card/Card";
class Home extends Component {
  compare = (a, b) => {
    if (a.publishedAt > b.publishedAt) {
      return -1;
    }
    if (a.publishedAt < b.publishedAt) {
      return 1;
    }
    return 0;
  };

  render() {
    return (
      <div className="home">
        <header>
          <img src={require("../../assests/images/header.jpg")} />
          <div className="header_info">
            <h3>Match 23</h3>
            <p>T20 world cup 2020</p>
          </div>
          <div className="over_lay"></div>
        </header>
        <div className="news">
          <div className="news_header">
            <p>Recntly Added</p>
            <Link to="/allNews">Show all</Link>
          </div>
          <Row>
            {data.articles
              .sort(this.compare)
              .slice(0, 8)
              .map((Item, key) => {
                return (
                  <Col
                    sm="12"
                    md="6"
                    xl="3"
                    key={key}
                    onClick={() => this.props.history.push("/singleNews", Item)}
                  >
                    <Card
                      title={Item.title}
                      urlToImage={Item.urlToImage}
                      publishedAt={moment(Item.publishedAt).format(
                        "MMM DD/YYYY, h:mm a"
                      )}
                    ></Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
