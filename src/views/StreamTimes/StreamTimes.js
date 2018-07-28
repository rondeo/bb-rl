import React from "react";
import {Helmet} from "react-helmet";

import banner from "./Streamingzeiten.png";

import "./StreamTimes.css";

export default class StreamTimes extends React.PureComponent {
    render() {
        return (
            <div className="stream-times">
                <Helmet><title>Stream-Zeiten - Battleground-Bulls</title></Helmet>
                <img src={banner} alt="Streamzeiten" />

                <ul>
                    <li>
                        <div className="day">Dienstag</div>
                        <div className="time">ca 19:30 bis 23 Uhr</div>
                    </li>
                    <li>
                        <div className="day">Donnerstag</div>
                        <div className="time">ca 19:30 bis 23 Uhr</div>
                    </li>
                    <li>
                        <div className="day">Sonntag</div>
                        <div className="time">ca 16 bis 22 Uhr</div>
                    </li>
                </ul>

                <div className="note">
                    Alle anderen Tage streamen wir spontan. <br/>
                    Änderungen werden im Discord mitgeteilt!
                </div>
            </div>
        );
    }
}