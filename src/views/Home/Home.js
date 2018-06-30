import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import About from '../../components/About/About';
import Counter from '../../components/Counter/Counter';
import Rules from '../../components/Rules/Rules';
import Partner from '../../components/Partner/Partner';

import './Home.css';

import logoSchriftzug from './../../images/logo-schriftzug_600px.png';

let Twitch = window.Twitch;

export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            live: false,
            tournamentRunning: false
        };
    }

    componentDidMount() {
        this.resizeTwitchPlayer = this.resizeTwitchPlayer.bind(this);

        window.scrollTo(0, 0);

        $(this.refs.fullpage).fullpage({
            anchors: ["start", /*"teams", "spielplan",*/ "bulls", "regeln", "partner"],
            navigation: true,
            navigationTooltips: ["Start", /*"Teams", "Spielplan",*/ "Über die Bulls", "Turnier-Regeln", "Partner"],
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

        this.checkStreamIsOnline = this.checkStreamIsOnline.bind(this);

        this.checkStreamIsOnline();

        setInterval(this.checkStreamIsOnline, 60000);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.tournamentRunning !== prevState.tournamentRunning && this.state.tournamentRunning) {
            new Twitch.Embed("twitch-embed", {
                autoplay: false,
                layout: "video-with-chat",
                width: 3000,
                channel: "battleground_bulls"
            });
            this.resizeTwitchPlayer();
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

    checkStreamIsOnline () {
        // Request stream and look if stream is online
        let headers = new Headers();
        headers.append("Client-ID", "swviygtzpvpvtpm5r79410wd6221th");
        fetch("https://api.twitch.tv/helix/streams?user_login=battleground_bulls", {
            headers: headers
        })
            .then(response => { return response.json()})
            .then(json => {
                let live = false;
                if (json.data.length > 0) {
                    live = true;
                    // console.log(json.data[0].started_at);
                    // Wir könnten "started_at" verwenden, um anzuzeigen wie lange der Kanal schon online ist - json.data[0].started_at
                }
                //console.log(this);
                if (live !== this.state.live) {
                    this.setState({ live: live });
                }
            });
    }

    resizeTwitchPlayer() {
        let player = $("#twitch-embed iframe");
        if (player.length > 0) {
            player.height(player.width() / 16 * 9);
        }
    }

    toggleLive() {
        this.setState({ tournamentRunning: !this.state.tournamentRunning });
        $("iframe").remove();
    }

    render() {
        let { live } = this.state;
        let liveButton = null,
            img = <img src={logoSchriftzug} alt="Battleground Bulls"/>;
        if (live) {
            liveButton = <div className="live" onClick={this.toggleLive.bind(this)}><div className="record" />Jetzt live</div>;
            img = <img className="live" src={logoSchriftzug} alt="Battleground Bulls" onClick={this.toggleLive.bind(this)}/>;
        }
        return (
            <div ref="fullpage" className="container-fluid home">

                <div className="section start">
                    <div className="container">
                        {this.state.tournamentRunning ? (
                            <div className="inner">
                                <div id="twitch-embed"/>
                                <button className="btn primary back" onClick={this.toggleLive.bind(this)}>Zurück</button>
                            </div>
                        ) : (
                            <div className="inner">
                                {liveButton}
                                {img}
                                <div className="text">Nächstes<br/>Turnier in</div>
                                <Counter endCallback={() => {
                                    this.setState({tournamentRunning: true});
                                }}/>
                                <div className="links">
                                    <Link to="https://goo.gl/KEBC8z" className="btn primary" target="_blank" rel="noopener noreferrer">Jetzt anmelden</Link>
                                    <Link to="https://discord.gg/gke2aYp" className="btn discord" target="_blank" rel="noopener noreferrer">Join Discord</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="scroll-down"><i className="fa fa-chevron-down"/>weiter scrollen</div>
                </div>

                <About/>

                <Rules/>

                <Partner/>

            </div>
        );
    }
}