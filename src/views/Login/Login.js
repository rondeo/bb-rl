import React from 'react';
import $ from 'jquery';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";

import {login} from "../../actions/ApplicationActions";

import API from "../../utils/API";
import {searchToObject} from '../../utils/helperFunctions';

import './Login.css';

class Login extends React.PureComponent {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();
        let formData = $("form").serializeObject();

        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(formData.username + ":" + formData.password));

        API.getInstance()._fetch("/user/login", "POST", null, null, {
            "Authorization": "Basic " + btoa(formData.username + ":" + formData.password)
        }).then(json => {
            if (json.error) {
                console.error("Status: " + json.status + ", Error: " + json.error + ", Message: " + json.message);
            }
            let search = searchToObject(this.props.location.search);
            this.props.dispatch(login($.extend(json, {password: formData.password})));
            this.props.history.push(search.next || "/de");
        });
    }

    renderAccessDenied() {
        let search = searchToObject(this.props.location.search);
        return search.role ? (
            <div className="access-denied">
                <Helmet><title>Zugriff verweigert - Battleground-Bulls</title></Helmet>
                <div className="alert alert-danger">
                    <h1>Zugriff verweigert.</h1> <br/> Bitte logge dich mit der richtigen Berechtigung ein.
                </div>
            </div>
        ) : null;
    }

    render() {
        return (
            <div className="view full-container login">
                <div className="container">
                    <Helmet><title>Login - Battleground-Bulls</title></Helmet>

                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3">
                            {this.renderAccessDenied()}

                            <h1>Login</h1>

                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="username">Benutzername</label>
                                    <input type="text" className="form-control" id="username" name="username" placeholder="Benutzername" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Passwort</label>
                                    <input type="password" className="form-control" id="password" name="password" placeholder="Passwort" required/>
                                </div>
                                <button type="submit" className="btn white">Einloggen</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(Login);