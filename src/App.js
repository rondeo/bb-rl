import React, {PureComponent} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import Imprint from './views/Imprint/Imprint';
import Login from './views/Login/Login';

import './App.css';

class App extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <div id="app">
                    <Route component={Header}/>
                    <main>
                        <Route exact path="/" component={Home}/>
                        <Route path="/anmelden" component={Login}/>
                        <Route path="/impressum" component={Imprint}/>
                    </main>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
