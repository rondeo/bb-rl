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
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.tournamentRunning !== prevState.tournamentRunning && this.state.tournamentRunning) {
            new Twitch.Embed("twitch-embed", {
                autoplay: false,
                layout: "video",
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

    resizeTwitchPlayer() {
        let player = $("#twitch-embed iframe");
        if (player.length > 0) {
            player.height(player.width() / 16 * 9);
        }
    }

    render() {
        return (
            <div ref="fullpage" className="container-fluid home">

                <div className="section start">
                    <div className="container">
                        {this.state.tournamentRunning ? (
                            <div className="inner">
                                <div id="twitch-embed"/>
                            </div>
                        ) : (
                            <div className="inner">
                                <img src={logoSchriftzug} alt="Battleground Bulls"/>
                                <div className="text">Nächstes<br/>Turnier in</div>
                                <Counter endCallback={() => {
                                    this.setState({tournamentRunning: true});
                                }}/>
                                <div className="link">
                                    <Link to="https://goo.gl/KEBC8z" className="btn primary" target="_blank" rel="noopener noreferrer">Jetzt anmelden</Link>
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