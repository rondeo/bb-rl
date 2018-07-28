import React from "react";
import classnames from "classnames";
import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import $ from "jquery";

import news1 from "./img/news1.png";
import news1Detail from "./img/news1.png";
import news2 from "./img/news2.png";
import news2Detail from "./img/news2.png";
import news3 from "./img/news3.png";
import news3Detail from "./img/news3.png";
import news4 from "./img/news4.png";
import news4Detail from "./img/news4.png";

import "./News.css";

export default class News extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    static getNews(title) {
        let news = [
            {
                author: "Malthe S.",
                img: news1,
                imgDetail: news1Detail,
                category: "Hardware",
                date: "28. Juli 2018",
                title: "Hardware 1 hat einen langen Titel",
                text: "Test"
            },
            {
                author: "Malthe S.",
                img: news2,
                imgDetail: news2Detail,
                category: "Hardware",
                date: "27. Juli 2018",
                title: "Hardware 2"
            },
            {
                author: "Malthe S.",
                img: news3,
                imgDetail: news3Detail,
                category: "Stream",
                date: "26. Juli 2018",
                title: "Stream 1"
            },
            {
                author: "Malthe S.",
                img: news4,
                imgDetail: news4Detail,
                category: ["Hardware", "Stream"],
                date: "25. Juli 2018",
                title: "Hardware & Stream"
            }
        ];

        if (title) {
            let singleNews = {};
            news.forEach( news => {
                if (news.title === title) {
                    singleNews = news;
                }
            });
            return singleNews;
        }

        return news;
    }

    handleScriptInject(addedTags) {
        if (addedTags.scriptTags && addedTags.scriptTags.length === 1) {
            addedTags.scriptTags[0].addEventListener('load', this.loadIsotope.bind(this));
        } else {
            this.loadIsotope();
        }
    }

    loadIsotope() {
        let $grid = $(this.refs.grid).isotope({
            itemSelector: ".grid-item",
        });

        // bind filter action
        let btnGroup = $(this.refs.buttonGroup);
        btnGroup.on("click", "button", function() {
            let filterValue = $(this).attr("data-filter");
            $grid.isotope({ filter: filterValue });

            // Set active button
            btnGroup.find("button").removeClass("active");
            $(this).addClass("active");
        });

        this.setState({ loading: false });
    }

    render() {
        let { loading } = this.state;
        let news = News.getNews();
        let newsGrids = [];
        news.forEach((news) => {
            newsGrids.push(
                <Link to={"/news/" + news.title.replace(/ /g, "-")} className={"grid-item " + news.category} data-category={news.category} key={news.title}>
                    <div className="inner-wrapper">
                        <img src={news.img} alt="" />
                        <div className="overlay">
                            <div className="date">{news.date}</div>
                            <div className="title" title={news.title}>{news.title}</div>
                        </div>
                    </div>
                </Link>
            );
        });
        return (
            <div className="view full-container news">
                <Helmet onChangeClientState={(newState, addedTags) => this.handleScriptInject(addedTags)}>
                    <title>News - Battleground Bulls</title>
                    <script src="/js/isotope.min.js" async defer />
                </Helmet>

                <div className="container">
                    <h1>Aktuelle News</h1>

                    <div ref="buttonGroup" className="button-group filters-button-group">
                        <button className="btn white active" data-filter="*">Alle anzeigen</button>
                        <button className="btn white" data-filter=".hardware">Hardware</button>
                        <button className="btn white" data-filter=".stream">Stream</button>
                    </div>

                    <div ref="grid" className={classnames("grid", {"loading": loading})}>
                        {newsGrids}
                        {loading ? <i className="fas fa-cog fa-spin" /> : null}
                    </div>
                </div>
            </div>
        );
    }
}