import React, {PureComponent} from 'react';
import $ from 'jquery';

import './Login.css';

export default class Login extends PureComponent {

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

        console.log("submit", formData);

        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa(formData.username + ":" + formData.password));

        fetch("http://localhost:9000/user/login", {
            headers: headers
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                if (json.error) {
                    console.error("Status: " + json.status + ", Error: " + json.error + ", Message: " + json.message);
                }
                // Save data and greet user; save basic auth in cookie
                console.log(json);
            })
            .catch(function (error) {
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