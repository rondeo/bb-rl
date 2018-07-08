import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import moment from "moment";

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

import "./App.css";

class App extends React.PureComponent {
    constructor(props) {
        super(props);

        moment.locale("de");
    }
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Header/>
                    <main>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/admin" component={requireAuthentication(Admin, "ROLE_ADMIN")} exact/>
                            <Route path="/datenschutz" component={Privacy} exact/>
                            <Route path="/impressum" component={Imprint} exact/>
                            <Route path="/login" component={Login} exact/>
                            <Route path="/new-bits" component={NewBits} exact/>
                            <Route path="/new-follower" component={NewFollower} exact/>
                            <Route path="/new-sub" component={NewSub} exact/>
                            <Route path="/registrieren" component={Registration} exact/>
                            <Route path="/rl-overlay" component={RocketLeagueOverlay} exact/>
                            <Route path="/streamzeiten" component={StreamTimes} exact/>
                            <Route path="/turniere" component={requireAuthentication(TournamentList)} exact/>
                            <Route path="/bulls" component={Bulls} exact/>
                            <Route path="/anmeldung/:teams?" component={TournamentRegistration} exact/>
                            <Route path="/kalender" component={Calendar} exact/>
                            <Route path="/mein-profil" component={MyProfile} exact/>
                            <Route path="/befehle" component={Commands} exact/>
                            <Route path="/news" component={News} exact/>
                            <Route path="/news/:title" component={NewsDetail} exact/>
                            <Route component={NotFound} exact/>
                        </Switch>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
