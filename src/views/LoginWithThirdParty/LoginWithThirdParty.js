import React, {PureComponent} from 'react';
import $ from 'jquery';

import signInMs from './img/sign-in-with-microsoft-dark.png';
import signInSteam from './img/sign-in-with-steam-dark.png';

import './LoginWithThirdParty.css';

export default class LoginWithThirdParty extends PureComponent {

    constructor(props) {
        super(props);

        this.onSteamLogin = this.onSteamLogin.bind(this);

        let steamUser = new RegExp('[?&]steamuser=([^&#]*)').exec(window.location.href);
        if (steamUser !== null) {
            steamUser = JSON.parse(decodeURIComponent(steamUser[1]));
        }

        this.state = {
            steamUser: steamUser
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onSteamLogin() {
        console.log("steam submit");

        /*fetch("/public/steam/login.php", {
            mode: "no-cors"
        })
            .then(function(response) {
                console.log(response);
                return response.json();
            })
            .then(function(json) {
                console.log(json);
            })
            .catch(function(error) {
                console.log(error);
            });
            */
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("submit", $("form").serializeArray());

        let headers = new Headers();
        headers.append("Authorization", "Basic " + btoa("bbadmin:bbadminapi"));

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
        let {steamUser} = this.state;
        console.log(steamUser);
        return (
            <div className="container login">

                <div className="login-wrapper">
                    <h1>Turnieranmeldung</h1>

                    <a href="http://localhost/battleground-bulls.de/public/steam/login.php?redirect=http://localhost:3000/anmelden">
                        <img className="steam-login img-responsive"
                             src={signInSteam}
                             alt="Sign in with Steam"
                             onClick={this.onSteamLogin}
                        />
                    </a>
                    <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?
                                client_id=16f74671-70ce-4e39-8d7f-e9f2e578f3b3
                                &response_type=code
                                &redirect_uri=http%3A%2F%2Flocalhost:3000
                                &response_mode=query
                                &scope=user.read
                                &state=12345">
                        <img className="microsoft-login img-responsive"
                             src={signInMs}
                             alt="Sign in with Microsoft"
                        />
                    </a>
                    {/*
                        <form className="form-signin" onSubmit={this.onSubmit.bind(this)}>

                        <div className="form-label-group">
                        <input type="email" id="inputEmail" name="mail" className="form-control" placeholder="E-Mail-Adresse" required="" autoFocus="" />
                        <label htmlFor="inputEmail">E-Mail-Adresse</label>
                        </div>

                        <div className="form-label-group">
                        <input type="password" id="inputPassword" name="password" className="form-control" placeholder="Passwort" required="" />
                        <label htmlFor="inputPassword">Passwort</label>
                        </div>

                        <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" name="remember-me" value="remember-me" /> Remember me
                        </label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block" type="submit">Anmelden</button>
                        </form>
                    */}
                </div>
            </div>
        );
    }
}