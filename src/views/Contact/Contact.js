import React from "react";
import $ from "jquery";
import {Helmet} from "react-helmet";

import ReCAPTCHA from "../../components/ReCAPTCHA/ReCAPTCHA";

import "./Contact.css";
import {injectIntl} from "react-intl";

import messages from "../../i18n/messages";

export class Contact extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            result: null,
            sending: false,
            bugReport: false,
            sendMessages: {
                successfullSendConfirmation: "",
                successfullSend: "",
                errorSend: ""
            }
        };
    }

    //TODO: Add translation
    getStringForFormType = () => {
        const {bugReport} = this.state;
        const formData = $("form").serializeObject();

        if (bugReport) {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: "Du hast den Bug erfolgreich gemeldet! Eine Best&auml;tigungsmail wurde" +
                        "an " + formData.mail + " versendet.",
                    successfullSend: "Du hast den Bug erfolgreich gemeldet!",
                    errorSend: "Leider ist beim Melden des Bugs ein Fehler aufgetreten! Bitte wendet euch an den Support " +
                        "(<a href='mailto:support@battleground-bulls.de'>support@battleground-bulls.de</a>)."
                }
            });
        } else {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: "Du hast das Kontaktformular erfolgreich gesendet!" +
                        "Eine Best&auml;tigungsmail wurde an " + formData.mail + " versendet.",
                    successfullSend: "Du hast das Kontaktformular erfolgreich gesendet!",
                    errorSend: "Leider ist beim Absenden des Formulars ein Fehler aufgetreten! Bitte wendet euch an den Support " +
                        "(<a href='mailto:support@battleground-bulls.de'>support@battleground-bulls.de</a>)."
                }
            });
        }
    };

    onSubmit() {
        fetch("/php/contact.php", {
            body: JSON.stringify($("form").serialize()),
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "KindOfForm": this.state.bugReport ? "bugReport" : "contactForm"
            }
        })
            .then(response => response.json())
            .then(json => {
                //console.log("JSON:", json);
                this.setState({result: json, sending: false});
            })
            .catch(error => {
                console.error("Unexpected error in the sending the form: ", error);
            });
        ReCAPTCHA.reset();
    }

    changeFormType = (e) => {
        let isBugReport = false;
        if (e.target.value === "bugReport") {
            isBugReport = true;
        }
        this.setState({
            bugReport: isBugReport
        }, this.getStringForFormType());
    };

    subjectChange = (e) => {
        if (!e.target.value && this.state.bugReport) {
            e.target.value = "BugReport"
        }
    };

    renderResult() {
        const {result, sendMessages} = this.state;

        if (result) {
            switch (result.code) {
                case "mail-sent-with-confirmation":
                    return <div className="alert alert-success" role="alert">
                        Erfolg!
                        {sendMessages.successfullSendConfirmation}
                    </div>;
                case "mail-sent":
                    return <div className="alert alert-success" role="alert">
                        Erfolg2!
                        {sendMessages.successfullSend}
                    </div>;
                case "mail-not-sent":
                    return <div className="alert alert-danger" role="alert">
                        Error
                        {sendMessages.errorSend}
                    </div>;
                default:
                    return;
            }
        }
    }

    componentDidMount() {
        this.getStringForFormType();
    }

    render() {
        const { sending, sendMessages, bugReport } = this.state;

        return (
            <div className="view full-container contact-form">
                <Helmet><title>{bugReport ? "Bug Reporting" : "Kontakt Formular"}} - Battleground-Bulls</title></Helmet>
                <div className="container">
                    <h1>{bugReport ? "Melden eines Bug" : "Nimm Kontakt mit uns auf"}</h1>
                    <select onChange={this.changeFormType}>
                        <option value="contact">Kontakt</option>
                        <option value="bugReport">BugReport</option>
                    </select>
                    <form onSubmit={(e) => { e.preventDefault(e); this.setState({ result: null, sending: true }); ReCAPTCHA.execute(e); }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTeamName">{bugReport ? "Betreff" : "Betreff*" }</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control blue blue"
                                    id="inputSubject"
                                    placeholder="Betreff"
                                    onChange={this.subjectChange}
                                    value={bugReport ? "Bug gefunden!" : "" }
                                    required={!bugReport}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">Nachricht*</label>
                            <textarea name="message" className="form-control blue" id="textareaMessage" placeholder={bugReport ? "Beschreibung des Bugs*" : "Deine Nachricht an uns"} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">Bestätigung per E-Mail</label>
                            <input type="email" name="mail" className="form-control blue" id="inputSuccessfulCheckIn" placeholder="Bsp.: Max.Mustermann@Beispiel.de (Optional)"/>
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
export default injectIntl(Contact);