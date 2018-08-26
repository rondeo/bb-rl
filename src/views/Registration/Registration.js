import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import $ from "jquery";
import {Helmet} from "react-helmet";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Rotate from "react-reveal/Rotate";

import UsernameInput from "../../components/UsernameInput/UsernameInput";

import {login} from "../../actions/ApplicationActions";
import {searchToObject} from "../../utils/helperFunctions";
import API from "./../../utils/API";
import {ERROR_PASSWORD_NOT_EQUAL} from "./../../constants";

import "./Registration.css";

class Registration extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            errors: null,
            usernameValid: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();

        let formData = $(this.refs.form).serializeObject();
        console.log("submit", this.state.usernameValid, formData);

        this.setState({ errors: null });

        if (this.state.usernameValid && formData.password1 === formData.password2) {
            API.getInstance()._fetch("/user", "POST", {
                mail: formData.mail,
                password: formData.password1,
                username: formData.username
            }).then(response => {
                console.log(response);
                if (response.error) {
                    console.error("Status: " + response.status + ", Error: " + response.error + ", Message: " + response.message);
                }
                if (response.id) {
                    let search = searchToObject(this.props.location.search);
                    this.props.dispatch(login(response));
                    this.props.history.push(search.next || "/");
                }
            });
        } else if (formData.password1 !== formData.password2) {
            this.setState({ errors: {password: ERROR_PASSWORD_NOT_EQUAL} });
        }
    }

    render() {
        let { errors } = this.state;
        let passwordErrorDiv = null,
            passwordErrorText = null;
        if (errors && errors.password) {
            switch (errors.password) {
                case ERROR_PASSWORD_NOT_EQUAL:
                    passwordErrorText = "Die Passwörter stimmen nicht überein";
                    break;
                default:
                    passwordErrorText = "Ups, etwas ist schiefgelaufen. Bitte wende dich an einen Admin.";
                    break;
            }
            passwordErrorDiv = <div className="alert alert-danger">{passwordErrorText}</div>;
        }
        return (
            <div className="view full-container registration">
                <div className="container">
                    <Helmet><title>Registration - Battleground-Bulls</title></Helmet>
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            <Fade top>
                                <h1>Registrierung</h1>
                            </Fade>
                            <form ref="form" onSubmit={this.onSubmit}>
                                <Fade top>
                                    <div className="required-text">Die mit <span className="required">*</span> gekennzeichneten Felder bitte ausfüllen.</div>
                                </Fade>
                                <Flip top>
                                    <div className="form-group">
                                        <label htmlFor="mail">E-Mail-Adresse</label>
                                        <input type="email" className="form-control" id="mail" name="mail" aria-describedby="mailHelp" placeholder="E-Mail-Adresse"/>
                                        <small id="mailHelp" className="form-text mail-info">Wir werden deine E-Mail-Adresse niemals mit anderen teilen.</small>
                                    </div>
                                </Flip>
                                <Flip bottom>
                                    <UsernameInput onChange={valid => {this.setState({usernameValid: valid});}}/>
                                </Flip>
                                <Flip top>
                                    <div className="form-group">
                                        <label htmlFor="password1">Passwort <span className="required">*</span></label>
                                        <input type="password" className="form-control" id="password1" name="password1" placeholder="Passwort" required/>
                                    </div>
                                </Flip>
                                <Flip bottom>
                                    <div className="form-group">
                                        <label htmlFor="password2">Passwort wiederholen <span className="required">*</span></label>
                                        <input type="password" className="form-control" id="password2" name="password2" placeholder="Passwort wiederholen" required/>
                                        {passwordErrorDiv}
                                    </div>
                                </Flip>
                                <Rotate bottom left>
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="privacy" required/>
                                        <label className="form-check-label" htmlFor="privacy">Bitte akzeptiere unsere <Link to="/datenschutz" target="_blank">Datenschutzbestimmungen</Link>.</label>
                                    </div>
                                </Rotate>
                                <Rotate bottom right>
                                    <button type="submit" className="btn white">Registrierung abschließen</button>
                                </Rotate>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default connect()(Registration);