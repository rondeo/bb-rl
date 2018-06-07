import React from "react";
import $ from "jquery";

import bbFollowGif from "./bb-follow.gif";

import "./NewBits.css";

export default class NewBits extends React.PureComponent {

    constructor(props) {
        super(props);

        let accessToken = new RegExp('[?#]access_token=([^&#]*)').exec(window.location.href);
        if (accessToken !== null) {
            accessToken = accessToken[1];
        }

        this.state = {
            accessToken: accessToken,
            newBits: []
        };
    }

    componentDidMount() {
        this.testBitsDonation = this.testBitsDonation.bind(this);

        $("body").addClass("blank");

        let { accessToken } = this.state;

        if (accessToken) {

            this.ws = new WebSocket("wss://pubsub-edge.twitch.tv");

            this.ws.onopen = (event) => {
                console.log("Open connection");

                let listenToNewBits = {
                    "type": "LISTEN",
                    "nonce": "bb",
                    "data": {
                        "topics": ["channel-bits-events-v1.158902370"],
                        // "topics": ["channel-bits-events-v1.105542295"],
                        "auth_token": accessToken
                    }
                };
                this.ws.send(JSON.stringify(listenToNewBits));
            };

            this.ws.onmessage = (event) => {
                console.log(event.data);
            };

            setInterval(() => {
                let {newBits} = this.state;
                console.log("Bits", newBits);
                if (newBits.length > 0) {
                    let name = newBits[0].name;
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
                                    newBits.shift();
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

    testBitsDonation() {
        let newBits = this.state.newBits.splice(0);
        newBits.push({id: "0", name: Math.random().toString(36).substring(7)});
        this.setState({
            newBits: newBits
        });
    }

    render() {
        let { accessToken } = this.state,
            form = null;
        if (!accessToken) {
            // form = (
            //     <form action="https://id.twitch.tv/oauth2/authorize">
            //         <input type="text" name="client_id" value="w213h4q0il8sg1oeqdim41rlcp29v4" hidden readOnly/>
            //         <input type="text" name="redirect_uri" value="http://localhost:3000/new-bits" hidden readOnly />
            //         <input type="text" name="response_type" value="token id_token" hidden readOnly />
            //         <input type="text" name="scope" value="bits:read openid" hidden readOnly />
            //         <button type="submit" className="btn twitch">Anmelden</button>
            //     </form>);
            form = (
                <form action="https://id.twitch.tv/oauth2/authorize">
                    <input type="text" name="client_id" value="yp4vqw7qgi1nd01tm1vr1gqvaiap17" hidden readOnly/>
                    <input type="text" name="redirect_uri" value="https://www.battleground-bulls.de/new-bits" hidden readOnly />
                    <input type="text" name="response_type" value="token id_token" hidden readOnly />
                    <input type="text" name="scope" value="bits:read openid" hidden readOnly />
                    <button type="submit" className="btn twitch">Anmelden</button>
                </form>);
        }

        /*
        {
            "type":"MESSAGE",
            "data":{
                "topic":"channel-bits-events-v1.158902370",
                "message":{
                    "data":{
                        "user_name":"viruuzzz",
                        "channel_name":"battleground_bulls",
                        "user_id":"105542295",
                        "channel_id":"158902370",
                        "time":"2018-05-30T18:09:49.497Z",
                        "chat_message":"party1",
                        "bits_used":1,
                        "total_bits_used":1286,
                        "context":"cheer",
                        "badge_entitlement":null
                    },
                    "version":"1.0",
                    "message_type":"bits_event",
                    "message_id":"19dff631-643c-5a22-8806-84e3321a57be"
                }
            }
        }
         */
        return (
            <div id="new-bits">
                {form}

                <span ref="text" className="donation-text">
                    <span ref="name" className="username">BITS</span> just donated!
                </span>

                <img ref="bg" className="bits-background" alt="" />

                <button onClick={this.testBitsDonation.bind(this)} className="test-bits-donation-btn">Test bit donation</button>
            </div>
        );
    }
}