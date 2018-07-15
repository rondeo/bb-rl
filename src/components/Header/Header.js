import React from "react";
import {Link, withRouter} from "react-router-dom";
import classnames from "classnames";
import {connect} from "react-redux";
import $ from "jquery";

import {logout} from "../../actions/ApplicationActions";

import "./Header.css";

import logo from "./../../images/logo_100px.png";

class Header extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            active: props.location.pathname + props.location.hash,
            userSidebarOpen: false
        };

        this.hideSidebar = this.hideSidebar.bind(this);
        this.setUserSidebarWidth = this.setUserSidebarWidth.bind(this);
        this.toggleUserSidebar = this.toggleUserSidebar.bind(this);
    }

    componentWillMount() {
        this.props.history.listen(route => {
            this.setState({
                active: route.pathname + route.hash
            });
        });
    }

    componentDidMount() {
        $(".nav-item")
            .on("mouseenter", function () {
                $(this).find("ul.submenu").slideDown(200);
            })
            .on("mouseleave", function () {
                $(this).find("ul.submenu").slideUp(200);
            });

        let timeout;
        let throttle = 500;
        $(window).resize(() => {
            if (this.state.userSidebarOpen && !timeout) {
                timeout = setTimeout(() => {
                    this.setUserSidebarWidth();
                    timeout = null;
                }, throttle);
            }
        });
        $(this.refs.backdrop).on("click", this.hideSidebar);
        $(".navbar-brand, .navbar-nav:not(.sign-in), .sidebar-wrapper li").on("click", this.hideSidebar);

        this.deactivateImgContextMenu();
    }

    componentDidUpdate() {
        this.deactivateImgContextMenu();
    }

    componentWillUnmount() {
        $(".nav-item").off();
        $(this.refs.backdrop).off();
        $(".navbar-brand, .navbar-nav:not(.sign-in), .sidebar-wrapper li").off();
    }

    deactivateImgContextMenu() {
        $("img").contextmenu(function (e) {
            e.preventDefault();
            return false;
        });
    }

    hideSidebar() {
        $(this.refs.sidebar).width(0);
        this.setState({userSidebarOpen: false});
    }

    setUserSidebarWidth() {
        let sideBar = $(this.refs.sidebar),
            navSignIn = $(this.refs.navSignIn);
        sideBar.width($(window).width() - navSignIn.offset().left);
    }

    toggleUserSidebar() {
        let userSidebarOpen = this.state.userSidebarOpen,
            sideBar = $(this.refs.sidebar),
            navSignIn = $(this.refs.navSignIn);
        if (userSidebarOpen) {
            sideBar.width(0);
        } else {
            sideBar.width($(window).width() - navSignIn.offset().left);
        }
        this.setState({userSidebarOpen: !userSidebarOpen});
    }

    render() {
        let {active, userSidebarOpen} = this.state;
        let {user} = this.props;
        return (
            <header>
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
                                <li className={classnames("nav-item disabled", {"active": active === "/#teams"})}>
                                    <Link to={{pathname: "/", hash: "#teams"}} className="nav-link">Teams</Link>
                                </li>
                                <li className={classnames("nav-item disabled", {"active": active === "/#spielplan"})}>
                                    <Link to={{pathname: "/", hash: "#spielplan"}} className="nav-link">Spielplan</Link>
                                </li>
                                <li className={classnames("nav-item", {"active": active === "/#bulls"})}>
                                    <Link to={{pathname: "/", hash: "#bulls"}} className="nav-link">Über die Bulls</Link>
                                    <ul className="submenu">
                                        <li className={classnames({"active": active === "/streamzeiten"})}><Link to={{pathname: "/streamzeiten"}} className="nav-link">Streamzeiten</Link></li>
                                    </ul>
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
                            <ul ref="navSignIn" className="navbar-nav sign-in">
                                {user ? (
                                    <li className="nav-item logged-in">
                                        <a className="username" onClick={this.toggleUserSidebar}><i className="fas fa-user"/>{user.username}</a>
                                    </li>
                                ) : (
                                    <li className="nav-item">
                                        <i className="fas fa-user d-none d-lg-inline-block" /> <Link to="/login" className="nav-link">Einloggen</Link>|<Link to="/registrieren" className="nav-link">Registrieren</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={classnames("sidebar-wrapper", {"open": userSidebarOpen})}>
                    <ul ref="sidebar">
                        <li><Link to="/mein-profil"><i className="fas fa-address-card" />Mein Profil</Link></li>
                        {/*<li><Link to="/einstellungen"><i className="fas fa-cog" />Einstellungen</Link></li>*/}
                        <li><Link to="/kalender"><i className="far fa-calendar-alt" />Kalender</Link></li>
                        <li onClick={() => { this.props.dispatch(logout()); }}><Link to={this.props.location}><i className="fas fa-sign-out-alt" />Ausloggen</Link></li>
                    </ul>
                    <div ref="backdrop" className="backdrop" />
                </div>
            </header>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        ...state
    };
}
export default withRouter(connect(mapStateToProps)(Header));