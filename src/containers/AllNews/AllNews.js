import { Row, Col, Button } from 'reactstrap';
import React, { Component } from 'react';
import moment from "moment";
import data from "../../data/news.json";
import Card from '../../components/Card/Card'
import "./AllNews.scss"
class AllNews extends Component {
    state = {
        data: [],
    };
    componentDidMount() {
        // this.props.fetchNews()
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
        let lastArray = arr2.slice(1, 9)
        console.log(lastArray)
        return (
            <div className="all_news">
                <div className="news_header">
                    <p>Recntly Added</p>
                </div>
                <Row>

                    {lastArray}

                </Row>
                <div className="all_news_footer">
                    <button>Show More</button>
                </div>
            </div>
        );
    }
}

export default AllNews;