import React from "react";
import $ from "jquery";

import API from "../../utils/API";

import "./TournamentRegistration.css";

export default class TournamentRegistration extends React.PureComponent {

    onSubmit(e) {
        e.preventDefault();
        let formData = $("form").serializeObject();
        console.log(formData);

        let headers = new Headers();
        headers.append("Content-Type", "application/json");

        /*API.getInstance()._fetch("http://localhost/bb-rl/src/views/TournamentRegistration/formmailer.php", "POST", null, null, null, "").then(json => {
            console.log("response:", json);
        });*/
        fetch("http://localhost/bb-rl/src/views/TournamentRegistration/formmailer.php", {
            body: JSON.stringify(formData),
            method: "POST",
            headers: headers,
            mode: "no-cors"
        })
            .then(response => response.json())
            .then(json => {
                console.log("JSON:", json);
            })
            .catch(error => {
                console.error("Unexpected Error in API", error);
            });
        /*fetch("/php/formmailer.php", {
            mode: "no-cors",
        })*/
    }

    render() {
        return (
            <div className="view full-container tournament-registration">
                <div className="container">
                    <h1><u>Turnieranmeldung Rocket League</u></h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTeamName">Teamname *</label>
                                <input type="text" name="teamname" className="form-control" id="inputTeamName" placeholder="Teamname" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1">Mitglied 1 *</label>
                                <input type="text" className="form-control" id="inputMember1" placeholder="Mitglied 1" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember1Rank">Rang *</label>
                                <select id="inputMember1Rank" className="form-control" >
                                    <option selected>Bitte auswählen</option>
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
                                <input type="text" className="form-control" id="inputMember2" placeholder="Mitglied 2" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember2Rank">Rang *</label>
                                <select id="inputMember2Rank" className="form-control" >
                                    <option selected>Bitte auswählen</option>
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
                                <label htmlFor="inputMember3">Mitglied 3 *</label>
                                <input type="text" className="form-control" id="inputMember3" placeholder="Mitglied 3" />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMember3Rank">Rang *</label>
                                <select id="inputMember3Rank" className="form-control" >
                                    <option selected>Bitte auswählen</option>
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
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember1">Steam Link Member 1 *</label>
                            <input type="text" className="form-control" id="inputSteamLinkMember1" placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember2">Steam Link Member 2 *</label>
                            <input type="text" className="form-control" id="inputSteamLinkMember2"
                                   placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSteamLinkMember3">Steam Link Member 3 *</label>
                            <input type="text" className="form-control" id="inputSteamLinkMember3"
                                   placeholder="Bsp.: https://steamcommunity.com/id/xPainHunt3r/" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputDevice">Welche Plattform nutzt ihr? *</label>
                                <select id="inputDevice" className="form-control" >
                                    <option selected>Bitte auswählen</option>
                                    <option>PC</option>
                                    <option>Playstation 4</option>
                                    <option>Nintendo Switch</option>
                                    <option>XBOX</option>
                                </select>
                                </div>
                            </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">Anmeldebestätigung per E-Mail</label>
                            <input type="email" className="form-control" id="inputSuccessfulCheckIn"
                                   placeholder="Bsp.: Max.Mustermann@Beispiel.de (Optional)"/>
                        </div>
                        <div className="form-group">
                            <label>* Pflichtfeld</label>
                        </div>

                        <button type="submit" className="btn white">Absenden</button>
                    </form>
                </div>
            </div>
        );
    }
}
