import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchNews } from "../../appRedux/actions/News"
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import "./Home.scss"
import moment from "moment";
import data from "../../data/news.json";
import Card from '../../components/Card/Card'
class Home extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        this.props.fetchNews()
        this.setState({ data: data.articles });
    }
    compare = (a, b) => {
        if (moment(a.publishedAt).format('MMMM Do YYYY, h:mm a') < moment(b.publishedAt).format('MMMM Do YYYY, h:mm a')) {
            return -1;
        }
        if (moment(a.publishedAt).format('MMMM Do YYYY, h:mm a') > moment(b.publishedAt).format('MMMM Do YYYY, h:mm a')) {
            return 1;
        }
        return 0;
    }


    render() {
        var arr2 = this.state.data.map((post, key) => (
            
            <Col sm="12" md="6" xl="3" key={key}>
                <Card title={post.title} urlToImage={post.urlToImage} publishedAt={moment(post.publishedAt).format('MMMM Do YYYY, h:mm a')}>
                    {/* <p>{moment(post.publishedAt).format('MMMM Do YYYY, h:mm a')}</p> */}
                </Card>
            </Col>
        )).sort(this.compare);
        let lastArray = arr2.slice(1,9)
        console.log(lastArray)
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

                       {lastArray}

                    </Row>
                </div>
            </div>
        );
    }
}

const mapDispachToProps = (dispach) => {
    return {
        fetchNews: () => dispach(fetchNews()),
    };
};
const mapStateToProps = (state) => {
    console.log(state)
    return {
        news: state.news.news || [],

    };
};
export default connect(mapStateToProps, mapDispachToProps)(Home);