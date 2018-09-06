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
        const {intl:{formatMessage}} = this.props;
        const formData = $("form").serializeObject();

        if (bugReport) {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: formatMessage(messages.sendFormSuccessfullMailBug) + formData.mail,
                    successfullSend: formatMessage(messages.sendFormSuccessfullBug),
                    errorSend: formatMessage(messages.sendFormError) + "(<a href='mailto:support@battleground-bulls.de'>support&commat;battleground-bulls.de</a>)."
                }
            });
        } else {
            this.setState({
                sendMessages: {
                    successfullSendConfirmation: formatMessage(messages.sendFormSuccessfullMail) + formData.mail,
                    successfullSend: formatMessage(messages.sendFormSuccessfull),
                    errorSend: formatMessage(messages.sendFormError) + "(<a href='mailto:support@battleground-bulls.de'>support&commat;battleground-bulls.de</a>)."
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
                        {sendMessages.successfullSendConfirmation}
                    </div>;
                case "mail-sent":
                    return <div className="alert alert-success" role="alert">
                        {sendMessages.successfullSend}
                    </div>;
                case "mail-not-sent":
                    return <div className="alert alert-danger" role="alert">
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
                                    value={bugReport ? formatMessage(messages.contactFormFoundBug) : "" }
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