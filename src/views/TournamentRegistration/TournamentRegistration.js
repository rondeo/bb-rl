import React from "react";

export default class TournamentRegistration extends React.PureComponent {

    render() {
        return (
            <div className="container tournament-registration">
                <h1>Turnieranmeldung Rocket League</h1>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputTeamName">Teamname</label>
                            <input type="text" className="form-control" id="inputTeamName" placeholder="Teamname"/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMitglied1">Mitglied 1</label>
                            <input type="text" className="form-control" id="inputMitglied1" placeholder="Mitglied 1"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMitglied1Rang">Rang</label>
                            <select id="inputMitglied1Rang" className="form-control">
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
                            <label htmlFor="inputMitglied2">Mitglied 2</label>
                            <input type="text" className="form-control" id="inputMitglied2" placeholder="Mitglied 2"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMitglied2Rang">Rang</label>
                            <select id="inputMitglied2Rang" className="form-control">
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
                            <label htmlFor="inputMitglied3">Mitglied 3</label>
                            <input type="text" className="form-control" id="inputMitglied3" placeholder="Mitglied 3"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputMitglied3Rang">Rang</label>
                            <select id="inputMitglied3Rang" className="form-control">
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
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2"
                               placeholder="Apartment, studio, or floor"/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                                <option>2</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Check me out
                                </label>
                        </div>
                    </div>
                    <button type="submit" className="btn primary">Sign in</button>
                </form>
            </div>
        );
    }
}
