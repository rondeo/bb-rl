import React from 'react';
import $ from 'jquery';
import {inject, observer} from 'mobx-react';
import isEqual from "lodash/isEqual";

import {searchToObject} from '../../utils/helperFunctions';

import './Login.css';
import API from "../../utils/API";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(this.props.UserStore.user, nextProps.UserStore.user);
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
            // Save data and greet user; save basic auth in cookie
            console.log(this, json, this.props.history);
            sessionStorage.setItem("user", JSON.stringify(json));
            let search = searchToObject(this.props.location.search);
            this.props.history.push(search.next || "/");
            this.props.UserStore.setUser(json);
        });
    }

    render() {
        return (
            <div className="container login">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
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
                            <button type="submit" className="btn btn-primary">Einloggen</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default inject("UserStore")(observer(Login));