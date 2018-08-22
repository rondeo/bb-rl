import React from "react";
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
import NewFollower from "./views/NewFollower/NewFollower";
import NewSub from "./views/NewSub/NewSub";
import NewBits from "./views/NewBits/NewBits";
import StreamTimes from "./views/StreamTimes/StreamTimes";
import TournamentList from "./views/TournamentList/TournamentList";
import Admin from "./views/Admin/Admin";
import Bulls from "./views/Bulls/Bulls";
import TournamentRegistration from "./views/TournamentRegistration/TournamentRegistration";
import Calendar from "./views/Calendar/Calendar";
import MyProfile from "./views/MyProfile/MyProfile";
import Commands from "./views/Commands/Commands";
import News from "./views/News/News";
import NewsDetail from "./views/NewsDetail/NewsDetail";

import requireAuthentication from "./utils/AuthComponent";

import {DEFAULT_LANG, SUPPORTED_LANG} from "./i18n/supportedLanguages";

import "./App.css";

// i18n - Translations
addLocaleData(deLocaleData);
addLocaleData(enLocaleData);

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        moment.locale(this.getLocale());
    }

    // get locale from url
    getLocale() {
        let locale = window.location.pathname.split("/")[1];
        // Route to Default Language (de) if no language in URL
        if (SUPPORTED_LANG.concat(DEFAULT_LANG).indexOf(locale) === -1) {
            window.history.pushState({}, "", window.location.origin + "/" + DEFAULT_LANG + window.location.pathname + window.location.search);
        }
        return locale;
    }

    buildLocalizedPath(url) {
        return "/" + this.getLocale() + url;
    }

    render() {
        const locale = this.getLocale();
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
                                <Route path={this.buildLocalizedPath("/new-bits")} component={NewBits} exact/>
                                <Route path={this.buildLocalizedPath("/new-follower")} component={NewFollower} exact/>
                                <Route path={this.buildLocalizedPath("/new-sub")} component={NewSub} exact/>
                                <Route path={messages["route.register"]} component={Registration} exact/>
                                <Route path={messages["route.rlOverlay"]} component={RocketLeagueOverlay} exact/>
                                <Route path={messages["route.schedule"]} component={StreamTimes} exact/>
                                <Route path={messages["route.tournament"]} component={requireAuthentication(TournamentList)} exact/>
                                <Route path={messages["route.bulls"]} component={Bulls} exact/>
                                <Route path={messages["route.tournamentRegistration"]} component={TournamentRegistration} exact/>
                                <Route path={messages["route.calendar"]} component={requireAuthentication(Calendar)} exact/>
                                <Route path={messages["route.myProfile"]} component={requireAuthentication(MyProfile)} exact/>
                                <Route path={messages["route.commands"]} component={Commands} exact/>
                                <Route path={messages["route.news"]} component={News} exact/>
                                <Route path={messages["route.newsDetail"]} component={NewsDetail} exact/>
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

export default App;
