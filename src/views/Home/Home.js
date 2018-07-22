import React, {PureComponent} from "react";
import classnames from "classnames";
import {Link} from "react-router-dom";
import $ from "jquery";

import About from "../../components/About/About";
import Counter from "../../components/Counter/Counter";
import Rules from "../../components/Rules/Rules";
import Partner from "../../components/Partner/Partner";

import API from "../../utils/API";

import "./Home.css";

import logoSchriftzug from "./../../images/logo-schriftzug_600px.png";

let Twitch = window.Twitch;

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            liveBB: false,
            liveBP: false
        };
    }

    componentDidMount() {
        this.resizeTwitchPlayer = this.resizeTwitchPlayer.bind(this);

        window.scrollTo(0, 0);

        $(this.refs.fullpage).fullpage({
            anchors: ["start", /*"teams", "spielplan",*/ "bulls", "regeln", "partner"],
            //navigation: true,
            //navigationTooltips: ["Start", /*"Teams", "Spielplan",*/ "Über die Bulls", "Turnier-Regeln", "Partner"],
            scrollOverflow: true
        });

        $(".scroll-down").on("click", function () {
            $.fn.fullpage.moveSectionDown();
        });
        $(".scroll-up").on("click", function () {
            $.fn.fullpage.moveTo(1);
        });

        $(window).resize(() => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                this.resizeTwitchPlayer();
            }, 250);
        });

        this.moveToLiveStream = this.moveToLiveStream.bind(this);

        this.checkBBStreamIsOnline = this.checkBBStreamIsOnline.bind(this);
        this.checkBPStreamIsOnline = this.checkBPStreamIsOnline.bind(this);

        this.openStream = this.openStream.bind(this);

        //this.checkBBStreamIsOnline();
        //this.checkBPStreamIsOnline();

        //setInterval(this.checkBBStreamIsOnline, 60000);
        //setInterval(this.checkBPStreamIsOnline, 60000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevProps.liveBB && this.state.liveBB) {
            /*new Twitch.Embed("twitch-embed-bb", {
                autoplay: false,
                layout: "video-with-chat",
                width: 3000,
                channel: "battleground_bulls"
            });
            this.resizeTwitchPlayer();*/
        }

        let currentPath = this.props.location.pathname + this.props.location.hash;
        if (currentPath !== prevProps.location.pathname + prevProps.location.hash) {
            $.fn.fullpage.moveTo(currentPath.replace("/", "").replace("#", ""));
        }
    }

    componentWillUnmount() {
        $.fn.fullpage.destroy("all");
        $(".scroll-down, .scroll-up").off();
    }

    checkBBStreamIsOnline () {
        // Request stream and look if stream is online
        API.getInstance()._fetch("https://api.twitch.tv/helix/streams?user_login=battleground_bulls", "GET", null, null, {"Client-ID": "swviygtzpvpvtpm5r79410wd6221th"}).then(json => {
            let liveBB = false;
            if (json.data.length > 0) {
                liveBB = true;
                // console.log(json.data[0].started_at);
                // Wir könnten "started_at" verwenden, um anzuzeigen wie lange der Kanal schon online ist - json.data[0].started_at
            }
            if (liveBB !== this.state.liveBB) {
                this.setState({ liveBB: liveBB });
            }
        });
    }

    checkBPStreamIsOnline () {
        // Request stream and look if stream is online
        fetch("https://api.twitch.tv/helix/streams?user_login=battleground_playground", {
            headers: {
                "Client-ID": "swviygtzpvpvtpm5r79410wd6221th"
            }
        })
            .then(response => { return response.json()})
            .then(json => {
                let liveBP = false;
                if (json.data.length > 0) {
                    liveBP = true;
                    // console.log(json.data[0].started_at);
                    // Wir könnten "started_at" verwenden, um anzuzeigen wie lange der Kanal schon online ist - json.data[0].started_at
                }
                //console.log(this);
                if (liveBP !== this.state.liveBP) {
                    this.setState({ liveBP: liveBP });
                }
            });
    }

    moveToLiveStream () {
        $.fn.fullpage.moveTo(1, 1);
    }

    openStream(stream) {
        $(this.refs.fullpage).find(".stream .actions").fadeOut(function () {
            console.log("faded out");
        });
        switch (stream) {
            case "bp":
                new Twitch.Embed("twitch-embed-bp", {
                    autoplay: true,
                    layout: "video-with-chat",
                    width: 3000,
                    channel: "bulls_playground"
                });
                break;
            default:
                new Twitch.Embed("twitch-embed-bb", {
                    autoplay: true,
                    layout: "video-with-chat",
                    width: 3000,
                    channel: "battleground_bulls"
                });
                this.resizeTwitchPlayer();
                break;
        }
    }

    resizeTwitchPlayer() {
        let player = $("#twitch-embed-bb iframe, #twitch-embed-bp iframe");
        if (player.length > 0) {
            player.height(player.width() / 16 * 9);
        }
    }

    render() {
        let { liveBB, liveBP } = this.state;
        let liveButton = null,
            img = <img src={logoSchriftzug} alt="Battleground Bulls"/>;
        if (liveBB || liveBP) {
            liveButton = <div className="live" onClick={this.moveToLiveStream} title="Zum Live-Stream"><div className="record"/>Jetzt live</div>;
            img = <img src={logoSchriftzug} alt="Battleground Bulls" title="Zum Live-Stream" onClick={this.moveToLiveStream} />;
        }
        return (
            <div ref="fullpage" className="container-fluid home">

                <div className={classnames("fullpage-inner-wrapper", {"live": (liveBB || liveBP)})}>

                    <div className="section start">

                        <div className="slide start">
                            <div className="container">
                                <div className="inner">
                                    {liveButton}
                                    {img}
                                    <Counter endDate="July 29, 2018 16:15:00" />
                                    <div className="links">
                                        <Link to="/anmeldung/2vs2" className="btn primary">Jetzt anmelden</Link>
                                        <a href="https://discord.gg/gke2aYp" className="btn discord" target="_blank" rel="noopener noreferrer">Join Discord</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide stream">
                            <div className="full-container">
                                <div className="actions">
                                    {liveBB ? <button className="btn twitch" onClick={this.openStream.bind(this, "bb")}>Battleground Bulls</button> : null}
                                    {liveBP ? <button className="btn twitch" onClick={this.openStream.bind(this, "bp")}>Bulls Playground</button> : null}
                                </div>

                                <div id="twitch-embed-bb" />
                                <div id="twitch-embed-bp" />
                            </div>
                        </div>

                        <div className="scroll-down"><i className="fa fa-chevron-down"/>weiter scrollen</div>
                    </div>

                    <About/>

                    <Rules/>

                    <Partner/>

                </div>
            </div>
        );
    }
}