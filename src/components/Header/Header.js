import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'

import './Header.css';

import logo from './logo.png';

export default class Header extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            active: props.location.pathname + props.location.hash
        };
    }

    componentWillMount() {
        this.props.history.listen( route => {
           this.setState({
               active: route.pathname + route.hash
           });
        })
    }

    render() {
        let { active } = this.state;
        return (
            <nav className="navbar navbar-expand-md">
                <div className="container">
                    <Link to="/" className="navbar-brand"><img src={logo} alt="Battleground-Bulls" /></Link>
                    <div className="navbar-toggler collapsed" data-toggle="collapse"
                         data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                         aria-label="Toggle navigation">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mr-auto default">
                            <li className={classnames("nav-item", {"active": active === "/"})}>
                                <Link to="/" className="nav-link disabled">Start</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#teams"})}>
                                <Link to="/#teams" className="nav-link">Teams</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#spielplan"})}>
                                <Link to="/#spielplan" className="nav-link">Spielplan</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#bulls"})}>
                                <Link to="/#bulls" className="nav-link">Über die Bulls</Link>
                            </li>
                            <li className={classnames("nav-item", {"active": active === "/#regeln"})}>
                                <Link to="/#regeln" className="nav-link">Turnier-Regeln</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav d-none d-md-flex socials">
                            <li className="nav-item"><a className="nav-link" href="https://www.twitch.tv/battleground_bulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitch" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://discord.gg/gke2aYp" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/groups/BattlegroundBuLLs/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://twitter.com/BattleBulls" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                            <li className="nav-item"><a className="nav-link" href="https://www.youtube.com/channel/UCPSSW0COqKjF5nSn-3aYh7w" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube" /></a></li>
                        </ul>
                        <ul className="navbar-nav sign-in">
                            <li className={classnames("nav-item", {"active": active === "/anmelden"})}>
                                <Link to="/anmelden" className="nav-link"><i className="fas fa-sign-in-alt d-none d-md-inline-block" /> Anmelden | Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}