import React from "react";
import {Link} from "react-router-dom";
import $ from "jquery";

import API from "./../../utils/API";
import {ERROR_PASSWORD_NOT_EQUAL} from "./../../constants";

import "./Registration.css";
import {login} from "../../actions/ApplicationActions";
import {searchToObject} from "../../utils/helperFunctions";
import {connect} from "react-redux";

class Registration extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            usernameStatus: null,
            errors: null
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();

        let formData = $(this.refs.form).serializeObject();
        console.log("submit", this.state.usernameStatus, formData);

        this.setState({ errors: null });

        if (this.state.usernameStatus === 204 && formData.password1 === formData.password2) {
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

    onUsernameChange(e) {
        let input = $(e.target);
        clearTimeout(this.usernameChangeTimeout);
        this.usernameChangeTimeout = setTimeout(() => {
            let username = input.val();
            API.getInstance()._fetch("/user/checkUsername", "POST", {username: username})
                .always(response => {
                    this.setState({ usernameStatus: response.status });
                });
        }, 500);
    }

    render() {
        let { usernameStatus, errors } = this.state;
        console.log(usernameStatus)
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
            <div className="container registration">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <h1>Registrierung</h1>

                        <form ref="form" onSubmit={this.onSubmit}>
                            <div className="required-text">Die mit <span className="required">*</span> gekennzeichneten Felder bitte ausfüllen.</div>
                            <div className="form-group">
                                <label htmlFor="mail">E-Mail-Adresse</label>
                                <input type="email" className="form-control" id="mail" name="mail" aria-describedby="mailHelp" placeholder="E-Mail-Adresse"/>
                                <small id="mailHelp" className="form-text text-muted">Wir werden deine E-Mail-Adresse niemals mit anderen teilen.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Benutzername <span className="required">*</span></label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="Benutzername" onChange={this.onUsernameChange} required/>
                                {usernameStatus ? usernameStatus === 204 ? (
                                    <div className="alert alert-success" role="alert">Benutzername ist verfügbar</div>
                                ) : (
                                    <div className="alert alert-danger" role="alert">Benutzername ist leider schon vergeben</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Passwort <span className="required">*</span></label>
                                <input type="password" className="form-control" id="password1" name="password1" placeholder="Passwort" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Passwort wiederholen <span className="required">*</span></label>
                                <input type="password" className="form-control" id="password2" name="password2" placeholder="Passwort wiederholen" required/>
                                {passwordErrorDiv}
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="privacy" required/>
                                <label className="form-check-label" htmlFor="privacy">Bitte akzeptiere unsere <Link to="/datenschutz" target="_blank">Datenschutzbestimmungen</Link>.</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Registrierung abschließen</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        ...state
    };
}
export default connect(mapStateToProps)(Registration);