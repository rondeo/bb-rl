import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

export default class Footer extends PureComponent {
    render() {
        return (
            <footer>
                <div className="container">
                    <Link to="/datenschutz">Datenschutz</Link>
                    <Link to="/impressum">Impressum</Link>
                    <Link to="/kontakt">Kontakt</Link>
                </div>
            </footer>
        );
    }
}