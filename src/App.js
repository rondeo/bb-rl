import React from "react";
import {connect} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Helmet} from "react-helmet";
import moment from "moment";

// i18n - Translations
import {IntlProvider, addLocaleData} from "react-intl";
import deLocaleData from "react-intl/locale-data/de";
import enLocaleData from "react-intl/locale-data/en";
import translations from "./i18n/locales";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Imprint from "./views/Imprint/Imprint";
import Login from "./views/Login/Login";
import Registration from "./views/Registration/Registration";
import NotFound from "./views/NotFound/NotFound";
import Privacy from "./views/Privacy/Privacy";
import RocketLeagueOverlay from "./views/RocketLeagueOverlay/RocketLeagueOverlay";
// import NewFollower from "./views/NewFollower/NewFollower";
// import NewSub from "./views/NewSub/NewSub";
// import NewBits from "./views/NewBits/NewBits";
import StreamTimes from "./views/StreamTimes/StreamTimes";
import TournamentList from "./views/TournamentList/TournamentList";
import Admin from "./views/Admin/Admin";
import Bulls from "./views/Bulls/Bulls";
import TournamentRegistration from "./views/TournamentRegistration/TournamentRegistration";
import Contact from "./views/Contact/Contact";
import Calendar from "./views/Calendar/Calendar";
import MyProfile from "./views/MyProfile/MyProfile";
import Commands from "./views/Commands/Commands";
// import News from "./views/News/News";
// import NewsDetail from "./views/NewsDetail/NewsDetail";
import Scum from "./views/Scum/Scum";

import {setLanguage} from "./actions/ApplicationActions";

import requireAuthentication from "./utils/AuthComponent";

import {DEFAULT_LANG, SUPPORTED_LANG} from "./i18n/supportedLanguages";

import "./App.css";

// i18n - Translations
addLocaleData(deLocaleData);
addLocaleData(enLocaleData);

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        moment.locale(props.currentLanguage);

        const localeFromUrl = this.getLocaleFromUrl();
        // Set application language if it differ from language from url (requested url)
        if (localeFromUrl !== props.currentLanguage) {
            // If language from url not supported set default language
            if (SUPPORTED_LANG.concat(DEFAULT_LANG).indexOf(localeFromUrl) === -1) {
                window.history.pushState({}, "", window.location.origin + "/" + DEFAULT_LANG + "/");
                props.dispatch(setLanguage(DEFAULT_LANG));
            } else {
                props.dispatch(setLanguage(localeFromUrl));
            }
        }
    }

    componentDidMount() {
        const messages = translations[this.getLocaleFromUrl()];
        window.cookieconsent.initialise({
            "palette": {
                "popup": {
                    "background": "rgba(8, 26, 41, 0.9)",
                    "text": "#fff"
                },
                "button": {
                    "background": "transparent",
                    "text": "#e31d3c",
                    "border": "#e31d3c"
                }
            },
            "position": "bottom-left",
            "type": "opt-out",
            "content": {
                "message": messages["cookie.message"],
                "dismiss": messages["cookie.dismiss"],
                "deny": messages["cookie.deny"],
                "allow": messages["cookie.allow"],
                "link": messages["cookie.link"],
                "policy": messages["cookie.policy"],
                "href": messages["route.privacy"],
                "target": "_blank"
            }
        });
    }

    componentWillUpdate(nextProps, nextState) {
        const localeFromUrl = this.getLocaleFromUrl();
        if (nextProps.currentLanguage !== localeFromUrl) {
            moment.locale(nextProps.currentLanguage);
            // TODO: Improvement: Route to current page instead of start page
            window.history.pushState({}, "", window.location.origin + "/" + nextProps.currentLanguage + "/" /*+ window.location.pathname.replace(localeFromUrl, nextProps.currentLanguage) + window.location.search*/);
        }
    }

    getLocaleFromUrl() {
        return window.location.pathname.split("/")[1];
    }

    buildLocalizedPath(url) {
        return "/" + this.getLocaleFromUrl() + url;
    }

    render() {
        const locale = this.props.currentLanguage;
        const messages = translations[locale];
        return (
            <IntlProvider locale={locale} key={locale} messages={messages}>
                <BrowserRouter>
                    <div id="app">
                        <Helmet htmlAttributes={{"lang": locale}}/>
                        <Header/>
                        <main>
                            <Switch>
                                <Route path={messages["route.home"]} component={Home} exact/>
                                <Route path={messages["route.admin"]} component={requireAuthentication(Admin, "ROLE_ADMIN")} exact/>
                                <Route path={messages["route.privacy"]} component={Privacy} exact/>
                                <Route path={messages["route.imprint"]} component={Imprint} exact/>
                                <Route path={messages["route.login"]} component={Login} exact/>
                                {/* Löschen?
                                <Route path={this.buildLocalizedPath("/new-bits")} component={NewBits} exact/>
                                <Route path={this.buildLocalizedPath("/new-follower")} component={NewFollower} exact/>
                                <Route path={this.buildLocalizedPath("/new-sub")} component={NewSub} exact/>
                                */}
                                <Route path={messages["route.register"]} component={Registration} exact/>
                                <Route path={messages["route.rlOverlay"]} component={RocketLeagueOverlay} exact/>
                                <Route path={messages["route.schedule"]} component={StreamTimes} exact/>
                                <Route path={messages["route.tournament"]} component={requireAuthentication(TournamentList)} exact/>
                                <Route path={messages["route.bulls"]} component={Bulls} exact/>
                                <Route path={messages["route.tournamentRegistration"]} component={TournamentRegistration} exact/>
                                <Route path={messages["route.contact"]} component={Contact} exact/>
                                <Route path="/contact" component={Contact} exact/>
                                <Route path={messages["route.calendar"]} component={requireAuthentication(Calendar)} exact/>
                                <Route path={messages["route.myProfile"]} component={requireAuthentication(MyProfile)} exact/>
                                <Route path={messages["route.commands"]} component={Commands} exact/>
                                {/*
                                <Route path={messages["route.news"]} component={News} exact/>
                                <Route path={messages["route.newsDetail"]} component={NewsDetail} exact/>
                                */}
                                <Route path={messages["route.scum"]} component={Scum} exact/>
                                <Route component={NotFound} exact/>
                            </Switch>
                        </main>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </IntlProvider>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        currentLanguage: state.application.language
    };
}
export default connect(mapStateToProps)(App);
