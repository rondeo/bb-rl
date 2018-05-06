import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'mobx-react';
import UserStore from './stores/UserStore';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Imprint from './views/Imprint/Imprint';
import Login from './views/Login/Login';
import Registration from './views/Registration/Registration';
import NotFound from './views/NotFound/NotFound';
import Privacy from './views/Privacy/Privacy';
import TournamentList from './views/TournamentList/TournamentList';

import requireAuthentication from './utils/AuthComponent';

import './App.css';

class App extends React.PureComponent {
    render() {
        return (
            <Provider UserStore={UserStore}>
                <BrowserRouter>
                    <div id="app">
                        <Header/>
                        <main>
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/login" component={Login} exact/>
                                <Route path="/registrieren" component={Registration} exact/>
                                <Route path="/datenschutz" component={Privacy} exact/>
                                <Route path="/impressum" component={Imprint} exact/>
                                <Route path="/turniere" component={requireAuthentication(TournamentList)} exact/>
                                <Route component={NotFound} exact/>
                            </Switch>
                        </main>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
