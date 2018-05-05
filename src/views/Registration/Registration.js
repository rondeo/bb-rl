import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import $ from "jquery";

export default class Registration extends PureComponent {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("submit", $("form").serializeArray());

        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa("demo:demo"));

        fetch("http://localhost:9000/user", {
            headers: headers
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                if (json.error) {
                    console.error("Status: " + json.status + ", Error: " + json.error + ", Message: " + json.message);
                }
                console.log(json);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="container registration">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3">
                        <h1>Registrierung</h1>

                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="mail">E-Mail-Adresse</label>
                                <input type="email" className="form-control" id="mail" aria-describedby="mailHelp" placeholder="E-Mail-Adresse"/>
                                <small id="mailHelp" className="form-text text-muted">Wir werden deine E-Mail-Adresse niemals mit anderen teilen.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">Benutzername</label>
                                <input type="text" className="form-control" id="username" placeholder="Benutzername" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password1">Passwort</label>
                                <input type="password" className="form-control" id="password1" placeholder="Passwort" required/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">Passwort wiederholen</label>
                                <input type="password" className="form-control" id="password2" placeholder="Passwort wiederholen" required/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Bitte akzeptiere unsere <Link to="/datenschutz" target="_blank">Datenschutzbestimmungen</Link>.</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Registrierung abschließen</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}