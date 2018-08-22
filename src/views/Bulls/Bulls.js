import React from "react";
import {Helmet} from "react-helmet";
import $ from "jquery";

import Member from "../../components/Member/Member";

import "./Bulls.css";

import img_xPain from "./img/Malthe_xPainHunt3r.png";
import img_Madness from "./img/Andi_MrMadness.png";
import img_Unknown from "./img/Unknown.png";
import API from "../../utils/API";

export default class Bulls extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            bulls: []
        };
    }

    componentDidMount() {
        API.getInstance()._fetch("/user" , "GET")
            .then(response => {
                this.setState({ bulls: response });
                $(this.refs.bulls).fullpage({
                    verticalCentered: false
                });
            });
    }

    componentWillUnmount() {
        $.fn.fullpage.destroy("all");
    }

    render() {
        let members = [], rows = [], slides = [];
        this.state.bulls.forEach( (bull, index) => {
            if (bull.firstName && bull.games && bull.description) {
                members.push(
                    <div className="col-md-6" key={bull.id}>
                        <Member
                            name={bull.firstName + " | " + bull.username}
                            job={bull.role.role}
                            games={bull.games}
                            description={bull.description}
                            img={img_Unknown}
                        />
                    </div>
                );

                if (members.length === 2 || index === this.state.bulls.length-1) {
                    rows.push(<div className="row" key={bull.id}>{members}</div>);
                    members = [];
                }

                if (rows.length === 2 || index === this.state.bulls.length-1) {
                    slides.push(
                        <div className="slide" key={bull.id}>
                            <div className="container">
                                <h1>Das sind wir - die Bullen im Stall</h1>

                                {rows}
                            </div>
                        </div>
                    );
                    rows = [];
                }
            }
        });
        return (
            <div ref="bulls" className="view full-container bulls">
                <Helmet>
                    <title>Member - Battleground-Bulls</title>
                </Helmet>

                <div className="section">
                    {slides}
                </div>
            </div>
        );
    }
}