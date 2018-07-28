import React from "react";

import News from "./../News/News";

import "./NewsDetail.css";

export default class NewsDetail extends React.PureComponent {

    render() {
        let news = News.getNews(this.props.match.params.title.replace(/-/g, " "));
        let author, category;
        if (news.author) {
            author = (
                <div className="author"><i className="fas fa-user" /></div>
            );
        }
        if (news.category) {
            category = (
                <div className="category"><i className="fas fa-folder-open" />{}</div>
            );
        }
        return (
            <div className="view full-container news-detail">
                <div className="container">
                    <div className="date">{news.date}</div>
                    <h1>{news.title}</h1>
                    {author}{category}
                    <img src={news.imgDetail} />
                    <p>{news.text}</p>
                </div>
            </div>
        );
    }
}