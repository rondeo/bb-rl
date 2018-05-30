import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Imprint from './views/Imprint/Imprint';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import Privacy from './views/Privacy/Privacy';
import RocketLeagueOverlay from './views/RocketLeagueOverlay/RocketLeagueOverlay';
import NewFollower from "./views/NewFollower/NewFollower";
import NewSub from "./views/NewSub/NewSub";

import './App.css';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Header/>
                    <main>
                        <Switch>
                            <Route path="/" component={Home} exact/>
                            <Route path="/anmelden" component={Login} exact/>
                            <Route path="/datenschutz" component={Privacy} exact/>
                            <Route path="/impressum" component={Imprint} exact/>
                            <Route path="/rl-overlay" component={RocketLeagueOverlay} exact/>
                            <Route path="/new-follower" component={NewFollower} exact/>
                            <Route path="/new-sub" component={NewSub} exact/>
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
