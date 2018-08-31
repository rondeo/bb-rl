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
            bugReport: false
        };
    }

    onSubmit() {
        fetch( "/php/contact.php", {
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
                this.setState({ result: json, sending: false });
            })
            .catch(error => {
                console.error("Unexpected error in the sending the form: ", error);
            });
        ReCAPTCHA.reset();
    }

    renderResult() {
        let { result, bugReport } = this.state;
        let formData = $("form").serializeObject();
        let successfullSendConfirmation;
        let successfullSend;
        let errorSend;

        if(bugReport) {
           successfullSendConfirmation = 'Du hast den Bug erfolgreich gemeldet! Eine Best&auml;tigungsmail wurde' +
               'an ' + formData.mail + ' versendet.';
           successfullSend = 'Du hast den Bug erfolgreich gemeldet!';
           errorSend = 'Leider ist beim Melden des Bugs ein Fehler aufgetreten! Bitte wendet euch an den Support ' +
               '(<a href="mailto:support@battleground-bulls.de">support@battleground-bulls.de</a>).';
        } else {
           successfullSendConfirmation = 'Du hast das Kontaktformular erfolgreich gesendet!' +
               'Eine Best&auml;tigungsmail wurde an ' + formData.mail + ' versendet.';
           successfullSend = 'Du hast das Kontaktformular erfolgreich gesendet!';
            errorSend = 'Leider ist beim Absenden des Formulars ein Fehler aufgetreten! Bitte wendet euch an den Support ' +
                '(<a href="mailto:support@battleground-bulls.de">support@battleground-bulls.de</a>).';
        }

        if (result) {
            switch (result.code) {
                case "mail-sent-with-confirmation":
                    return <div className="alert alert-success" role="alert">
                        {successfullSendConfirmation}
                    </div>;
                case "mail-sent":
                    return <div className="alert alert-success" role="alert">
                        {successfullSend}
                    </div>;
                case "mail-not-sent":
                    return <div className="alert alert-danger" role="alert">
                        {errorSend}
                    </div>;
                default:
                    return;
            }
        }
    }

    render() {
        let { sending, bugReport } = this.state;
        let helmetTitle;
        let headline;

        if(bugReport) {
            helmetTitle = 'Bug Reporting';
            headline = 'Melden eines Bug';
        } else {
            helmetTitle = 'Kontakt Formular';
            headline = 'Nimm Kontakt mit uns auf'
        }

        return (
            <div className="view full-container contact-form">
                <Helmet><title>{helmetTitle} - Battleground-Bulls</title></Helmet>
                <div className="container">
                    <h1>{headline}</h1>
                    <form onSubmit={(e) => { e.preventDefault(e); this.setState({ result: null, sending: true }); ReCAPTCHA.execute(e); }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputTeamName">Betreff *</label>
                                <input
                                    type="text"
                                    name="Team-Name"
                                    className="form-control blue blue"
                                    id="inputTeamName"
                                    placeholder="Betreff"
                                    value={(() => {if(bugReport) { return "Bug gefunden!" } else { return ""; }})}
                                    required
                                />
                            </div>
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