import React from "react";
import moment from "moment";

//import "./../../../bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"

import "./MyProfile.css";

export default class MyProfile extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            birthday: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(date) {
        this.setState({
            birthday: date
        });
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="view full-container my-profile">
                <div className="container">
                    <h1>Mein Profil</h1>

                    <h3><u>Persönliche Informationen</u></h3>

                    <form onSubmit={this.onSubmit}>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputName">Name</label>
                                <input
                                    type="text"
                                    name="Name"
                                    className="form-control"
                                    id="inputName"
                                    placeholder="Name"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputSecondName">Nachname</label>
                                <input
                                    type="text"
                                    name="SecondName"
                                    className="form-control"
                                    id="inputSecondName"
                                    placeholder="Nachname"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputNickName">Nickname</label>
                                <input
                                    type="text"
                                    name="NickName"
                                    className="form-control"
                                    id="inputNickName"
                                    placeholder="Bsp.: Place"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="inputHome">Wohnort</label>
                                <input
                                    type="text"
                                    name="Home"
                                    className="form-control"
                                    id="inputHome"
                                    placeholder="Bsp.: Bremen"/>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputLand">Land</label>
                                <input
                                    type="text"
                                    name="Land"
                                    className="form-control"
                                    id="inputLand"
                                    placeholder="Bsp.: Deutschland"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-3">
                                <label htmlFor="birthday">Geburtstag</label>
                            </div>
                        </div>

                        <hr color="white" width="100%"/>

                        <h3><u>Gaming Informationen</u></h3>

                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputPlattform1">Plattform 1:</label>

                                <select name="Plattform1" className="form-control" id="inputPlattform1">
                                    <option>Bitte Wählen...</option>
                                    <option>Battle-Net</option>
                                    <option>Epic-Games</option>
                                    <option>Origin</option>
                                    <option>Steam</option>
                                    <option>Uplay</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputPlattform2">Plattform 2:</label>
                                <select name="Plattform2" className="form-control" id="inputPlattform2">
                                    <option>Bitte Wählen...</option>
                                    <option>Battle-Net</option>
                                    <option>Epic-Games</option>
                                    <option>Origin</option>
                                    <option>Steam</option>
                                    <option>Uplay</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputPlattform3">
                                    Plattform 3:
                                </label>

                                <select
                                    name="Plattform3"
                                    className="form-control"
                                    id="inputPlattform3">
                                    <option>Bitte Wählen...</option>
                                    <option>Battle-Net</option>
                                    <option>Epic-Games</option>
                                    <option>Origin</option>
                                    <option>Steam</option>
                                    <option>Uplay</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputFavourite">Lieblingsspiele</label>
                                <input
                                    type="text"
                                    name="Favourite"
                                    className="form-control"
                                    id="inputFavourite"
                                    placeholder="Bsp.: PUBG, CS:GO, Rocket League"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputClan">Clan | Community</label>
                                <input
                                    type="text"
                                    name="Clan"
                                    className="form-control"
                                    id="inputClan"
                                    placeholder="Bsp.: Battleground-Bulls"/>
                            </div>
                        </div>

                        <hr color="white" width="100%"/>

                        <h3><u>Deine Hardware</u></h3>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCase">Gehäuse</label>
                                <input
                                    type="text"
                                    name="Case"
                                    className="form-control"
                                    id="inputCase"
                                    placeholder="Bsp.: Be Quiet Dark Base 900 Pro"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCpu">CPU</label>
                                <input
                                    type="text"
                                    name="Cpu"
                                    className="form-control"
                                    id="inputCpu"
                                    placeholder="Bsp.: Intel Core i9 x7900"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMainboard">Mainboard</label>
                                <input
                                    type="text"
                                    name="Mainboard"
                                    className="form-control"
                                    id="inputMainboard"
                                    placeholder="Bsp.: MSI x299 xPower Gaming AC"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputRam">Arbeitsspeicher</label>
                                <input
                                    type="text"
                                    name="Ram"
                                    className="form-control"
                                    id="inputRam"
                                    placeholder="Bsp.: Corsair Vengance RGB 32 GB DDR4"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputGpu">Grafikkarte</label>
                                <input
                                    type="text"
                                    name="Gpu"
                                    className="form-control"
                                    id="inputGpu"
                                    placeholder="Bsp.: Nvidia Geforce GTX 1080 TI"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPsu">Netzteil</label>
                                <input
                                    type="text"
                                    name="Psu"
                                    className="form-control"
                                    id="inputPsu"
                                    placeholder="Bsp.: Be Quiet DarkPower 750 Watt"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMonitor">Monitor</label>
                                <input
                                    type="text"
                                    name="Monitor"
                                    className="form-control"
                                    id="inputMonitor"
                                    placeholder="Bsp.: Acer Preadtor x271"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputMice">Maus</label>
                                <input
                                    type="text"
                                    name="Mice"
                                    className="form-control"
                                    id="inputMice"
                                    placeholder="Bsp.: Logitech G903"/>
                            </div>
                        </div>
                        <div className="form-row">

                            <div className="form-group col-md-6">

                                <label htmlFor="inputKeyboard">Tastatur</label>

                                <input
                                    type="text"
                                    name="Keyboard"
                                    className="form-control"
                                    id="inputKeyboard"
                                    placeholder="Bsp.: Logitech G910 Orion Spark"/>

                            </div>

                            <div className="form-group col-md-6">

                                <label htmlFor="inputPad">Mauspad</label>

                                <input
                                    type="text"
                                    name="Pad"
                                    className="form-control"
                                    id="inputPad"
                                    placeholder="Bsp.: Razer Goliathus"/>

                            </div>

                        </div>

                        <hr color="white" width="100%"/>

                        <div className="form-row actions">
                            <div className="form-group col-md-6">
                                <button type="submit" className="btn white">Speichern</button>
                                <button type="reset" className="btn white">Zurücksetzen</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
