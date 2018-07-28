import React, {PureComponent} from "react";
import classnames from "classnames";
import Helmet from "react-helmet";
import $ from "jquery";
import {Helmet} from "react-helmet";

import About from "../../components/About/About";
import Counter from "../../components/Counter/Counter";
import Rules from "../../components/Rules/Rules";
import Partner from "../../components/Partner/Partner";

import API from "../../utils/API";

import "./Home.css";

import logoSchriftzug from "./../../images/logo-schriftzug_600px.png";
import btnStreamBB from "./img/Vorschau-Stream-1.png";
import btnStreamBP from "./img/Vorschau-Stream-2.png";

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            liveBB: false,
            liveBP: false,
            Twitch: null
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

        this.checkBBStreamIsOnline();
        this.checkBPStreamIsOnline();

        setInterval(this.checkBBStreamIsOnline, 60000);
        setInterval(this.checkBPStreamIsOnline, 60000);
    }

    componentDidUpdate(prevProps, prevState) {
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
                if (liveBP !== this.state.liveBP) {
                    this.setState({ liveBP: liveBP });
                }
            });
    }

    moveToLiveStream () {
        $.fn.fullpage.moveTo(1, 1);
    }

    openStream(stream) {
        clearTimeout(this.openStreamTimer);

        let { Twitch } = this.state;
        if (Twitch) {
            $(this.refs.fullpage).find(".stream .actions").fadeOut();
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
                    break;
            }
            this.resizeTwitchPlayer();
        } else {
            this.openStreamTimer = setTimeout(this.openStream.bind(this, stream), 250);
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
                <Helmet><title>Home - Battleground-Bulls</title></Helmet>

                <Helmet onChangeClientState={()=>{ this.setState({ Twitch: window.Twitch }) }}>
                    <script src="https://embed.twitch.tv/embed/v1.js" async defer />
                </Helmet>

                <div className={classnames("fullpage-inner-wrapper", {"live": (liveBB || liveBP)})}>

                    <div className="section start">

                        <div className="slide start">
                            <div className="container">
                                <div className="inner">
                                    {liveButton}
                                    {img}
                                    <Counter endDate="July 1, 2018 16:15:00" />
                                    <div className="links">
                                        <a href="https://goo.gl/KEBC8z" className="btn primary" target="_blank" rel="noopener noreferrer">Jetzt anmelden</a>
                                        <a href="https://discord.gg/gke2aYp" className="btn discord" target="_blank" rel="noopener noreferrer">Join Discord</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="slide stream">
                            <div className="full-container">
                                <div className="actions">
                                    {liveBB ? <img src={btnStreamBB} title="Battleground Bulls" alt="Battleground Bulls" onClick={this.openStream.bind(this, "bb")} /> : null}
                                    {liveBP ? <img src={btnStreamBP} title="Bulls Playground" alt="Bulls Playground" onClick={this.openStream.bind(this, "bp")} /> : null}
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