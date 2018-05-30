import React from "react";
import $ from "jquery";

import bbFollowGif from "./bb-follow.gif";

import "./NewSub.css";

export default class NewSub extends React.PureComponent {

    constructor(props) {
        super(props);

        let accessToken = new RegExp('[?#]access_token=([^&#]*)').exec(window.location.href);
        if (accessToken !== null) {
            accessToken = accessToken[1];
        }

        this.state = {
            accessToken: accessToken,
            newSub: []
        };
    }

    componentDidMount() {
        this.testFollow = this.testFollow.bind(this);

        $("body").addClass("blank");

        let { accessToken } = this.state;

        if (accessToken) {

            this.ws = new WebSocket("wss://pubsub-edge.twitch.tv");

            this.ws.onopen = (event) => {
                console.log("Open connection");

                let listenToNewSub = {
                    "type": "LISTEN",
                    "nonce": "bb",
                    "data": {
                        "topics": ["channel-bits-events-v1.158902370"],
                        // "topics": ["channel-bits-events-v1.105542295"],
                        "auth_token": accessToken
                    }
                };
                this.ws.send(JSON.stringify(listenToNewSub));
            };

            this.ws.onmessage = (event) => {
                console.log(event.data);
            };

            setInterval(() => {
                let {newSub} = this.state;
                console.log("Sub", newSub);
                if (newSub.length > 0) {
                    let name = newSub[0].name;
                    console.log('Notifying about: ' + name);

                    $(this.refs.bg).attr("src", bbFollowGif).show();
                    setTimeout(() => {
                        $(this.refs.name).html(name);
                        $(this.refs.text)
                            .fadeIn(700, () => {
                                setTimeout(() => {
                                    $(this.refs.text).fadeOut(700, () => {
                                        $(this.refs.bg).attr("src", "").hide();
                                    });
                                    newSub.shift();
                                }, 5000);
                            });
                    }, 3000);
                }
            }, 1000 * 10);   // time to wait - duration of animation plus delay
        }
    }

    componentWillUnmount() {
        $("body").removeClass("blank");

        this.ws.close();
    }

    testFollow() {
        let newSub = this.state.newSub.splice(0);
        newSub.push({id: "0", name: Math.random().toString(36).substring(7)});
        this.setState({
            newSub: newSub
        });
    }

    render() {
        let { accessToken } = this.state,
            form = null;
        if (!accessToken) {
            form = (
                <form action="https://id.twitch.tv/oauth2/authorize">
                    <input type="text" name="client_id" value="w213h4q0il8sg1oeqdim41rlcp29v4" hidden readOnly/>
                    <input type="text" name="redirect_uri" value="http://localhost:3000/new-sub" hidden readOnly />
                    <input type="text" name="response_type" value="token id_token" hidden readOnly />
                    <input type="text" name="scope" value="bits:read openid" hidden readOnly />
                    <button type="submit" className="btn twitch">Anmelden</button>
                </form>);
        }
        return (
            <div id="new-sub">
                {form}

                <span ref="text" className="sub-text">
                    <span ref="name" className="sub-name">SUB</span> just subbed!
                </span>

                <img ref="bg" className="sub-background" alt="" />

                <button onClick={this.testFollow.bind(this)} className="test-follow-btn">Test sub</button>
            </div>
        );
    }
}