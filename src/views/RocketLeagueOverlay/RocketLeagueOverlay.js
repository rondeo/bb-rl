import React from "react";
import $ from "jquery";

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
            counterOrange: 0
        };
    }

    componentDidMount() {
        $("body").addClass("blank");
    }

    componentWillUnmount() {
        $("body").removeClass("blank");
    }

    render() {
        let imgSrc = IMG_Blank;
        let winnerImgSrc = null;
        let { counterBlue, counterOrange } = this.state;
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
                <img ref="img" src={imgSrc} alt="" />
                <img ref="winnerImg" src={winnerImgSrc} alt="" />
                <button className="blue-1" onClick={() => { this.setState({ counterBlue: 1 }); }}>Blau 1</button>
                <button className="blue-2" onClick={() => { this.setState({ counterBlue: 2 }); }}>Blau 2</button>
                <button className="orange-1" onClick={() => { this.setState({ counterOrange: 1 }); }}>Orange 1</button>
                <button className="orange-2" onClick={() => { this.setState({ counterOrange: 2 }); }}>Orange 2</button>
                <button className="reset" onClick={() => { this.setState({ counterBlue: 0, counterOrange: 0 }); }}>Reset</button>
            </div>
        );
    }
}