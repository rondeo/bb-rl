import React from 'react';
import $ from 'jquery';

import {searchToObject} from '../../utils/helperFunctions';

import './Login.css';

export default class Login extends React.PureComponent {

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

        fetch("http://localhost:9000/user/login", {
            headers: headers
        })
            .then(response => {
                return response.json();
            })
            .then(json => {
                if (json.error) {
                    console.error("Status: " + json.status + ", Error: " + json.error + ", Message: " + json.message);
                }
                // Save data and greet user; save basic auth in cookie
                console.log(json, this.props.history);
                sessionStorage.setItem("user", JSON.stringify(json));
                let search = searchToObject(this.props.location.search);
                this.props.history.push(search.next || "/");
            })
            .catch( error => {
                // Show error; user has to try again
                console.log(error);
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