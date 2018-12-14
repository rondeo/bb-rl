import React from "react";
import $ from "jquery";

import {searchToObject} from '../../utils/helperFunctions';

import IMG_Blank from "./img/RL-Overlay-leer.png";
import b1o0 from "./img/1b-0o.png";
import b2o0 from "./img/2b-0o.png";
import b0o1 from "./img/1o-0b.png";
import b0o2 from "./img/2o-0b.png";
import b2o1 from "./img/1o-2b.png";
import b1o2 from "./img/2o-1b.png";
import b1o1 from "./img/1o-1b.png";
import winnerB from "./img/Sieg-blau.png";
import winnerO from "./img/Sieg-orange.png";

import "./RocketLeagueOverlay.css";

export default class RocketLeagueOverlay extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            counterBlue: 0,
            counterOrange: 0,
            disabled: false
        };

        this.updateBlue = this.updateBlue.bind(this);
        this.updateOrange = this.updateOrange.bind(this);
    }

    componentDidMount() {
        const $body = $("body");
        $body.addClass("blank");

        // Schnee Standard deaktiviert - mit ?snow=true kann Schnee aktiviert werden
        let search = searchToObject(this.props.location.search);
        if (typeof search.snow === "undefined" || search.snow === "false") {
            $body.addClass("no-snow");
        }
    }

    componentWillUnmount() {
        $("body").removeClass("blank");
    }

    updateBlue() {
        let counterBlue = this.state.counterBlue+1,
            disabled = this.state.disabled;
        if (counterBlue >= 2) {
            disabled = true;
        }
        this.setState({
            counterBlue: counterBlue,
            disabled: disabled
        });
    }

    updateOrange() {
        let counterOrange = this.state.counterOrange+1,
            disabled = this.state.disabled;
        if (counterOrange >= 2) {
            disabled = true;
        }
        this.setState({
            counterOrange: counterOrange,
            disabled: disabled
        });
    }

    render() {
        let imgSrc = IMG_Blank;
        let winnerImgSrc = null;
        let { counterBlue, counterOrange, disabled } = this.state;
        if (counterBlue === 1 && counterOrange === 0) {
            imgSrc = b1o0;
        } else if (counterBlue === 2 && counterOrange === 0) {
            imgSrc = b2o0;
            winnerImgSrc = winnerB;
        } else if (counterBlue === 0 && counterOrange === 1) {
            imgSrc = b0o1;
        } else if (counterBlue === 0 && counterOrange === 2) {
            imgSrc = b0o2;
            winnerImgSrc = winnerO;
        } else if (counterBlue === 2 && counterOrange === 1) {
            imgSrc = b2o1;
            winnerImgSrc = winnerB;
        } else if (counterBlue === 1 && counterOrange === 2) {
            imgSrc = b1o2;
            winnerImgSrc = winnerO;
        } else if (counterBlue === 1 && counterOrange === 1) {
            imgSrc = b1o1;
        }
        return (
            <div id="rl-overlay">
                <img ref="winnerImg" src={winnerImgSrc} alt="" />
                <img ref="img" src={imgSrc} alt="" />
                <button className="blue" onClick={this.updateBlue} disabled={disabled}>Blau</button>
                <button className="orange" onClick={this.updateOrange} disabled={disabled}>Orange</button>
                <button className="reset" onClick={() => { this.setState({ counterBlue: 0, counterOrange: 0, disabled: false }); }}>Reset</button>
            </div>
        );
    }
}