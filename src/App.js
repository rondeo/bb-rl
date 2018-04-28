import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Imprint from './views/Imprint/Imprint';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import Privacy from './views/Privacy/Privacy';

import './App.css';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Header/>
                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route path="/anmelden" component={Login}/>
                        <Route path="/datenschutz" component={Privacy}/>
                        <Route path="/impressum" component={Imprint}/>
                        <Route path="*" component={NotFound}/>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
