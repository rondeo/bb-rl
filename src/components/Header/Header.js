import React from "react";
import {Link, withRouter} from "react-router-dom";
import classnames from "classnames";
import {inject, observer} from "mobx-react";
import isEqual from "lodash/isEqual";

import "./Header.css";

import logo from "./../../images/logo_100px.png";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: props.location.pathname + props.location.hash
        };
    }

    componentWillMount() {
        this.props.history.listen(route => {
            this.setState({
                active: route.pathname + route.hash
            });
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props.UserStore.user, nextProps.UserStore.user)
        return !isEqual(this.props.UserStore.user, nextProps.UserStore.user)
            || !isEqual(this.props.history, nextProps.history)
            || this.state.active !== nextState.active;
    }

    render() {
        let {active} = this.state;
        let {UserStore} = this.props;
        console.log(UserStore.user)
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link to="/#start" className="navbar-brand"><img src={logo} alt="Battleground-Bulls"/></Link>
                    <div className="navbar-toggler collapsed" data-toggle="collapse"
                         data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                         aria-label="Toggle navigation">
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto default">
                            <li className={classnames("nav-item", {"active": active === "/" || active === "/#start"})}>
                                <Link to={{pathname: "/", hash: "#start"}} className="nav-link">Start</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#teams"})}>
                                <Link to={{pathname: "/", hash: "#teams"}} className="nav-link disabled">Teams</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#spielplan"})}>
                                <Link to={{pathname: "/", hash: "#spielplan"}}
                                      className="nav-link disabled">Spielplan</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#bulls"})}>
                                <Link to={{pathname: "/", hash: "#bulls"}} className="nav-link">Über die Bulls</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#regeln"})}>
                                <Link to={{pathname: "/", hash: "#regeln"}} className="nav-link">Turnier-Regeln</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#partner"})}>
                                <Link to={{pathname: "/", hash: "#partner"}} className="nav-link">Partner</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-none d-xl-flex socials">
                            <li className="nav-item"><a className="nav-link" href="https://www.twitch.tv/battleground_bulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitch" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://discord.gg/gke2aYp" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/groups/BattlegroundBuLLs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://twitter.com/BattleBulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/channel/UCPSSW0COqKjF5nSn-3aYh7w" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                        </ul>
                        <ul className="navbar-nav sign-in">
                            {UserStore.user ? (
                                <li className="nav-item">
                                    Hallo {UserStore.user.username}! <div className="text-muted" onClick={function() { UserStore.setUser(null); }}>Logout</div>
                                </li>
                            )  : (
                                <li className="nav-item">
                                    <i className="fas fa-user d-none d-lg-inline-block" /> <Link to="/login" className="nav-link">Einloggen</Link> | <Link to="/registrieren" className="nav-link">Registrieren</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default withRouter(inject("UserStore")(observer(Header)));