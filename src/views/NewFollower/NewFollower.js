import React from "react";
import $ from "jquery";

import bbFollowGif from "./bb-follow.gif";

import "./NewFollower.css";

export default class NewFollower extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            followerQueue: [],
            startTime: Date.now()
        };
    }

    componentDidMount() {
        this.testFollow = this.testFollow.bind(this);

        $("body").addClass("blank");

        setInterval(() => {
            let followerQueue = this.state.followerQueue.slice(0);
            console.log("followerQueue:", followerQueue);
            if (followerQueue.length > 0) {
                let name = followerQueue[0].name;
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
                                followerQueue.shift();

                                this.setState({ followerQueue: followerQueue });
                            }, 5000);
                        });
                }, 3000);
            }
            this.getFollowers();
        }, 1000 * 10);   // time to wait - duration of animation plus delay
    }

    componentWillUnmount() {
        $("body").removeClass("blank");
    }

    getFollowers () {
        const username = "battleground_bulls";
        const url = "https://api.twitch.tv/kraken/channels/" + username + "/follows?client_id=swviygtzpvpvtpm5r79410wd6221th&limit=10";

        fetch(url)
            .then( response => {
                return response.json();
            })
            .then( json => {
                let followerQueue = this.state.followerQueue.slice(0);

                let followers = json.follows.map(follower => {
                    return { id: follower.user._id, created_at: follower.created_at, name: follower.user.display_name }
                });

                for (let follower of followers) {
                    let followCreatedAtPlusTwoHours = new Date(follower.created_at);
                    followCreatedAtPlusTwoHours.setHours(followCreatedAtPlusTwoHours.getHours() + 2);
                    if (Date.parse(followCreatedAtPlusTwoHours) > this.state.startTime) {
                        followerQueue.push(follower);
                    }
                }

                this.setState({
                    followerQueue: followerQueue
                });
            })
            .catch( error => {
                console.log("Error:", error);
            });
    }

    testFollow() {
        let newFollower = this.state.followerQueue.splice(0);
        newFollower.push({id: "0", name: Math.random().toString(36).substring(7)});
        console.log(newFollower);
        this.setState({
            followerQueue: newFollower
        });
    }

    render() {
        return (
            <div id="new-follower">
                <span ref="text" className="follower-text">
                    <span ref="name" className="follower-name">FOLLOWER</span> just followed!
                </span>

                <img ref="bg" className="follower-background" alt="" />

                <button onClick={this.testFollow.bind(this)} className="test-follow-btn">Test follow</button>
            </div>
        );
    }
}