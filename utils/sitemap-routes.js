import React from 'react';
import {Route, Switch} from 'react-router-dom';
import translations from "../src/i18n/locales";

export default (
    <Switch>
        <Route path={translations["de"]["route.home"]}/>
        <Route path={translations["de"]["route.admin"]}/>
        <Route path={translations["de"]["route.privacy"]}/>
        <Route path={translations["de"]["route.imprint"]}/>
        <Route path={translations["de"]["route.login"]}/>
        <Route path={translations["de"]["route.register"]}/>
        <Route path={translations["de"]["route.rlOverlay"]}/>
        <Route path={translations["de"]["route.schedule"]}/>
        <Route path={translations["de"]["route.tournament"]}/>
        <Route path={translations["de"]["route.bulls"]}/>
        {/*<Route path={translations["de"]["route.tournamentRegistration"]}/>*/}
        <Route path={translations["de"]["route.contact"]}/>
        <Route path={translations["de"]["route.calendar"]}/>
        <Route path={translations["de"]["route.myProfile"]}/>
        <Route path={translations["de"]["route.commands"]}/>
        <Route path={translations["de"]["route.gaOptOut"]}/>

        <Route path={translations["en"]["route.home"]}/>
        <Route path={translations["en"]["route.admin"]}/>
        <Route path={translations["en"]["route.privacy"]}/>
        <Route path={translations["en"]["route.imprint"]}/>
        <Route path={translations["en"]["route.login"]}/>
        <Route path={translations["en"]["route.register"]}/>
        <Route path={translations["en"]["route.rlOverlay"]}/>
        <Route path={translations["en"]["route.schedule"]}/>
        <Route path={translations["en"]["route.tournament"]}/>
        <Route path={translations["en"]["route.bulls"]}/>
        {/*<Route path={translations["en"]["route.tournamentRegistration"]}/>*/}
        <Route path={translations["en"]["route.contact"]}/>
        <Route path={translations["en"]["route.calendar"]}/>
        <Route path={translations["en"]["route.myProfile"]}/>
        <Route path={translations["en"]["route.commands"]}/>
        <Route path={translations["en"]["route.gaOptOut"]}/>
    </Switch>
);