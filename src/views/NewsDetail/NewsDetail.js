import React from "react";
import {Link} from "react-router-dom";

import News from "./../News/News";

import "./NewsDetail.css";

export default class NewsDetail extends React.PureComponent {

    render() {
        let news = News.getNews(this.props.match.params.title.replace(/-/g, " "));
        let author, category;
        if (news.author) {
            author = (
                <div className="author"><i className="fas fa-user" />{news.author}</div>
            );
        }
        if (news.category) {
            category = (
                <div className="category"><i className="fas fa-folder-open" />{news.category instanceof Array ? news.category.join(", ") : news.category}</div>
            );
        }
        return (
            <div className="view full-container news-detail">
                <div className="container">
                    <Link to="/news"><i className="far fa-caret-square-left" />Alle News</Link>
                    <div className="date">{news.date}</div>
                    <h1>{news.title}</h1>
                    {author}{category}
                    <img src={news.imgDetail} />
                    <p className="content" dangerouslySetInnerHTML={{__html: news.text}} />
                </div>
            </div>
        );
    }
}