import React from "react";
import $ from "jquery";
import {Helmet} from "react-helmet";
import {injectIntl} from "react-intl";
import messages from "../../i18n/messages";

import ReCAPTCHA from "../../components/ReCAPTCHA/ReCAPTCHA";

import "./Contact.css";

class Contact extends React.PureComponent {

    constructor(props) {
        super(props);

        this.execRecaptcha = this.execRecaptcha.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            result: null,
            sending: false,
            recaptcha: false,
            bugReport: false,
            sendMessages: {
                successfullSendConfirmation: "",
                successfullSend: "",
                errorSend: ""
            }
        };
    }

    execRecaptcha(e) {
        e.preventDefault(e);

        this.setState({
            result: null,
            recaptcha: true,
            sending: false
        });

        ReCAPTCHA.execute(e);
    }

    onSubmit(recaptchaResponse) {
        console.log("real submit", recaptchaResponse);
        // Valid Recaptcha
        if (recaptchaResponse.success) {
            fetch("/php/contact.php", {
                body: JSON.stringify($("form").serialize()),
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(json => {
                    this.setState({result: json, recaptcha: false, sending: false});
                })
                .catch(error => {
                    this.setState({result: { code: "unknown-error" }, recaptcha: false, sending: false});
                    console.error("Unexpected error in tournament registration: ", error);
                });
        } else {
            this.setState({result: { code: "recaptcha-not-valid" }, recaptcha: false, sending: false});
        }
    }

    getStringForFormType = () => {
        const {bugReport} = this.state;
        const {intl:{formatMessage}} = this.props;
        const formData = $("form").serializeObject();

        if (bugReport) {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: formatMessage(messages.sendFormSuccessfullMailBug) + formData.mail,
                    successfullSend: formatMessage(messages.sendFormSuccessfullBug),
                    errorSend: formatMessage(messages.sendFormError) + <a href={"mailto:support@battleground-bulls.de"}>support&commat;battleground-bulls.de</a> + '.'
                }
            });
        } else {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: formatMessage(messages.sendFormSuccessfullMail) + formData.mail,
                    successfullSend: formatMessage(messages.sendFormSuccessfull),
                    errorSend: formatMessage(messages.sendFormError) + <a href={"mailto:support@battleground-bulls.de"}>support&commat;battleground-bulls.de</a> + '.'
                }
            });
        }
    };

    changeFormType = (e) => {
        let isBugReport = false;
        if (e.target.value === "bugReport") {
            isBugReport = true;
        }
        this.setState({
            bugReport: isBugReport
        });
    };

    subjectChange = (e) => {
        const {intl:{formatMessage}} = this.props;
        if (!e.target.value && this.state.bugReport) {
            e.target.value = formatMessage(messages.contactFormFoundBug);
        }
    };

    renderResult() {
        const {intl:{formatMessage}} = this.props;
        const {result, sendMessages, recaptcha, sending} = this.state;

        if (recaptcha) {
            switch (result.code) {
                case "mail-sent-with-confirmation":
                    return <div>
                        <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoRecaptcha)}</div>
                        <div className="alert alert-success" role="alert" >;
                            {sendMessages.successfullSendConfirmation}
                        </div>
                    </div>;
                case "mail-sent":
                    return <div>
                        <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoRecaptcha)}</div>
                        <div className="alert alert-success" role="alert">
                            {sendMessages.successfullSend}
                        </div>
                    </div>;
                case "mail-not-sent":
                    return <div>
                        <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoRecaptcha)}</div>
                        <div className="alert alert-danger" role="alert">
                            {sendMessages.errorSend}
                        </div>
                    </div>;
                default:
                    return;
            }
        } else if (sending) {
            return <div className="alert alert-info" role="alert">{formatMessage(messages.tournamentRegistrationInfoMailSending)}</div>;
        }
    }

    componentDidMount() {
        this.getStringForFormType();
    }

    render() {
        const { sending, bugReport } = this.state;
        const {intl:{formatMessage}} = this.props;

        return (
            <div className="view full-container contact-form">
                <Helmet><title>{bugReport ? formatMessage(messages.bugReportTitle) : formatMessage(messages.contactFormTitle)} - Battleground-Bulls</title></Helmet>
                <div className="container">
                    <h1>{bugReport ? formatMessage(messages.bugReportTitle) : formatMessage(messages.contactFormTitle)}</h1>
                    <form onSubmit={(e) => { e.preventDefault(e); this.setState({ result: null, sending: true }); ReCAPTCHA.execute(e); }}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="selectForm">{formatMessage(messages.contactFormSelection)}*</label>
                                <select id="selectForm" onChange={this.changeFormType} className="form-control blue blue">
                                    <option value="contact">{formatMessage(messages.contactFormSelectionContact)}</option>
                                    <option value="bugReport">{formatMessage(messages.contactFormSelectionBugReport)}</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputSubject">{formatMessage(messages.contactFormSubject)}*</label>
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control blue blue"
                                    id="inputSubject"
                                    placeholder={formatMessage(messages.contactFormSubject)}
                                    onChange={this.subjectChange}
                                    defaultValue={bugReport ? formatMessage(messages.contactFormFoundBug) : "" }
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">{formatMessage(messages.contactFormMessage)}*</label>
                            <textarea name="message" className="form-control blue" id="textareaMessage"rows="7" placeholder={bugReport ? formatMessage(messages.contactFormMessagePlaceholderBug) + "*" : formatMessage(messages.contactFormMessagePlaceholder) + "*"} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputSuccessfulCheckIn">{formatMessage(messages.contactFormRequestConfirmationMail)}</label>
                            <input type="email" name="mail" className="form-control blue" id="inputSuccessfulCheckIn" placeholder={formatMessage(messages.contactFormRequestConfirmationMailPlaceholder)}/>
                        </div>
                        <div className="form-group">
                            <label>* {formatMessage(messages.contactFormRequiredText)}</label>
                        </div>
                        <div className="form-group">
                            {sending ? <button className="btn white disabled" disabled>{formatMessage(messages.contactFormSendBtn)} <i className="fas fa-cog fa-spin" /></button> : <button type="submit" className="btn white">{formatMessage(messages.contactFormSendBtn)}</button>}
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