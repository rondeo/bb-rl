import React from "react";
import $ from "jquery";
import {Helmet} from "react-helmet";

import ReCAPTCHA from "../../components/ReCAPTCHA/ReCAPTCHA";

import "./TournamentRegistration.css";

export default class TournamentRegistration extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            result: null,
            sending: false
        };
    }

    onSubmit() {
        fetch("/php/tournament-registration.php", {
            body: JSON.stringify($("form").serialize()),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(json => {
                //console.log("JSON:", json);
                this.setState({ result: json, sending: false });
            })
            .catch(error => {
                console.error("Unexpected error in tournament registration: ", error);
            });
        ReCAPTCHA.reset();
    }

    renderResult() {
        let { result } = this.state;
        let render = null;
        let formData = $("form").serializeObject();
        if (result) {
            switch (result.code) {
                case "mail-sent-with-confirmation":
                    render = <div className="alert alert-success" role="alert">Eure Anmeldung war erfolgreich! Eine Bestätigungsmail wurde an {formData.mail} versandt.</div>;
                    break;
                case "mail-sent":
                    render = <div className="alert alert-success" role="alert">Eure Anmeldung war erfolgreich!</div>;
                    break;
                case "mail-not-sent":
                    render = <div className="alert alert-danger" role="alert">Eure Anmeldung war leider nicht erfolgreich! Bitte wendet euch an den Support (<a href="mailto:support@battleground-bulls.de">support@battleground-bulls.de</a>).</div>;
                    break;
                default:
                    break;
            }
        }
        return render;
    }

    render() {
        let { sending } = this.state;
        let teams = this.props.match.params ? this.props.match.params.teams : null;
        return (
            <div className="view full-container tournament-registration">
                <Helmet><title>Turnier-Anmeldung - Battleground-Bulls</title></Helmet>
                <div className="container">
                    <h1>Turnieranmeldung Rocket League {teams}</h1>
                    <form onSubmit={(e) => { e.preventDefault(e); this.setState({ result: null, sending: true }); ReCAPTCHA.execute(e); }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTeamName">Teamname *</label>
                                <input type="text" name="Team-Name" className="form-control" id="inputTeamName" placeholder="Teamname" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1">Mitglied 1 *</label>
                                <input type="text" name="Mitglied 1" className="form-control" id="inputMember1" placeholder="Mitglied 1" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1Rank">Rang *</label>
                                <select name="Rank Mitglied 1" id="inputMember1Rank" className="form-control" required>
                                    <option>Bronze 1</option>
                                    <option>Bronze 2</option>
                                    <option>Bronze 3</option>
                                    <option>Silber 1</option>
                                    <option>Silber 2</option>
                                    <option>Silber 3</option>
                                    <option>Gold 1</option>
                                    <option>Gold 2</option>
                                    <option>Gold 3</option>
                                    <option>Platin 1</option>
                                    <option>Platin 2</option>
                                    <option>Platin 3</option>
                                    <option>Diamant 1</option>
                                    <option>Diamant 2</option>
                                    <option>Diamant 3</option>
                                    <option>Champion 1</option>
                                    <option>Champion 2</option>
                                    <option>Champion 3</option>
                                    <option>Grand Champ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember2">Mitglied 2 *</label>
                                <input type="text" name="Mitglied 2" className="form-control" id="inputMember2" placeholder="Mitglied 2" required />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember2Rank">Rang *</label>
                                <select name="Rank Mitglied 2" id="inputMember2Rank" className="form-control" required>
                                    <option>Bronze 1</option>
                                    <option>Bronze 2</option>
                                    <option>Bronze 3</option>
                                    <option>Silber 1</option>
                                    <option>Silber 2</option>
                                    <option>Silber 3</option>
                                    <option>Gold 1</option>
                                    <option>Gold 2</option>
                                    <option>Gold 3</option>
                                    <option>Platin 1</option>
                                    <option>Platin 2</option>
                                    <option>Platin 3</option>
                                    <option>Diamant 1</option>
                                    <option>Diamant 2</option>
                                    <option>Diamant 3</option>
                                    <option>Champion 1</option>
                                    <option>Champion 2</option>
                                    <option>Champion 3</option>
                                    <option>Grand Champ</option>
                                </select>
                            </div>
                        </div>
                        { teams === "3vs3" ? (
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMember3">Mitglied 3 *</label>
                                    <input type="text" name="Mitglied 3" className="form-control" id="inputMember3" placeholder="Mitglied 3" required />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMember3Rank">Rang *</label>
                                    <select name="Rank Mitglied 3" id="inputMember3Rank" className="form-control" required>
                                        <option>Bronze 1</option>
                                        <option>Bronze 2</option>
                                        <option>Bronze 3</option>
                                        <option>Silber 1</option>
                                        <option>Silber 2</option>
                                        <option>Silber 3</option>
                                        <option>Gold 1</option>
                                        <option>Gold 2</option>
                                        <option>Gold 3</option>
                                        <option>Platin 1</option>
                                        <option>Platin 2</option>
                                        <option>Platin 3</option>
                                        <option>Diamant 1</option>
                                        <option>Diamant 2</option>
                                        <option>Diamant 3</option>
                                        <option>Champion 1</option>
                                        <option>Champion 2</option>
                                        <option>Champion 3</option>
                                        <option>Grand Champ</option>
                                    </select>
                                </div>
                            </div>
                        ) : null}
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember1">Steam Link Mitglied 1 *</label>
                            <input type="url" name="Steam Link Mitglied 1" className="form-control" id="inputSteamLinkMember1" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember2">Steam Link Mitglied 2 *</label>
                            <input type="url" name="Steam Link Mitglied 2" className="form-control" id="inputSteamLinkMember2" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                        </div>
                        { teams === "3vs3" ? (
                            <div className="form-group">
                                <label htmlFor="inputSteamLinkMember3">Steam Link Mitglied 3 *</label>
                                <input type="text" name="Steam Link Mitglied 3" className="form-control" id="inputSteamLinkMember3" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" required />
                            </div>
                        ) : null}
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputDevice">Welche Plattform nutzt ihr? *</label>
                                <select name="Plattform" id="inputDevice" className="form-control" required>
                                    <option>PC</option>
                                    <option>XBOX</option>
                                    <option>Playstation 4</option>
                                    <option>Nintendo Switch</option>
                                </select>
                                </div>
                            </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">Anmeldebestätigung per E-Mail</label>
                            <input type="email" name="mail" className="form-control" id="inputSuccessfulCheckIn" placeholder="Bsp.: Max.Mustermann@Beispiel.de (Optional)"/>
                        </div>
                        <div className="form-group">
                            <label>* Pflichtfeld</label>
                        </div>
                        <div className="form-group">
                            {sending ? <button className="btn white disabled" disabled>Anmelden <i className="fas fa-cog fa-spin" /></button> : <button type="submit" className="btn white">Anmelden</button>}
                        </div>

                        <ReCAPTCHA callback={this.onSubmit} />

                        {this.renderResult()}
                    </form>
                </div>
            </div>
        );
    }
}
